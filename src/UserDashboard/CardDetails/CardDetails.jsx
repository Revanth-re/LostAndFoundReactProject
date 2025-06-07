// import React from 'react';
// import { useParams } from 'react-router-dom';

// const CardDetails = ({ AllItems = [], AllFoundItems = [] }) => {
//   const { index } = useParams();
// console.log(index)

//   // Match item from either list by ID
//   const matchedItem =
//     AllFoundItems.find(item => item.itemname === index) || AllItems.find(item => item.itemname === index)

//   if (!matchedItem) {
//     return <div className="container mt-4"><h4>Item not found.</h4></div>;
//   }

//   return (
//     <div className="container mt-4">
//       <div className="card p-4 shadow">
//         <img
//           src={matchedItem.imageURL || 'https://via.placeholder.com/400x300'}
//           alt={matchedItem.itemname}
//           className="img-fluid mb-3"
//           style={{ maxHeight: '300px', objectFit: 'cover' }}
//         />
//         <h3>{matchedItem.itemname}</h3>
//         <p><strong>Description:</strong> {matchedItem.description}</p>
//         <p><strong>Location:</strong> {matchedItem.location}</p>
//         <p><strong>Date:</strong> {matchedItem.date}</p>
//         <p><strong>Status:</strong> {matchedItem.status}</p>
//         <p><strong>Contact:</strong> {matchedItem.contact || 'N/A'}</p>
//       </div>
//     </div>
//   );
// };

// export default CardDetails;
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./CardDetails.css"
const CardDetails = ({ AllItems, AllFoundItems }) => {
  console.log(AllItems);
  console.log(AllFoundItems)
  
  
  const {index} = useParams();
  console.log(index)
  
  const navigate = useNavigate();
// console.log(NameOfTheItem)

  // const matchedItem = AllFoundItems.filter(item => item.itemname === index)

  //    || AllItems.filter(item => item.itemname ===index)


  //   console.log(matchedItem);
  
  let matchedItem=AllFoundItems.find((item) =>item.itemname === index)  || AllItems.find((item) =>item.itemname === index)

  console.log(matchedItem)
 
  
    
  if (!matchedItem) {
    return (
      <div className="container mt-5">
        <h4 className="text-danger">Item not found.</h4>
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1); // go back
  };

  const handleClaim = () => {
  navigate("/LostItemClaimForm")
    // Trigger a modal or redirect to claim form
  };

 

  return (
//     <div className="container mt-5">
//       <div className="card shadow p-4">
//         <div className="row">
//           <div className="col-md-5">
//             {console.log(matchedItem.imageURL)
// }
//             <img
//               src={matchedItem.imageURL}
//               alt={matchedItem.itemname}
//               className="img-fluid rounded"
//               style={{ objectFit: 'cover', maxHeight: '300px', width: '100%' }}
//             />
//           </div>
//           <div className="col-md-7">
//             <h3 className="mb-3">{matchedItem.itemname}</h3>
//             <p><strong>Description:</strong> {matchedItem.description}</p>
//             <p><strong>Brand:</strong> {matchedItem.brand || 'N/A'}</p>
//             <p><strong>Color:</strong> {matchedItem.color || 'N/A'}</p>
//             <p><strong>Distinct Features:</strong> {matchedItem.distinctFeatures || 'N/A'}</p>
//             <p><strong>Location:</strong> {matchedItem.location}</p>
//             <p><strong>Place Lost:</strong> {matchedItem.placeLostDetails || 'N/A'}</p>
//             <p><strong>Date Lost:</strong> {matchedItem.dateLost || matchedItem.date}</p>
//             <p><strong>Time Lost:</strong> {matchedItem.timeLost || 'N/A'}</p>
//             <p><strong>Model Number:</strong> {matchedItem.modelNumber || 'N/A'}</p>
//             <p><strong>ID Proof:</strong> {matchedItem.idProof || 'N/A'}</p>
//             <p><strong>Email:</strong> {matchedItem.email}</p>
//             <p><strong>Phone:</strong> {matchedItem.contactPhone || matchedItem.contact || 'N/A'}</p>
//             <p><strong>Category:</strong> {matchedItem.category || 'N/A'}</p>
//             <p><strong>Approx. Value:</strong> ₹{matchedItem.approximateValue || 'N/A'}</p>
//             <p><strong>Reward Offered:</strong> {matchedItem.reward ? 'Yes' : 'No'}</p>
//             <p><strong>Status:</strong> {matchedItem.status || 'Pending'}</p>

//             <div className="mt-4 d-flex gap-3">
//               <button className="btn btn-success" onClick={handleClaim}>
//                 Claim Item
//               </button>
//               <button className="btn btn-danger" onClick={handleReport}>
//                 Report Wrong Info
//               </button>
//               <button className="btn btn-secondary" onClick={handleBack}>
//                 Back
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
<div className="card-details-container">
  <div className="card-box">
    <div className="image-container">
      <img src={matchedItem.imageURL} alt={matchedItem.itemname} />
    </div>
    <div className="details-container">
      <h3>{matchedItem.itemname}</h3>.
         <h3 className="mb-3">{matchedItem.itemname}</h3>            <p><strong>Description:</strong> {matchedItem.description}</p>
           <p><strong>Brand:</strong> {matchedItem.brand || 'N/A'}</p>            <p><strong>Color:</strong> {matchedItem.color || 'N/A'}</p>
            <p><strong>Distinct Features:</strong> {matchedItem.distinctFeatures || 'N/A'}</p>
             <p><strong>Location:</strong> {matchedItem.location}</p>             <p><strong>Place Lost:</strong> {matchedItem.placeLostDetails || 'N/A'}</p>
             <p><strong>Date Lost:</strong> {matchedItem.dateLost || matchedItem.date}</p>            <p><strong>Time Lost:</strong> {matchedItem.timeLost || 'N/A'}</p>
            <p><strong>Model Number:</strong> {matchedItem.modelNumber || 'N/A'}</p>
             <p><strong>ID Proof:</strong> {matchedItem.idProof || 'N/A'}</p>             <p><strong>Email:</strong> {matchedItem.email}</p>
            <p><strong>Phone:</strong> {matchedItem.contactPhone || matchedItem.contact || 'N/A'}</p>
            <p><strong>Category:</strong> {matchedItem.category || 'N/A'}</p>
          <p><strong>Approx. Value:</strong> ₹{matchedItem.approximateValue || 'N/A'}</p>
           <p><strong>Reward Offered:</strong> {matchedItem.reward ? 'Yes' : 'No'}</p>
<p><strong>Status:</strong> {matchedItem.status || 'Pending'}</p>

      {/* your details here... */}
      <div className="button-group">
        <button className="btn-success" onClick={handleClaim}>Claim Item</button>
        {/* <button className="btn-danger" onClick={handleReport}>Report Wrong Info</button> */}
        <button className="btn-secondary" onClick={handleBack}>Back</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default CardDetails;
