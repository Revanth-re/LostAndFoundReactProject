// import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// import { db } from "../FireBaseConfig/Firebase";
// import { Button } from "react-bootstrap";
import SideBar from "../Components/SideBar/SideBar";
import "./UserDashBoard.css";
import DisplayData from "./DisplayComponent/DisplayData";
// import { useNavigate } from "react-router-dom";
const UserDashBoard = ({AllItems,AllFoundItems}) => {
      
  const [CategoryValue, setCategoryValue] = useState("");
const [CatSection,setCatSection]=useState("")
const [FilData,setFilData]=useState("")



  return (
    <div style={{ display: "flex" }}>
    
      <SideBar setCategoryValue={setCategoryValue} setCatSection={setCatSection} setFilData={setFilData} ></SideBar>
      
      <div>

        <DisplayData CategoryValue={CategoryValue} CatSection={CatSection} FilData={FilData} AllItems={AllItems} AllFoundItems={AllFoundItems} ></DisplayData>
      </div>
    </div>
  );
};

export default UserDashBoard;
