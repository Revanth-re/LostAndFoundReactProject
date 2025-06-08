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
          src={photo || "/default-avatar.png"}
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
        <p><strong>UID:</strong> {userData.uid || "Not available"}</p>
      </div>

      <Button style={{ width: "10vw", marginBottom: "5px" }} variant="danger" onClick={handleLogout}>
        Logout
      </Button> <br />
      <Button style={{ width: "10vw" }} variant="success" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default MyProfile;
