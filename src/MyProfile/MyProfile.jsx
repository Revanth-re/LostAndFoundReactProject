// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import "./MyProfile.css"; // CSS below
// import { FaPlusCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// // import defaultAvatar from "./default-avatar.png"; // add any default image

// const MyProfile = () => {
//     let navigate =useNavigate()
//   const [userData, setUserData] = useState({
//     uid: "",
//     email: "",
//     displayName: "",
//   });
//   const [photo, setPhoto] = useState(localStorage.getItem("profilePhoto") || "");

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("reactProjectUsers"));
//     setUserData(storedUser)
//     console.log();
    
//   }, []);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       localStorage.setItem("profilePhoto", reader.result);
//       setPhoto(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/"; // or navigate to login page
//   };

//   return (
//     <div className="profile-page">
//       <h2>My Profile</h2>

//       <div className="profile-section">
//         <img
//           src={photo||"data:image/jpeg;base64,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"}
//           alt="Profile"
//           className="profile-avatar"
//         /> <br />
  

// <div className="mb-3 text-center">
//   <label htmlFor="profilePic" style={{ cursor: "pointer" }}>
//     <FaPlusCircle style={{ fontSize: "2rem", color: "#0d6efd" }} />
//   </label>

//   <input
//     type="file"
//     accept="image/*"
//     id="profilePic"
//     onChange={handleImageUpload}
//     className="d-none"
//   />

//   <div className="form-text mt-2">Upload Profile Picture</div>
// </div>


//       </div>

//       <div className="profile-info">
//         <p><strong>Name:</strong> {userData.displayName}</p>
//         <p><strong>Email:</strong> {userData.email}</p>
//         <p><strong>UID:</strong> {userData.uid}</p>
//       </div>

//       <Button style={{width:"10vw",marginBottom:"5px"}} variant="danger" onClick={handleLogout}>Logout</Button> <br />
//       <Button style={{width:"10vw"}} variant="success" onClick={()=>navigate(-1)}>Back</Button>
//     </div>
//   );
// };

// export default MyProfile;
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./MyProfile.css";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    uid: "",
    email: "",
    displayName: "",
  });

  const [photo, setPhoto] = useState(localStorage.getItem("profilePhoto") || "");

  useEffect(() => {
    const storedUser = localStorage.getItem("reactProjectUsers");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUserData(parsed);
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
      }
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("profilePhoto", reader.result);
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); // better than window.location.href
  };

  return (
    <div className="profile-page">
      <h2>My Profile</h2>

      <div className="profile-section text-center">
        <img
          src={photo || "data:image/jpeg;base64,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"}
          alt="Profile"
          className="profile-avatar"
          onError={(e) => (e.target.src = "/default-avatar.png")}
        /> <br />

        <div className="mb-3">
          <label htmlFor="profilePic" style={{ cursor: "pointer" }}>
            <FaPlusCircle style={{ fontSize: "2rem", color: "#0d6efd" }} />
          </label>
          <input
            type="file"
            accept="image/*"
            id="profilePic"
            onChange={handleImageUpload}
            className="d-none"
          />
          <div className="form-text mt-2">Upload Profile Picture</div>
        </div>
      </div>

      <div className="profile-info">
        <p><strong>Name:</strong> {userData.displayName || "Not available"}</p>
        <p><strong>Email:</strong> {userData.email || "Not available"}</p>
      
      </div>

      <Button id="Button" variant="danger" onClick={handleLogout}>
        Logout
      </Button> <br />
      <Button id="Button" variant="success" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default MyProfile;
