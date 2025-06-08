import React from "react";
import "./App.css";
import SignUpPage from "./Pages/SignupPage/SignUpPage";
import NavbarComp from "./Components/NavbarComp";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import UserDashBoard from "./UserDashboard/UserDashBoard";
import LostItems from "./Components/LostItems/LostItems";
import FoundItems from "./Components/FoundItems/FoundItems";
import HelpPage from "./Components/AppDetailsSection/HelpPage/HelpPage";
import Contactpage from "./Components/AppDetailsSection/ContactPage/Contactpage";
import FoundItemClaimForm from "./UserDashboard/FoundItemClaimForm/FoundItemClaimForm";
import UserProvidedFound from "./UserProvidedFoundItems/UserProvidedFound";
import LostItemClaimForm from "./UserDashboard/LostItemClaimForm/LostItemClaimForm";
import CardDetails from "./UserDashboard/CardDetails/CardDetails";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SideBar from "./Components/SideBar/SideBar";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./FireBaseConfig/Firebase";
import DisplayData from "./UserDashboard/DisplayComponent/DisplayData";
import MyReports from "./Components/AppDetailsSection/MyReports/MyReports";
import { Button } from "react-bootstrap";
import Landingpage from "./Components/LandingPage/Landingpage";
import MyProfile from "./MyProfile/MyProfile";
import ReviewComp from "./ReviewComp/ReviewComp";
import { getDoc, doc } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Landingpage from "./Components/LandingPage/Landingpage";
// import Chat from './Components/Chat'
const App = () => {
  const [loading, setLoading] = useState(true);
  console.log(loading);

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


      setAllItems(AllItemsFromDocs);

      const FoundDocs = await getDocs(collection(db, "FoundUsers"));
      let AllItemsFromFoundDocs = [];
      FoundDocs.docs.forEach((doc) => {
        const individualFoundItems = doc.data().FoundItems || [];
        individualFoundItems.forEach((item) =>
          AllItemsFromFoundDocs.push(item)
        );
      });

      setAllFoundItems(AllItemsFromFoundDocs);
      setLoading(false);
      // setCurrentFilDataTwo(AllItemsFromFoundDocs)
    };
    // console.log(loading)

    fetchingData();
  }, []);

  const [NameValue, setNamevalue] = useState("");
  const [OpenState, setOpenState] = useState(false)
  // console.log(loading)
  const [state, setDataState] = useState([]);
  const UserFromLS = JSON.parse(localStorage.getItem("reactProjectUsers"));
  useEffect(() => {
    const FetchingData = async () => {
      const DocsRef = doc(db, "users", `${UserFromLS.displayName}`);
      const ProvidedData = await getDoc(DocsRef);
      console.log(ProvidedData.data().Data);
      if (ProvidedData.data().Data) {
        setDataState(ProvidedData.data().Data);
      } else {
        return <h1>There is No updates You got</h1>;
      }

      console.log(state);
    };

    FetchingData();
  }, []);

  return (
    <div>
      {/* <CardDetails></CardDetails> */}
      <NavbarComp OpenState={OpenState} />
      {/* <Route></Route> */}
      {/* <Button onClick={handlestate}>Login</Button> */}
      {/* <Chat></Chat> */}
      {/* <UserProvidedFound/> */}
      <Routes>
        <Route
          path=""
          element={<Landingpage setOpenState={setOpenState} />}
        ></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/FoundItems" element={<FoundItems />}></Route>
        <Route path="/LostItems" element={<LostItems />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route
          path="/userdashBoard"
          element={
            <UserDashBoard
              state={state}
              loading={loading}
              AllItems={AllItems}
              AllFoundItems={AllFoundItems}
              setNamevalue={setNamevalue}
            />
          }
        ></Route>
        <Route
          path="/DisplayData"
          element={
            <DisplayData
              loading={loading}
              AllItems={AllItems}
              AllFoundItems={AllFoundItems}
              setNamevalue={setNamevalue}
            />
          }
        ></Route>
        {/* <Route path='/Items/:index' element={<CardDetails AllItems={AllItems} AllFoundItems={AllFoundItems} value={NameValue} />}></Route> */}

        <Route
          path="/Items/:index"
          element={
            <CardDetails
              key={window.location.pathname} // this forces rerender
              AllItems={AllItems}
              AllFoundItems={AllFoundItems}
              value={NameValue}
            />
          }
        />

        <Route path="/HelpPage" element={<HelpPage />}></Route>
        <Route path="/ContactPage" element={<Contactpage />}></Route>
        <Route path="/FoundItemClaimForm" element={<FoundItemClaimForm />}>
          {" "}
        </Route>
        <Route
          path="/LostItemClaimForm"
          element={<LostItemClaimForm />}
        ></Route>
        <Route path="/UserProvidedFound" element={<UserProvidedFound />} />
        <Route path="/MyReports" element={<MyReports />}></Route>
        <Route path="/MyProfile" element={<MyProfile />}></Route>
        {/* <Route path='/sidebar' element={<SideBar setCategoryValue={setCategoryValue} setCatSection={setCatSection} setFilData={setFilData}/>}></Route> */}

        <Route path="/MyReview" element={<ReviewComp />}></Route>
      </Routes>
      {/* <LandingPage></LandingPage> */}
      <ToastContainer />
    </div>
  );
};

export default App;
