import React, { useEffect, useState } from 'react'
import { getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../FireBaseConfig/Firebase';
import { doc } from 'firebase/firestore';
import "./UserProvidedFound.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {Badge} from "react-bootstrap"
import LoginPage from '../Pages/LoginPage/LoginPage';
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
   
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,auto)", margin:"2px" }} >
   {ProvidedData?<div>{ProvidedData.map((x,index)=>{
      return(
        <div className="profile-card">
        <h1>{x.email}</h1>
        <h2>{x.Fullname}</h2>
        <h3>{x.Contact}</h3>
        <Button><a  style={{color:"black"}} href={`tel:${x.Contact}`} target='_blank'>Call him</a></Button>
    
      {/* <Button style={{marginRight:"8px"}} >MessageHim</Button>  */}
    <Button style={{marginLeft:"5px", marginRight:'5px'}}> <a style={{color:"black"}} href={`https://wa.me/${x.Contact}`} target='_blank'>Whatsaap</a></Button>
        <Button className='bg-danger' onClick={()=>HandleReject(index)}>Reject</Button>
        </div>
      )
    })}
  {console.log(FoundProvData)
  }
    {FoundProvData.map((x,index)=>{
  
      return(
        
        <div className="profile-card">
        <h1>{x.email}</h1>
        <h2>{x.Fullname}</h2>
        <h3>{x.Contact}</h3>
        <Button><a  style={{color:"black"}} href={`tel:${x.Contact}`} target='_blank'>Call him</a></Button>
    
      {/* <Button style={{marginRight:"8px"}} >MessageHim</Button>  */}
    <Button style={{marginLeft:"5px", marginRight:'5px'}}> <a style={{color:"black"}} href={`https://wa.me/${x.Contact}`} target='_blank'>Whatsaap</a></Button>
        <Button className='bg-danger' onClick={()=>HandleReject(index)}>Reject</Button>
        </div>
      )
    })}
       {/* <h1>FullName:{ProvidedData.FullName}</h1>
  //     <h2>Desription:{ProvidedData.DescriptionPlace}</h2>
  //     <h2>Email:{ProvidedData.email}</h2>
  //     <h3>Contact:{ProvidedData.Contact}</h3>
  //     <button>Message Him</button> */}
    </div>:<h1>there is no updates for you broh</h1>}
     </div>
  )
}

export default UserProvidedFound
