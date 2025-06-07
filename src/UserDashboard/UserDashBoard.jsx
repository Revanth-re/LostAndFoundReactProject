// import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// import { db } from "../FireBaseConfig/Firebase";
// import { Button } from "react-bootstrap";
import SideBar from "../Components/SideBar/SideBar";
import "./UserDashBoard.css";
import DisplayData from "./DisplayComponent/DisplayData";
import Banner from "../Components/BannerComp/Banner";
// import { useNavigate } from "react-router-dom";
const UserDashBoard = ({AllItems,AllFoundItems,loading,reviews,state}) => {
      console.log(state);
      
  const [CategoryValue, setCategoryValue] = useState("");
const [CatSection,setCatSection]=useState("")
const [FilData,setFilData]=useState("")


console.log(CatSection);
console.log(FilData);


  return (
    <div style={{ display: "flex" }}>
    
      <SideBar state={state} setCategoryValue={setCategoryValue} setCatSection={setCatSection} setFilData={setFilData} ></SideBar>
      
      <div>

        <DisplayData reviews={reviews}  setCategoryValue={setCategoryValue} setCatSection={setCatSection} setFilData={setFilData} loading={loading} CategoryValue={CategoryValue} CatSection={CatSection} FilData={FilData} AllItems={AllItems} AllFoundItems={AllFoundItems} ></DisplayData>
      </div>
    </div>
  );
};

export default UserDashBoard;
