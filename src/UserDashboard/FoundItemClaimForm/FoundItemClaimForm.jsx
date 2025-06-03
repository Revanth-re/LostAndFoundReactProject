// import React, { useEffect, useState } from "react";
// import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";
// import { db } from "../../FireBaseConfig/Firebase";
// // import { db } from "../firebase"; // adjust to your Firebase config
// import { collection, addDoc, Timestamp, updateDoc } from "firebase/firestore";
// import { getDocs } from "firebase/firestore";
// import { doc } from "firebase/firestore";
// import "./FoundItemClaimForm.css";
// const FoundItemClaimForm = ({ show, onHide, item }) => {
//   const [NotifyDataofItems, setNotifyData] = useState({});
//   const [open, setOpen] = useState(false);
//   const handleClick = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   console.log("hello");
//   let DataFoundFromLs = JSON.parse(localStorage.getItem("ClaimFounds"));
//   let UserData = DataFoundFromLs[0].email;
//   console.log(UserData);

//   let AllItemsFromDocs = [];
//   useEffect(() => {
//     const fetchingData = async () => {
//       const allDocs = await getDocs(collection(db, "users"));
//       console.log(allDocs);

   

//       allDocs.docs.forEach((doc) => {
//         const individualItems = doc.data().WholeItems || [];
//         individualItems.forEach((item) => AllItemsFromDocs.push(item));
//         console.log(AllItemsFromDocs);
//       });
//       console.log(AllItemsFromDocs);
//       let NotifyData = AllItemsFromDocs.find((x) => x.email === UserData);
//       console.log(NotifyData);
//       console.log(NotifyData.email);
//             console.log(NotifyData.name)

//       // console.log();
      
//       setNotifyData(NotifyData.name);

    
//     };
//     fetchingData();
//   });
// console.log(NotifyDataofItems);

//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [claim, setClaimForm] = useState({});

//   const fetchData = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccessMsg("");

//     try {
     
//      const DocRef=doc(db,"users",`${NotifyDataofItems}`)
//      await updateDoc(DocRef,{claim})

//       alert("submitted successfully");
//     } catch (error) {
//       console.error("Error submitting claim:", error);
//       alert("Something went wrong. Try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <div className="claim-card">
//         <h3 className="claim-title">⚠️ Verification Required</h3>

//         <p className="claim-text">
//           We're sorry for the inconvenience, but we must verify your identity
//           before proceeding. This ensures the rightful owner is reunited with
//           the lost item.
//         </p>

//         <p className="claim-text">
//           Kindly fill in your details in the next step to continue.
//         </p>

//         <h4 className="claim-subtitle">
//           Are you sure you want to Proceed this proccess?
//         </h4>

//         <Button variant="primary" size="lg" onClick={handleClick}>
//           ✅ Yes, I Want to Proceed
//         </Button>
//       </div>
//       <Modal show={open} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           {/* <Modal.Title>I Found This Item</Modal.Title> */}
//         </Modal.Header>
//         <Modal.Body>
//           {successMsg && <Alert variant="success">{successMsg}</Alert>}
//           <Form
//             onSubmit={fetchData}
//             className="claimer-form mt-4 p-4 shadow-lg rounded"
//           >
//             <h4 className="mb-4 text-center text-primary fw-bold">
//               Verification to Proceed Found Item
//             </h4>
//             <p className="text-muted text-center mb-4">
//               Please provide your details for verification. This helps us ensure
//               the item is returned to the rightful owner.
//             </p>

//             <Form.Group controlId="name" className="mb-3">
//               <Form.Label className="fw-semibold">Your Full Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 required
//                 onChange={(e) =>
//                   setClaimForm({ ...claim, Fullname: e.target.value })
//                 }
//                 placeholder="Enter your full name"
//               />
//             </Form.Group>

//             <Form.Group controlId="phone" className="mb-3">
//               <Form.Label className="fw-semibold">Contact Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 name="phone"
//                 required
//                 onChange={(e) =>
//                   setClaimForm({ ...claim, Contact: e.target.value })
//                 }
//                 placeholder="e.g., +91-XXXXXXXXXX"
//               />
//             </Form.Group>

//             <Form.Group controlId="email" className="mb-3">
//               <Form.Label className="fw-semibold">Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 required
//                 onChange={(e) =>
//                   setClaimForm({ ...claim, email: e.target.value })
//                 }
//                 placeholder="you@example.com"
//               />
//             </Form.Group>

//             <Form.Group controlId="note" className="mb-3">
//               <Form.Label className="fw-semibold">
//                 Where did you Find the item?
//               </Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="note"
//                 onChange={(e) =>
//                   setClaimForm({ ...claim, DescriptionPlace: e.target.value })
//                 }
//                 placeholder="Give details such as location, time, description, etc."
//               />
//             </Form.Group>

//             <Form.Group controlId="image" className="mb-4">
//               <Form.Label className="fw-semibold">
//                 Can you please Provide A current Item Image
//               </Form.Label>
//               <Form.Control
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={(e) =>
//                   setClaimForm({ ...claim, image: e.target.value })
//                 }
//               />
//             </Form.Group>

//             <div className="d-grid">
//               <Button variant="success" type="submit" disabled={loading}>
//                 {loading ? (
//                   <Spinner size="sm" animation="border" />
//                 ) : (
//                   "Submit Verification"
//                 )}
//               </Button>
//               {/* <button className="btn btn-secondary">Secondary</button> */}
//             </div>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default FoundItemClaimForm;
import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";

import { db } from "../../FireBaseConfig/Firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import "./FoundItemClaimForm.css";

const FoundItemClaimForm = () => {
  const [userDocId, setUserDocId] = useState("");
  const [open, setOpen] = useState(false);
 
  const [claim, setClaimForm] = useState({
    Fullname: "",
    Contact: "",
    email: "",
    DescriptionPlace: "",
    image: "",
  });

  useEffect(() => {
    const fetchUserDocId = async () => {
      const DataFoundFromLs = JSON.parse(localStorage.getItem("ClaimFounds"));
   

      const userEmail = DataFoundFromLs[0].email;
      const snapshot = await getDocs(collection(db, "users"))
console.log(snapshot);

      snapshot.forEach((docSnap) => {
        console.log(docSnap.id)
        
        const userItems = docSnap.data().WholeItems || [];
       
        
        const foundItem = userItems.find((item) => item.email === userEmail);
        console.log(foundItem);
        // console.log(docSnap.id);
        
        if (foundItem) {
          setUserDocId(docSnap.id) // Save correct document ID
        }
      });
    };

    fetchUserDocId();
  }, []);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async (e) => {
    e.preventDefault();
  

    try {
      if (!userDocId) {
        alert("User document not found.");
        return;
      }
console.log(userDocId)

      const docRef = doc(db, "users", userDocId)

      await updateDoc(docRef, {
        // arrayUnion()
      Data:arrayUnion(claim)
        
        
      });


      setClaimForm({
        Fullname: "",
        Contact: "",
        email: "",
        DescriptionPlace: "",
        image: "",
      });
      alert("Form Submitted")
    } catch (error) {
      console.error("Error submitting claim:", error);
      alert("Something went wrong. Try again.");
    }

  
  };

  return (
    <div>
      <div className="claim-card">
        <h3 className="claim-title">⚠️ Verification Required</h3>
        <p className="claim-text">
          We're sorry for the inconvenience, but we must verify your identity
          before proceeding. This ensures the rightful owner is reunited with
          the lost item.
        </p>
        <p className="claim-text">
          Kindly fill in your details in the next step to continue.
        </p>
        <h4 className="claim-subtitle">
          Are you sure you want to proceed with this process?
        </h4>
        <Button variant="primary" size="lg" onClick={handleClick}>
          ✅ Yes, I Want to Proceed
        </Button>
      </div>

      <Modal show={open} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
       
          <Form
            onSubmit={fetchData}
            className="claimer-form mt-4 p-4 shadow-lg rounded"
          >
            <h4 className="mb-4 text-center text-primary fw-bold">
              Verification to Proceed Found Item
            </h4>
            <p className="text-muted text-center mb-4">
              Please provide your details for verification. This helps us ensure
              the item is returned to the rightful owner.
            </p>

            <Form.Group controlId="name" className="mb-3">
              <Form.Label className="fw-semibold">Your Full Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={claim.Fullname}
                onChange={(e) =>
                  setClaimForm({ ...claim, Fullname: e.target.value })
                }
                placeholder="Enter your full name"
              />
            </Form.Group>

            <Form.Group controlId="phone" className="mb-3">
              <Form.Label className="fw-semibold">Contact Number</Form.Label>
              <Form.Control
                type="tel"
                required
                value={claim.Contact}
                onChange={(e) =>
                  setClaimForm({ ...claim, Contact: e.target.value })
                }
                placeholder="e.g., +91-XXXXXXXXXX"
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control
                type="email"
                required
                value={claim.email}
                onChange={(e) =>
                  setClaimForm({ ...claim, email: e.target.value })
                }
                placeholder="you@example.com"
              />
            </Form.Group>

            <Form.Group controlId="note" className="mb-3">
              <Form.Label className="fw-semibold">
                Where did you find the item?
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={claim.DescriptionPlace}
                onChange={(e) =>
                  setClaimForm({
                    ...claim,
                    DescriptionPlace: e.target.value,
                  })
                }
                placeholder="Give details such as location, time, description, etc."
              />
            </Form.Group>

            <Form.Group controlId="image" className="mb-4">
              <Form.Label className="fw-semibold">
                Can you please provide a current item image
              </Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setClaimForm({ ...claim, image: reader.result }); // base64 fallback
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="success" type="submit" >
                Submit
                {/* { (
                  <Spinner size="sm" animation="border" />
                ) : (
                  "Submit Verification"
                )} */}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FoundItemClaimForm;
