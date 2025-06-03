import React, { useEffect, useState } from 'react'
import { getDoc } from 'firebase/firestore';
import { db } from '../FireBaseConfig/Firebase';
import { doc } from 'firebase/firestore';
import "./UserProvidedFound.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const UserProvidedFound = () => {
    const [ProvidedData,setProvidedData]=useState([])
let Navigate=useNavigate()
    useEffect(()=>{
   let UserFromLs=JSON.parse(localStorage.getItem("reactProjectUsers"))
    console.log(UserFromLs);
    
    console.log(UserFromLs.user.displayName)
   let CurrentUser=UserFromLs.user.displayName
   let NotifyData;

    const FetchingData=async()=>{


          const DocsRef = doc(db, "users",`${CurrentUser}`);
const ProvidedData=await getDoc(DocsRef)
console.log(ProvidedData.data().Data)
NotifyData=ProvidedData.data().Data
console.log(NotifyData);

// console.log(ProvidedData.data().claim)


// 
   setProvidedData(NotifyData)

 
   
    }
    
 
      

    
       FetchingData()
    },[])
 
    console.log(ProvidedData);
 
 
  return (
   
   <div style={{display:"flex"}} >
   
    {ProvidedData.map((x)=>{
      return(
        <div className="profile-card">
        <h1>{x.email}</h1>
        <h2>{x.Fullname}</h2>
        <h3>{x.Contact}</h3>
        <Button><a  style={{color:"black"}} href={`tel:${x.Contact}`} target='_blank'>Call him</a></Button>
    
      {/* <Button style={{marginRight:"8px"}} >MessageHim</Button>  */}
    <Button style={{marginLeft:"5px", marginRight:'5px'}}> <a style={{color:"black"}} href={`https://wa.me/${x.Contact}`} target='_blank'>Whatsaap</a></Button>
        <Button onClick={()=>Navigate("/userDashBoard")}>Back</Button>
        </div>
      )
    })}
       {/* <h1>FullName:{ProvidedData.FullName}</h1>
  //     <h2>Desription:{ProvidedData.DescriptionPlace}</h2>
  //     <h2>Email:{ProvidedData.email}</h2>
  //     <h3>Contact:{ProvidedData.Contact}</h3>
  //     <button>Message Him</button> */}
     </div>
  )
}

export default UserProvidedFound
