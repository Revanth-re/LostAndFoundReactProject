import React, { useEffect, useState } from 'react';
import "./NavbarComp.css";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {Badge} from 'react-bootstrap';
import { doc,getDoc } from 'firebase/firestore';
import { db } from '../FireBaseConfig/Firebase';
import { RxAvatar } from "react-icons/rx";
import Logo from "/31and32r react/MyReactProject/ReactProject/src/assets/Logo.png"
const NavbarComp = ({OpenState}) => {
console.log(OpenState)

  const [state,setDataState]=useState([])
  // const navigate=useNavigate()
  // let NotifyData;
  const UserFromLS = JSON.parse(localStorage.getItem("reactProjectUsers"));
  const navigate = useNavigate();

  const handleLogout = () => {
    confirm("are you sure to logout")
    localStorage.removeItem("reactProjectUsers")

    navigate("/loginPage");
  };
  console.log(UserFromLS);
  useEffect(()=>{
const FetchingData=async()=>{


          const DocsRef = doc(db, "users",`${UserFromLS.displayName}`);
const ProvidedData=await getDoc(DocsRef)
console.log(ProvidedData.data().Data)
ProvidedData.data().Data
// console.log(NotifyData);
setDataState(ProvidedData.data().Data)
// console.log(ProvidedData.data().claim)


// 
  //  setProvidedData(NotifyData)

 
   
    }
    
 
      

    
       FetchingData()
       
  },[])
//  console.log(state.length)
 
  

  return (
    <Navbar className="custom-navbar" expand="lg" collapseOnSelect sticky="top">
      <Container fluid>
{OpenState?<Button onClick={()=>navigate(-1)}>Back</Button>
:        <Navbar.Brand as={Link} to="/"><img src={Logo} style={{width:"50px",height:"50px"}}></img></Navbar.Brand>
}
        <Navbar.Toggle id='NavbarToggle' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {UserFromLS ? (
            
            <Nav id='ToggleLinks' className="ms-auto linksDiv">
             <Nav.Link as={Link} to="/MyProfile"> < RxAvatar style={{fontSize:"2rem",color:"white"}}/></Nav.Link>
             
            </Nav>
          ) : (
            <Nav id='ToggleLinks' className="ms-auto">
              <Nav.Link style={{color:'white'}} as={Link} to="/signup">Signup</Nav.Link>
              <Nav.Link style={{color:'white'}} as={Link} to="/loginPage">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
