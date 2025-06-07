// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { db } from '../../FireBaseConfig/Firebase';
// import { collection, getDocs } from 'firebase/firestore';

// const DisplayData = ({ AllItems, AllFoundItems, CategoryValue, CatSection, FilData }) => {
//   const navigate = useNavigate();

//   const [currentFilData, setCurrentFilData] = useState([]);
//   const [currentFilDataTwo, setCurrentFilDataTwo] = useState([]);
//   const [oneFilteredData, setOneFilteredData] = useState([]);
//   const [twoFilteredData, setTwoFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setCurrentFilData(AllItems);
//     setOneFilteredData(AllItems);
//     setCurrentFilDataTwo(AllFoundItems);
//     setTwoFilteredData(AllFoundItems);
//   }, [AllItems, AllFoundItems]);

//   useEffect(() => {
//     if (CategoryValue === 'All') {
//       setOneFilteredData(AllItems);
//     } else {
//       const filtered = AllItems.filter(x => x.category === CategoryValue);
//       setOneFilteredData(filtered);
//     }
//   }, [CategoryValue])

//   useEffect(() => {
//     if (FilData === 'All') {
//       setTwoFilteredData(AllFoundItems);
//     } else {
//       const filtered = AllFoundItems.filter(x => x.category === FilData);
//       setTwoFilteredData(filtered);
//     }
//   }, [FilData]);

//   const userDetails = JSON.parse(localStorage.getItem('reactProjectUsers'))?.user?.displayName;

//   const handleLost = (item) => {
//     localStorage.setItem('ClaimFounds', JSON.stringify([item]));
//     navigate('/FoundItemClaimForm');
//   };

//   const handleFound = (item) => {
//     localStorage.setItem('ClaimLosts', JSON.stringify([item]));
//     navigate('/LostItemClaimForm');
//   };

//   const handleMoreDetails = (index,itemname) => {
//     navigate(`/Items/${itemname}`);
//   };

//   return (
//     <div className="container mt-4">
//       {/* Search bar */}
//       <div className="mb-3 text-center">
//         <input className="form-control w-50 mx-auto" type="text" placeholder="Search items..." />
//       </div>

//       {/* LOST ITEMS */}
//       <h2 className="text-center mb-4">Lost Items</h2>
//       {oneFilteredData.length === 0 ? (
//         <p className="text-center">No items reported yet.</p>
//       ) : (
//         <div className="row">
//           {oneFilteredData.map((item, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card h-100">
//                 <img
//                   // src={item.imageURL || "https://via.placeholder.com/300x200?text=No+Image"}
//                   alt={item.itemname}
//                   className="card-img-top"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.itemname}</h5>
//                   <p className="card-text">{item.category} • {item.location}</p>
//                   <ul className="list-unstyled">
//                     <li><strong>Brand:</strong> {item.brand}</li>
//                     {item.reward && <li className="text-success">🎁 Reward Offered</li>}
//                   </ul>
//                   <Button
//                  id='Button'
//                     variant="warning"
//                     onClick={() => handleLost(item)}
//                   >
//                     I-Found-it
//                   </Button>
//                   <Button 
//                   id='Button'
//                     variant="primary"
//                     onClick={() => handleMoreDetails(index,item.itemname)}
//                   >
//                     More Details
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* FOUND ITEMS */}
//       <h2 className="text-center mt-5 mb-4">Found Items</h2>
//       {twoFilteredData.length === 0 ? (
//         <p className="text-center">No found items available.</p>
//       ) : (
//         <div className="row">
//           {twoFilteredData.map((item, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <div className="card h-100">
//                 <img
//                   src={item.imageURL || "https://via.placeholder.com/300x200?text=No+Image"}
//                   alt={item.itemname}
//                   className="card-img-top"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.itemname}</h5>
//                   <p className="card-text">{item.category} • {item.location}</p>
//                   <ul className="list-unstyled">
//                     <li><strong>Brand:</strong> {item.brand}</li>
//                     {item.reward && <li className="text-success">🎁 Reward Offered</li>}
//                   </ul>
//                   <Button
//                  id='Button'
//                     variant="warning"
//                     onClick={() => handleFound(item)}
//                   >
//                     I-Lost-this
//                   </Button>
//                   <Button id='Button'
//                     variant="primary"
//                     onClick={() => handleMoreDetails(index,item.itemname)}
//                   >
//                     More Details
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisplayData;
// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Button } from 'react-bootstrap';
// // import { db } from '../../FireBaseConfig/Firebase';
// // // import { db } from '../../FireBaseConfig/Firebase';
// // import { collection, getDocs } from 'firebase/firestore';
// // // import './DisplayData.css'; // Import the external CSS file

// // const DisplayData = ({ AllItems, AllFoundItems, CategoryValue, CatSection, FilData }) => {
// //   const navigate = useNavigate();

// //   const [currentFilData, setCurrentFilData] = useState([]);
// //   const [currentFilDataTwo, setCurrentFilDataTwo] = useState([]);
// //   const [oneFilteredData, setOneFilteredData] = useState([]);
// //   const [twoFilteredData, setTwoFilteredData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   useEffect(() => {
// //     setCurrentFilData(AllItems);
// //     setOneFilteredData(AllItems);
// //     setCurrentFilDataTwo(AllFoundItems);
// //     setTwoFilteredData(AllFoundItems);
// //   }, [AllItems, AllFoundItems]);

// //   useEffect(() => {
// //     if (CategoryValue === 'All') {
// //       setOneFilteredData(AllItems);
// //     } else {
// //       const filtered = AllItems.filter(x => x.category === CategoryValue);
// //       setOneFilteredData(filtered);
// //     }
// //   }, [CategoryValue]);

// //   useEffect(() => {
// //     if (FilData === 'All') {
// //       setTwoFilteredData(AllFoundItems);
// //     } else {
// //       const filtered = AllFoundItems.filter(x => x.category === FilData);
// //       setTwoFilteredData(filtered);
// //     }
// //   }, [FilData]);

// //   useEffect(() => {
// //     const filteredLost = AllItems.filter(item => 
// //       item.itemname.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       item.location.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
    
// //     const filteredFound = AllFoundItems.filter(item => 
// //       item.itemname.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       item.location.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     setOneFilteredData(filteredLost);
// //     setTwoFilteredData(filteredFound);
// //   }, [searchTerm]);

// //   const userDetails = JSON.parse(localStorage.getItem('reactProjectUsers'))?.user?.displayName;

// //   const handleLost = (item) => {
// //     localStorage.setItem('ClaimFounds', JSON.stringify([item]));
// //     navigate('/FoundItemClaimForm');
// //   };

// //   const handleFound = (item) => {
// //     localStorage.setItem('ClaimLosts', JSON.stringify([item]));
// //     navigate('/LostItemClaimForm');
// //   };

// //   const handleMoreDetails = (index) => {
// //     navigate(`/Items/${index}`);
// //   };

// //   return (
// //     <div className="display-data-container">
// //       {/* Search bar */}
// //       <div className="search-container">
// //         <input 
// //           className="search-input" 
// //           type="text" 
// //           placeholder="Search items by name, category or location..." 
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />
// //       </div>

// //       {/* LOST ITEMS */}
// //       <h2 className="section-title">Lost Items</h2>
// //       {oneFilteredData.length === 0 ? (
// //         <p className="no-items-message">No lost items found.</p>
// //       ) : (
// //         <div className="cards-container">
// //           {oneFilteredData.map((item, index) => (
// //             <div className="card-item" key={index}>
// //               <div className="card">
// //                 <img
// //                   src={item.imageURL || "https://via.placeholder.com/300x200?text=No+Image"}
// //                   alt={item.itemname}
// //                   className="card-image"
// //                 />
// //                 <div className="card-body">
// //                   <h5 className="card-title">{item.itemname}</h5>
// //                   <p className="card-category-location">{item.category} • {item.location}</p>
// //                   <div className="card-details">
// //                     <p><strong>Brand:</strong> {item.brand}</p>
// //                     {item.reward && <p className="reward-badge">🎁 Reward Offered</p>}
// //                   </div>
// //                   <div className="card-buttons">
// //                     <Button
// //                       className="claim-button"
// //                       variant="warning"
// //                       onClick={() => handleLost(item)} 
// //                     >
// //                     found-it
// //                     </Button>
// //                     <Button
// //                       className="details-button"
// //                       variant="primary"
// //                       onClick={() => handleMoreDetails(index)}
// //                     >
// //                       Details
// //                     </Button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* FOUND ITEMS */}
// //       <h2 className="section-title">Found Items</h2>
// //       {twoFilteredData.length === 0 ? (
// //         <p className="no-items-message">No found items available.</p>
// //       ) : (
// //         <div className="cards-container">
// //           {twoFilteredData.map((item, index) => (
// //             <div className="card-item" key={index}>
// //               <div className="card">
// //                 <img
// //                   src={item.imageURL || "https://via.placeholder.com/300x200?text=No+Image"}
// //                   alt={item.itemname}
// //                   className="card-image"
// //                 />
// //                 <div className="card-body">
// //                   <h5 className="card-title">{item.itemname}</h5>
// //                   <p className="card-category-location">{item.category} • {item.location}</p>
// //                   <div className="card-details">
// //                     <p><strong>Brand:</strong> {item.brand}</p>
// //                     {item.reward && <p className="reward-badge">🎁 Reward Offered</p>}
// //                   </div>
// //                   <div className="card-buttons">
// //                     <Button
// //                       className="claim-button"
// //                       variant="warning"
// //                       onClick={() => handleFound(item)}
// //                     >
// //                       I Lost This
// //                     </Button>
// //                     <Button
// //                       className="details-button"
// //                       variant="primary"
// //                       onClick={() => handleMoreDetails(index)}
// //                     >
// //                       Details
// //                     </Button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default DisplayData;import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../FireBaseConfig/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Button } from 'react-bootstrap';
import './DisplayData.css';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import LostItemClaimForm from '../LostItemClaimForm/LostItemClaimForm';
import LostItemsSection from './LostItemsSection/LostItemsSection';
import FoundItemSection from './FoundItemSection/FoundItemSection';
import { Card,Row,Col } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import Banner from '../../Components/BannerComp/Banner';
import Footer from '../../Components/FooterComponent/Footer';
// import Button from 'react-bootstrap';
const DisplayData = ({ AllItems, AllFoundItems, CategoryValue, FilData,setCatSection, CatSection, setFilData ,loading }) => {
  
  console.log(loading)
  
  const navigate = useNavigate();
  // console.log(setNamevalue)

// console.log(reviews);

  const [oneFilteredData, setOneFilteredData] = useState([]);
  const [twoFilteredData, setTwoFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
const [reviews,setReviews]=useState([])

  useEffect(() => {
    setOneFilteredData(AllItems);
    setTwoFilteredData(AllFoundItems);
  }, [AllItems, AllFoundItems]);

  useEffect(() => {
    const filterItems = (items, category) => {
      return category === 'All' ? items : items.filter(x => x.category === category);
    }
    // setOneFilteredData(filterItems(AllItems, CategoryValue));
    setTwoFilteredData(filterItems(AllFoundItems, FilData));
  }, [CategoryValue, FilData]);

  useEffect(() => {
    const filterItems = (items, category) => {
      return category === 'All' ? items : items.filter(x => x.category === category);
    }
    // setOneFilteredData(filterItems(AllItems, CategoryValue));
    setOneFilteredData(filterItems(AllItems, CatSection));
  }, [CategoryValue, CatSection]);

 

  const handleLost = (item) => {
    console.log(item);
    
    localStorage.setItem('ClaimFounds', JSON.stringify(item))
   navigate('/LostItemClaimForm')
  };

  const handleFound = (item) => {
    console.log(item);
    
    localStorage.setItem('ClaimLosts', JSON.stringify(item));
   
      navigate('/FoundItemClaimForm')
  };

  const handleMoreDetails = (NameOftheItem) => {
    console.log(NameOftheItem)
    

    navigate(`/Items/${NameOftheItem}`)
  };
  
  useEffect(()=>{
  
              const fetchingData= async()=>{
                   const FoundDocs = await getDocs(collection(db, "FoundUsers"));
        let AllReviews = []
            FoundDocs.docs.forEach((doc) => {
              const individualItems = doc.data().Reviews || [];
              individualItems.forEach((item) =>
                AllReviews.push(item)
              );
            });
            setReviews(AllReviews)
              }
              fetchingData()
          },[])
          // const ReviewsSection = ({ reviews }) => {
  const [likes, setLikes] = useState({});

  const handleLike = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: (prevLikes[index] || 0) + 1,
    }));
  };
  
// const [loading,setLoading]=useState(true)
  return (
  <>
  {loading ?<div>

{oneFilteredData.map(()=>{
return(
  <>
<div
  style={{
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    flexWrap: 'nowrap',
    padding: '10px 0',
    scrollBehavior: 'smooth',
  }}
>
  {[...Array(3)].map((_, i) => (
    <div style={{ minWidth: 300, flexShrink: 0 }}>
      <Skeleton width={300} height={200} />
      <Skeleton height={20} style={{ margin: '10px 0' }} />
      <Skeleton height={10} width={300} />
      <Skeleton height={10} width={300} />
    </div>
  ))}
</div>

  </>
)
})}
    
  </div>: <div>
   
   <div style={{marginTop:"10%",marginBottom:"10%"}}>
       <FoundItemSection setCatSection={setCatSection}/>
   </div>
 {/* <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Lost-Item</h2> */}

<div  className="scroll-container">
 
  <div className="scroll-cards">
    {oneFilteredData.map((item, i) => (
      <div className="card" key={i}>
        <img src={item.imageURL} alt={item.name} />
        <div className="card-content">
          <h3>{item.itemname}</h3>
          <p className="meta">{item.category}</p>
          <p>{item.brand}</p> 
         
          <div className="reward">Contact:{item.contactPhone}</div>
          <Button style={{fontSize:"0.9rem"}}  onClick={() => handleLost(item)}>I-Found-It</Button> <Button style={{fontSize:"0.9rem",backgroundColor:"#FF8225"}}  onClick={() => handleMoreDetails(item.itemname, i)}>MoreDetails</Button>

        </div>
      </div>
    ))}
  </div>
</div>
  

{/* <h2 style={{ textAlign: "center", marginBottom: "10px", marginTop: "40px" }}>Found-Items</h2> */}
 <div style={{margin:"10% 0% 10% 0%"}}>

    <LostItemsSection  setCatSection={setCatSection} setFilData={setFilData}  />

 </div>

<div  className="scroll-container" >
  <div className="scroll-cards">
    {twoFilteredData.map((item, i) => (
      <div className="card" key={i}>
        <img src={item.imageURL}  />
        <div className="card-content">
          <h3>{item.itemname}</h3>
          <p className="meta">Category:{item.category}</p>
          {/* <p>{item.description}</p> */}
          <p>Brand:{item.brand}</p>
          <div className="reward">{item.price}</div>
          <Button style={{fontSize:"0.9rem"}}  onClick={()=>handleFound(item)}>I-Found-It</Button>
          <Button style={{fontSize:"0.9rem",marginLeft:"5px",backgroundColor:"#FF8225"}}   onClick={() => handleMoreDetails(item.itemname, i)}>MoreDetails</Button>
        </div>
      </div>
    ))}
  </div>
</div>
</div>}
 

 <div>

  
 </div>
   <Banner></Banner>
 <div>
  <div className="my-5" style={{margin:"4%"}} >
      <h4 className="text-center mb-4">💬 What Others Are Saying</h4>
      <Row xs={1} md={4} lg={4} className="g-4">
        {reviews.map((x, index) => (
          <Col key={index}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{x.email}</Card.Subtitle>
                <Card.Text className="mt-2">“{x.feedback}”</Card.Text>
                <div className="mb-2">
                  <strong>Rating:</strong> {'⭐'.repeat(x.rating)} ({x.rating}/5)
                </div>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleLike(index)}
                >
                  <FaThumbsUp className="me-2" />
                  Like {likes[index] || 0}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{marginTop:"5%"}}>
      <Footer></Footer>


      </div>
    </div>
 </div>
    

</>


  );
};

export default DisplayData;