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
import { FaToggleOff } from "react-icons/fa6";
const SideBar = ({ setCategoryValue, setCatSection, setFilData }) => {
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
        <Button onClick={() => navigate("/FoundItems")} className="report-button">
          Found Item Report
        </Button>
        
        <Button id='btn2' onClick={() => navigate("/LostItems")} className="report-button">
          Lost Item Report
        </Button>
      </div>
      <div id='ToggleBtns' style={{ padding: "10px", backgroundColor: "white", borderRadius: "10px" }}>
       <p>Use Toggle To Filter Individually</p>
       {toggle?        <Button onClick={() => HandleCategory("FoundItems")} >< FaToggleOn/></Button>
:        <Button onClick={() => HandletwoCategory("LostItems")} ><FaToggleOff/></Button>
}
      </div>

      {open ? (
        <div style={{ padding: "10%", backgroundColor: "white", borderRadius: "10px" }} id="BtnSec2" className="sidebar-select">
          <h5>Lost Items Category</h5>
          <Button onClick={() => HandleValue("electronics")}>Electronics</Button>
          <Button onClick={() => HandleValue("documents")}>Documents</Button>
          <Button onClick={() => HandleValue("accessories")}>Accessories</Button>
          <Button onClick={() => HandleValue("otherItems")}>OtherItems</Button><br />
          <Button onClick={() => HandleValue("All")}>All</Button>
        </div>
      ) : (
        <div style={{ padding: "10%", backgroundColor: "white", borderRadius: "10px" }} className="sidebar-select">
          <h5>Found Items Category</h5>
          <Button onClick={() => setFilData("electronics")}>Electronics</Button>
          <Button onClick={() => setFilData("documents")}>Documents</Button>
          <Button onClick={() => setFilData("accessories")}>Accessories</Button>
          <Button onClick={() => setFilData("otherItems")}>OtherItems</Button><br />
          <Button onClick={() => setFilData("All")}>All</Button>
        </div>
      )}

      {/* ✅ Search Input with location + item + category support */}
      {/* <div className="sidebar-search" style={{ padding: "10%", backgroundColor: "white", borderRadius: "10px" }}>
        <Form.Control
          type="text"
          placeholder="Search by item, category, or location..."
          onChange={handleSearchChange}
        />
      </div> */}

    </div>
  );
};

export default SideBar;
