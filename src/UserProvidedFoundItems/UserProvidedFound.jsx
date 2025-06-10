import React, { useEffect, useState } from 'react'
import { getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../FireBaseConfig/Firebase';
import { doc } from 'firebase/firestore';
import "./UserProvidedFound.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {Badge} from "react-bootstrap"
import LoginPage from '../Pages/LoginPage/LoginPage';
import myImage from "/31and32r react/MyReactProject/ReactProject/src/assets/Logo.png"
const UserProvidedFound = () => {
    const [ProvidedData,setProvidedData]=useState([])
    const [FoundProvData,setFoundProvData]=useState([])
let Navigate=useNavigate()
     let UserFromLs=JSON.parse(localStorage.getItem("reactProjectUsers"))
    // console.log(UserFromLs.displayName)
 let CurrentUser=UserFromLs.displayName
    useEffect(()=>{
  

    // console.log(UserFromLs.displayName)
    // console.log(UserFromL)
    
  
   let NotifyData;

    const FetchingData=async()=>{


          let DocsRef = doc(db, "users",`${CurrentUser}`)
const AllProvidedData=await getDoc(DocsRef)
// console.log(ProvidedData.data().Data)
setProvidedData(AllProvidedData.data().Data)

 
   
    }

    
 
      

    
       FetchingData()
       const FetchingFoundData=async()=>{


          let DocsRef = doc(db, "Foundusers",`${CurrentUser}`)
const AllProvidedData=await getDoc(DocsRef)

console.log(AllProvidedData.data());


 if (AllProvidedData.data().Data) {
  setFoundProvData(AllProvidedData.data().Data)
}
else{
  return <h1>There is No data You,ve posted </h1>
}

   
    }
    
    
 
      

    
       FetchingFoundData()
    },[])
 
    // console.log(ProvidedData);
 
   const HandleReject=async (indexChoosed) =>{

    const ItemsAfterReject=ProvidedData.filter((_,x)=>x !== indexChoosed)
    console.log(ItemsAfterReject)
   const DocsRef= doc(db, "users",`${CurrentUser}`)
await updateDoc(DocsRef,{
Data:ItemsAfterReject
})

    console.log(ItemsAfterReject)
    if (ProvidedData) {
       setProvidedData(ItemsAfterReject)
    }
    else{
      return <h1>theres no items youve posted</h1>
    }
   
alert("User Rejected")
  
   }
 console.log(FoundProvData)
 
  return (
   <div className="user-provided-wrapper">
 
    {ProvidedData?<div className='user-grid'>
      {ProvidedData.map((x, index) => (
      <div className="profile-card" key={index}>
      <div id='headers'>
        <h1 style={{textAlign:"center",marginRight:"10%"}}>{x.email}</h1>
        <h2>{x.Fullname}</h2>
        <h3>{x.Contact}</h3>
        <h2>{x.DescriptonPlace}</h2>
        </div>
        <img src={x.image ||myImage } className='profile-img' alt="" />
        <Button><a href={`tel:${x.Contact}`} target="_blank" rel="noreferrer">Call him</a></Button>
        <Button><a href={`https://wa.me/${x.Contact}`} target="_blank" rel="noreferrer">WhatsApp</a></Button>
        <Button className='bg-danger' onClick={() => HandleReject(index)}>Reject</Button>
      </div>
    ))}
    </div>:<h1>No notifications</h1>}
   
{FoundProvData>0?<div className='user-grid'>

 <h1>Found Items</h1>
  {FoundProvData.map((x, index) => (
    
    
      <div className="profile-card" key={index}>
        <div id='headers'>
        <h1>usaiyiwd</h1>  
        <h1>{x.email}</h1>
        <h2>{x.Fullname}</h2>
        <h3>{x.Contact}</h3>
        </div>
        <Button><a href={`tel:${x.Contact}`} target="_blank" rel="noreferrer">Call him</a></Button>
        <Button><a href={`https://wa.me/${x.Contact}`} target="_blank" rel="noreferrer">WhatsApp</a></Button>
        <Button className='bg-danger' onClick={() => HandleReject(index)}>Reject</Button>
      </div>
    ))}

    </div>:<h1>
      No-Found-Items-notifications
    </h1>}
</div>


  )
}

export default UserProvidedFound
