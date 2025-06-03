import React from 'react'
import SignUpPage from './Pages/SignupPage/SignUpPage'
import NavbarComp from './Components/NavbarComp'
import LoginPage from './Pages/LoginPage/LoginPage'
import {Route,Routes} from "react-router-dom"
import UserDashBoard from './UserDashboard/UserDashBoard'
import LostItems from './Components/LostItems/LostItems'
import FoundItems from './Components/FoundItems/FoundItems'
import HelpPage from './Components/AppDetailsSection/HelpPage/HelpPage'
import Contactpage from './Components/AppDetailsSection/ContactPage/Contactpage'
import FoundItemClaimForm from './UserDashboard/FoundItemClaimForm/FoundItemClaimForm'
import UserProvidedFound from './UserProvidedFoundItems/UserProvidedFound'
import LostItemClaimForm from './UserDashboard/LostItemClaimForm/LostItemClaimForm'
import CardDetails from './UserDashboard/CardDetails/CardDetails'
import {useNavigate} from "react-router-dom"
import { useState,useEffect } from 'react'
import SideBar from './Components/SideBar/SideBar'
import { getDocs,collection } from 'firebase/firestore'
import { db } from './FireBaseConfig/Firebase'
import DisplayData from './UserDashboard/DisplayComponent/DisplayData'
import MyReports from './Components/AppDetailsSection/MyReports/MyReports'
// import Chat from './Components/Chat'
const App = () => {

      
  
    const [AllItems, setAllItems] = useState([]);

  
    const [AllFoundItems, setAllFoundItems] = useState([]);
 
 
  
  
  
  
  
    useEffect(() => {
        let AllItemsFromDocs = [];
              
  
      const fetchingData = async () => {
        const allDocs = await getDocs(collection(db, "users"));
  
        allDocs.docs.forEach((doc) => {
          const individualItems = doc.data().WholeItems || [];
          individualItems.forEach((item) => AllItemsFromDocs.push(item));
        });
  // console.log(AllItemsFromDocs);
  
        setAllItems(AllItemsFromDocs)
        // setAllFoundItems(AllItemsFromDocs)
    // setFilterations(AllItemsFromDocs)
     
      
    
   
        const FoundDocs = await getDocs(collection(db, "FoundUsers"));
    let AllItemsFromFoundDocs = [];
        FoundDocs.docs.forEach((doc) => {
          const individualFoundItems = doc.data().FoundItems || [];
          individualFoundItems.forEach((item) =>
            AllItemsFromFoundDocs.push(item)
          );
        });
  
        setAllFoundItems(AllItemsFromFoundDocs);
      // setCurrentFilDataTwo(AllItemsFromFoundDocs)
      };
  
  
      fetchingData();
   
 
  
    }, [])

    // console.log(AllItems)
    // console.log(AllFoundItems);
    
    
    // useEffect(()=>{
    //   if(CategoryValue==="All"){
    //     setCurrentFilData(AllItems)
    //   } else{
    //   const FilterData=AllItems.filter((x)=> x.category===CategoryValue)
    //   console.log(FilterData);
    //   setCurrentFilData(FilterData)
    //   }
      
    // },[CategoryValue])
   
    
    
    // useEffect(()=>{
    //   if(FilData==="All"){
    //     setCurrentFilDataTwo(AllFoundItems)
    //   } else{
    //   const FilterDataTwo=AllFoundItems.filter((x)=> x.category===FilData)
      
    //   setCurrentFilDataTwo(FilterDataTwo)
   
    //   }
      
    // },[FilData])

  
  return (
    <div>
      {/* <CardDetails></CardDetails> */}
      <NavbarComp/>
      {/* <Chat></Chat> */}
      {/* <UserProvidedFound/> */}
      <Routes>
        <Route path="/signup" element={ <SignUpPage/>}></Route>
        <Route path="/FoundItems" element={ <FoundItems/>}></Route>
        <Route path="/LostItems" element={ <LostItems/>}></Route>
                <Route path="/loginPage" element={ <LoginPage/>}></Route>
                <Route path="/userdashBoard" element={ <UserDashBoard AllItems={AllItems} AllFoundItems={AllFoundItems}/>}>
                </Route>
                <Route path='/DisplayData' element={<DisplayData AllItems={AllItems} AllFoundItems={AllFoundItems} />}></Route>
                <Route path='/Items/:index' element={<CardDetails AllItems={AllItems} AllFoundItems={AllFoundItems}/>}></Route>
                <Route path="/HelpPage" element={ <HelpPage/>}></Route>
                <Route path="/ContactPage" element={ <Contactpage/>}></Route>
                <Route path='/FoundItemClaimForm' element={<FoundItemClaimForm/>}>   </Route>
                <Route path='/LostItemClaimForm' element={<LostItemClaimForm/>}></Route>
                <Route path='/UserProvidedFound' element={<UserProvidedFound/>}/>
             <Route path='/MyReports' element={<MyReports/>}></Route>
                {/* <Route path='/sidebar' element={<SideBar setCategoryValue={setCategoryValue} setCatSection={setCatSection} setFilData={setFilData}/>}></Route> */}


      </Routes>
     
    </div>
  )
}

export default App
