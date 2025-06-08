// import React, { useState } from 'react';
// import { Button,Form } from 'react-bootstrap';
// import './SideBar.css';
// import { useNavigate } from 'react-router-dom';
// import { Modal } from 'react-bootstrap';
// const SideBar = ({setCategoryValue,setCatSection,setFilData}) => {
//    const [open,setOpen]=useState(true)

// // const handleClose=()=>{
// //   setOpen(false)
// // }
//     const HandleValue=(value)=>{

// setCategoryValue(value)




//     }

// //     const setFilData=(valueTwo)=>{
// // setFilData(valueTwo)
// //     }
//     const HandletwoCategory=(CatValue2)=>{
//       setOpen(false)

// setCatSection(CatValue2)
//     }
//     const HandleCategory=(CatValue)=>{
//       setOpen(true)

// setCatSection(CatValue)
// // setCatSection(false)

//     }

//     let Navigate=useNavigate()
//   return (
//     <div className="sidebar">
//       <div id='ToggleBtns' style={{padding:"10px",backgroundColor:"white",borderRadius:"10px"}}>
//   <Button onClick={()=>HandleCategory("FoundItems")} variant='success'>FoundItems</Button>   <Button onClick={()=>HandletwoCategory("LostItems")} variant='success'>LostItems</Button>
// </div>
// { open? 
// <div>
   
//   <div style={{padding:"10%",backgroundColor:"white",borderRadius:"10px"}} id="BtnSec2" className="sidebar-select">
//  <h5>Lost Items Category section</h5>
//     <Button onClick={()=>HandleValue("electronics")}>Electronics</Button>
//     <Button onClick={()=>HandleValue("documents")}>Documents</Button>
//     <Button onClick={()=>HandleValue("accessories")}>Accessories</Button>
// <Button onClick={()=>HandleValue("otherItems")}>OtherItems</Button> <br />
// <Button onClick={()=>HandleValue("All")}>All</Button>


// </div>
//   </div>:<div>
   
//   <div style={{padding:"10%",backgroundColor:"white",borderRadius:"10px"}} className="sidebar-select">
// <h5>Found Items cat Section</h5>
//     <Button onClick={()=>setFilData("electronics")}>Electronics</Button>
//     <Button onClick={()=>setFilData("documents")}>Documents</Button>
//     <Button onClick={()=>setFilData("accessories")}>Accessories</Button>
// <Button onClick={()=>setFilData("otherItems")}>OtherItems</Button> <br />
// <Button onClick={()=>setFilData("All")}>All</Button>

// </div>
//   </div>
        
// }
// {/* 
// <div className="sidebar-search" style={{padding:"10%",backgroundColor:"white",borderRadius:"10px"}}>
//   <input type="text" placeholder="Search items..." />
// </div> */}
// <div className="sidebar-buttons">
//   <Button onClick={()=>Navigate("/FoundItems")}  className="report-button">
//      Found Item Report
//   </Button>
//   <Button id='btn2' onClick={()=>Navigate("/LostItems")}  className="report-button">
//      Lost Item Report
//   </Button>
// </div>
//    </div>
//   );
// };

// export default SideBar;
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';
import { FaToggleOn } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

import {Link}  from "react-router-dom"
import{ Nav,Badge} from 'react-bootstrap';
import { FaToggleOff,FaSquarePhone } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { BsPencilSquare } from "react-icons/bs";

const SideBar = ({ setCategoryValue, setCatSection, setFilData,state }) => {
  const [open, setOpen] = useState(true);
  const [toggle,setToggle]=useState(false)
  const navigate = useNavigate()
  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // unified lowercase input
  };

  const HandleValue = (value) => {
    // console.log(value)
    
    setCategoryValue(value)
  };

  const HandletwoCategory = (CatValue2) => {
    setOpen(false);
    setCatSection(CatValue2);
    setToggle(true)
  };

  const HandleCategory = (CatValue) => {
    setOpen(true);
    setCatSection(CatValue)
    setToggle(false)
  };

  return (
    <div className="sidebar">
  <div className="sidebar-buttons">
    <Button id='Button' onClick={() => navigate("/FoundItems")} className="sidebar-btn">
     <span id='text'>Found Item Report</span>  <span id='span2'>Found</span>
    </Button><Button id='Button' style={{backgroundColor:"#053B50"}} onClick={() => navigate("/LostItems")} className="sidebar-btn">
       <span id='text'>Lost Item Report</span>  <span id='span2'>Lost</span>

  </Button>
  </div>

  <div className="sidebar-links" style={{position:"relative"}}>
    <Nav.Link as={Link} to="/HelpPage"><span id='text'>Help</span> <span id='span'> <MdHelp/>
      </span></Nav.Link><Nav.Link as={Link} to="/ContactPage"><span id='text'>Contact</span> <span id='span'> <FaSquarePhone/>
      </span></Nav.Link><Nav.Link as={Link} to="/UserProvidedFound"><span id='text'>Notifications  <Badge bg='warning' color='dark' >{state.length}</Badge></span> <span id='span'> <IoIosNotifications/>   <Badge
    bg="dark"
    style={{
      position: "absolute",
      top: 50,
      right: 150,
      // bottom:50,
      transform: "translate(50%, -50%)",
      borderRadius: "50%",
      padding: "0.3em 0.5em",
      fontSize: "0.80rem"
    }}
  >
    {state.length}
  </Badge>
  </span>  </Nav.Link>
    <Nav.Link as={Link} to="/MyReports"> <span id='text'>MyReports</span> <span id='span'><SiGoogledocs/></span></Nav.Link>
     <Nav.Link as={Link} to="/MyReview"><span id='text'>Write A Review</span><span id='span'><BsPencilSquare/></span></Nav.Link>
  </div>
</div>

  );
};

export default SideBar;
