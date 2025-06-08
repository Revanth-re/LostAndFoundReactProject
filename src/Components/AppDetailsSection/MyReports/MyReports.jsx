import { getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../FireBaseConfig/Firebase'
import { doc } from 'firebase/firestore'
import { updateDoc } from 'firebase/firestore'
import "./MyReports.css"
import LoginPage from '../../../Pages/LoginPage/LoginPage'
import { Button } from 'react-bootstrap'

const MyReports = () => {
    const [Reports,SetFoundReports]=useState([])
    const [Lostreports,setLostReports]=useState([])
const UserDetails=JSON.parse(localStorage.getItem("reactProjectUsers"))
const User=UserDetails.displayName
console.log(User);

    useEffect(()=>{
       const  reportsFetching= async()=>{

       
const docRef=doc(db,"users",User)

const DataFromFb=await getDoc(docRef)
// console.log(DataFromFb.data().WholeItems)
SetFoundReports(DataFromFb.data().WholeItems)

const LostdocRef=doc(db,"FoundUsers",User)

const LostDataFromFb=await getDoc(LostdocRef)
console.log(DataFromFb.data().FoundItems)
setLostReports(LostDataFromFb.data().FoundItems)
// setLostReports(DataFromFb.data().LostItems)




       }
       reportsFetching()
    },[])
// console.log(Lostreports);
// console.log(Reports);



const handleDelete=async(_,indexChoosed)=>{
console.log(indexChoosed);

const LostItemsAfterDelete=Reports.filter((_,index)=> index !== indexChoosed)
// console.log(FoundItemsAfterDelete)
const docRef=  doc(db,"users",User)
await updateDoc(docRef,{
  WholeItems:LostItemsAfterDelete
})
   SetFoundReports(LostItemsAfterDelete) 
   alert("Item Deleted")
console.log(Reports)

}
const handleFoundDelete= async(_,indexChoosed)=>{
  
const FoundItemsAfterDelete=Lostreports.filter((_,index)=> index !== indexChoosed)
// console.log(FoundItemsAfterDelete)
const docRef=  doc(db,"FoundUsers",User)
await updateDoc(docRef,{
  FoundItems:FoundItemsAfterDelete
})
   setLostReports(FoundItemsAfterDelete) 
   alert("Item Deleted")
// console.log(Reports)

}
console.log(Lostreports);


  return (
    
    <div>

    
  <div className="my-reports-wrapper">
    {Reports && Reports.length > 0 ? (
      <>
        <h1 className="section-heading">📦 Found Items</h1>
        <div className="my-reports-section">
          {Reports.map((x, index) => (
            <div key={index} className="report-card">
              <h4 className="item-name">{x.itemname}</h4>
              <p><strong>Brand:</strong> {x.brand}</p>
              <p><strong>Category:</strong> {x.category}</p>
              <p><strong>Color:</strong> {x.color}</p>
              <p><strong>Approx. Value:</strong> {x.approximateValue}</p>
              <p><strong>Contact:</strong> {x.contactPhone}</p>
              <p><strong>Email:</strong> {x.email}</p>
              <p><strong>Date Lost:</strong> {x.dateLost}</p>
              <div className="button-group">
                <Button variant="danger" onClick={() => handleDelete(x, index)}>Delete</Button>
                <Button style={{ backgroundColor: "#053B50" }}>Edit</Button>
              </div>
            </div>
          ))}
        </div>

        <h1 className="section-heading">🔍 Lost Items</h1>
        <div className="my-reports-section">
          {Lostreports.map((x, index) => (
            <div key={index} className="lost-card">
              <div className="report-card">
                <h4 className="item-name">{x.itemname}</h4>
                <p><strong>Brand:</strong> {x.brand}</p>
                <p><strong>Category:</strong> {x.category}</p>
                <p><strong>Color:</strong> {x.color}</p>
                <p><strong>Description:</strong> {x.description}</p>
                <p><strong>Features:</strong> {x.distinctFeatures}</p>
                <p><strong>Date:</strong> {x.dateLost}</p>
                <p><strong>Email:</strong> {x.email}</p>
                <p><strong>Phone:</strong> {x.contactPhone}</p>
                <div className="button-group">
                  <Button variant="danger" onClick={() => handleFoundDelete(x, index)}>Delete</Button>
                  <Button style={{ backgroundColor: "#053B50" }}>Edit</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    ) : (
      <h2 style={{ textAlign: "center", marginTop: "3rem" }}>❗ You haven’t posted any items yet.</h2>
    )}
  </div>


    </div>
  )
}

export default MyReports
