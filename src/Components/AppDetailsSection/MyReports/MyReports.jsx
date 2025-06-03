import { getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../FireBaseConfig/Firebase'
import { doc } from 'firebase/firestore'
import "./MyReports.css"
import LoginPage from '../../../Pages/LoginPage/LoginPage'
import { Button } from 'react-bootstrap'
const MyReports = () => {
    const [Reports,SetFoundReports]=useState([])
    const [Lostreports,setLostReports]=useState([])
const UserDetails=JSON.parse(localStorage.getItem("reactProjectUsers"))
const User=UserDetails.user.displayName
    useEffect(()=>{
       const  reportsFetching= async()=>{

       
const docRef=doc(db,"users",User)

const DataFromFb=await getDoc(docRef)
console.log(DataFromFb.data().WholeItems)
SetFoundReports(DataFromFb.data().WholeItems)
setLostReports(DataFromFb.data().LostItems)




       }
       reportsFetching()
    },[])
console.log(Lostreports);
console.log(Reports);


  return (
    
    <div>
       <h1>FoundItems</h1>
      <div style={{margin:"5%", display:"flex", gap:"10px"}}>
{Reports.map((x, index) => (
  <div key={index}  className="report-card">
    <h4>{x.itemname}</h4>
    <p><strong>Brand:</strong> {x.brand}</p>
    <p><strong>Category:</strong> {x.category}</p>
    <p><strong>Color:</strong> {x.color}</p>
    <p><strong>Approximate Value:</strong> {x.approximateValue}</p>
    <p><strong>Contact Phone:</strong> {x.contactPhone}</p>
    <p><strong>Email:</strong> {x.email}</p>
    <p><strong>Date Lost:</strong> {x.dateLost}</p>
     <Button>Delete</Button> <br />
        <Button>Edit</Button>
    {/* <p><strong>Time Lost:</strong> {x.timeLost}</p>
    <p><strong>Location:</strong> {x.location}</p>
    <p><strong>Place Lost Details:</strong> {x.placeLostDetails}</p>
    <p><strong>Description:</strong> {x.description}</p>
    <p><strong>Distinct Features:</strong> {x.distinctFeatures}</p>
    <p><strong>ID Proof:</strong> {x.idProof}</p>
    <p><strong>Model Number:</strong> {x.modelNumber}</p>
    <p><strong>Reward:</strong> {x.reward ? "Yes" : "No"}</p> */}
    <hr />
  </div>
))}

      </div>

<div>
      <h1>Lost-Items</h1>
<div className="lost-reports-container">
  
  {Lostreports.map((x, index) => (
  
    <div className="lost-card" key={index}>
    
      {/* <img src={x.imageURL} alt={x.itemname} className="lost-image" /> */}
      <div className="report-card">
        <h4>{x.itemname}</h4>
        <p><strong>Brand:</strong> {x.brand}</p>
        <p><strong>Category:</strong> {x.category}</p>
        <p><strong>Color:</strong> {x.color}</p>
        <p><strong>Description:</strong> {x.description}</p>
        <p><strong>Distinct Features:</strong> {x.distinctFeatures}</p>
        <p><strong>Date Lost:</strong> {x.dateLost}</p>
        <p><strong>Contact Email:</strong> {x.email}</p>
        <p><strong>Phone:</strong> {x.contactPhone}</p>
        <Button>Delete</Button> <br />
        <Button>Edit</Button>
      </div>
    </div>
  ))}
</div>
</div>
    </div>
  )
}

export default MyReports
