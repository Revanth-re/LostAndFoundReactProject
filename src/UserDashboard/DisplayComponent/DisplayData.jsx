import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { db } from '../../FireBaseConfig/Firebase';
import { collection, getDocs } from 'firebase/firestore';

const DisplayData = ({ AllItems, AllFoundItems, CategoryValue, CatSection, FilData }) => {
  const navigate = useNavigate();

  const [currentFilData, setCurrentFilData] = useState([]);
  const [currentFilDataTwo, setCurrentFilDataTwo] = useState([]);
  const [oneFilteredData, setOneFilteredData] = useState([]);
  const [twoFilteredData, setTwoFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentFilData(AllItems);
    setOneFilteredData(AllItems);
    setCurrentFilDataTwo(AllFoundItems);
    setTwoFilteredData(AllFoundItems);
  }, [AllItems, AllFoundItems]);

  useEffect(() => {
    if (CategoryValue === 'All') {
      setOneFilteredData(AllItems);
    } else {
      const filtered = AllItems.filter(x => x.category === CategoryValue);
      setOneFilteredData(filtered);
    }
  }, [CategoryValue])

  useEffect(() => {
    if (FilData === 'All') {
      setTwoFilteredData(AllFoundItems);
    } else {
      const filtered = AllFoundItems.filter(x => x.category === FilData);
      setTwoFilteredData(filtered);
    }
  }, [FilData]);

  const userDetails = JSON.parse(localStorage.getItem('reactProjectUsers'))?.user?.displayName;

  const handleLost = (item) => {
    localStorage.setItem('ClaimFounds', JSON.stringify([item]));
    navigate('/FoundItemClaimForm');
  };

  const handleFound = (item) => {
    localStorage.setItem('ClaimLosts', JSON.stringify([item]));
    navigate('/LostItemClaimForm');
  };

  const handleMoreDetails = (index,itemname) => {
    navigate(`/Items/${itemname}`);
  };

  return (
    <div className="container mt-4">
      {/* Search bar */}
      <div className="mb-3 text-center">
        <input className="form-control w-50 mx-auto" type="text" placeholder="Search items..." />
      </div>

      {/* LOST ITEMS */}
      <h2 className="text-center mb-4">Lost Items</h2>
      {oneFilteredData.length === 0 ? (
        <p className="text-center">No items reported yet.</p>
      ) : (
        <div className="row">
          {oneFilteredData.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img
                  // src={item.imageURL || "https://via.placeholder.com/300x200?text=No+Image"}
                  alt={item.itemname}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.itemname}</h5>
                  <p className="card-text">{item.category} • {item.location}</p>
                  <ul className="list-unstyled">
                    <li><strong>Brand:</strong> {item.brand}</li>
                    {item.reward && <li className="text-success">🎁 Reward Offered</li>}
                  </ul>
                  <Button
                 id='Button'
                    variant="warning"
                    onClick={() => handleLost(item)}
                  >
                    I-Found-it
                  </Button>
                  <Button 
                  id='Button'
                    variant="primary"
                    onClick={() => handleMoreDetails(index,item.itemname)}
                  >
                    More Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FOUND ITEMS */}
      <h2 className="text-center mt-5 mb-4">Found Items</h2>
      {twoFilteredData.length === 0 ? (
        <p className="text-center">No found items available.</p>
      ) : (
        <div className="row">
          {twoFilteredData.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={item.imageURL || "https://via.placeholder.com/300x200?text=No+Image"}
                  alt={item.itemname}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.itemname}</h5>
                  <p className="card-text">{item.category} • {item.location}</p>
                  <ul className="list-unstyled">
                    <li><strong>Brand:</strong> {item.brand}</li>
                    {item.reward && <li className="text-success">🎁 Reward Offered</li>}
                  </ul>
                  <Button
                 id='Button'
                    variant="warning"
                    onClick={() => handleFound(item)}
                  >
                    I-Lost-this
                  </Button>
                  <Button id='Button'
                    variant="primary"
                    onClick={() => handleMoreDetails(index,item.itemname)}
                  >
                    More Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayData;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { db } from '../../FireBaseConfig/Firebase';
// // import { db } from '../../FireBaseConfig/Firebase';
// import { collection, getDocs } from 'firebase/firestore';
// // import './DisplayData.css'; // Import the external CSS file

// const DisplayData = ({ AllItems, AllFoundItems, CategoryValue, CatSection, FilData }) => {
//   const navigate = useNavigate();

//   const [currentFilData, setCurrentFilData] = useState([]);
//   const [currentFilDataTwo, setCurrentFilDataTwo] = useState([]);
//   const [oneFilteredData, setOneFilteredData] = useState([]);
//   const [twoFilteredData, setTwoFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

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
//   }, [CategoryValue]);

//   useEffect(() => {
//     if (FilData === 'All') {
//       setTwoFilteredData(AllFoundItems);
//     } else {
//       const filtered = AllFoundItems.filter(x => x.category === FilData);
//       setTwoFilteredData(filtered);
//     }
//   }, [FilData]);

//   useEffect(() => {
//     const filteredLost = AllItems.filter(item => 
//       item.itemname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.location.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    
//     const filteredFound = AllFoundItems.filter(item => 
//       item.itemname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.location.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setOneFilteredData(filteredLost);
//     setTwoFilteredData(filteredFound);
//   }, [searchTerm]);

//   const userDetails = JSON.parse(localStorage.getItem('reactProjectUsers'))?.user?.displayName;

//   const handleLost = (item) => {
//     localStorage.setItem('ClaimFounds', JSON.stringify([item]));
//     navigate('/FoundItemClaimForm');
//   };

//   const handleFound = (item) => {
//     localStorage.setItem('ClaimLosts', JSON.stringify([item]));
//     navigate('/LostItemClaimForm');
//   };

//   const handleMoreDetails = (index) => {
//     navigate(`/Items/${index}`);
//   };

//   return (
//     <div className="display-data-container">
//       {/* Search bar */}
//       <div className="search-container">
//         <input 
//           className="search-input" 
//           type="text" 
//           placeholder="Search items by name, category or location..." 
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* LOST ITEMS */}
//       <h2 className="section-title">Lost Items</h2>
//       {oneFilteredData.length === 0 ? (
//         <p className="no-items-message">No lost items found.</p>
//       ) : (
//         <div className="cards-container">
//           {oneFilteredData.map((item, index) => (
//             <div className="card-item" key={index}>
//               <div className="card">
//                 <img
//                   src={item.imageURL || "https://via.placeholder.com/300x200?text=No+Image"}
//                   alt={item.itemname}
//                   className="card-image"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.itemname}</h5>
//                   <p className="card-category-location">{item.category} • {item.location}</p>
//                   <div className="card-details">
//                     <p><strong>Brand:</strong> {item.brand}</p>
//                     {item.reward && <p className="reward-badge">🎁 Reward Offered</p>}
//                   </div>
//                   <div className="card-buttons">
//                     <Button
//                       className="claim-button"
//                       variant="warning"
//                       onClick={() => handleLost(item)} 
//                     >
//                     found-it
//                     </Button>
//                     <Button
//                       className="details-button"
//                       variant="primary"
//                       onClick={() => handleMoreDetails(index)}
//                     >
//                       Details
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* FOUND ITEMS */}
//       <h2 className="section-title">Found Items</h2>
//       {twoFilteredData.length === 0 ? (
//         <p className="no-items-message">No found items available.</p>
//       ) : (
//         <div className="cards-container">
//           {twoFilteredData.map((item, index) => (
//             <div className="card-item" key={index}>
//               <div className="card">
//                 <img
//                   src={item.imageURL || "https://via.placeholder.com/300x200?text=No+Image"}
//                   alt={item.itemname}
//                   className="card-image"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.itemname}</h5>
//                   <p className="card-category-location">{item.category} • {item.location}</p>
//                   <div className="card-details">
//                     <p><strong>Brand:</strong> {item.brand}</p>
//                     {item.reward && <p className="reward-badge">🎁 Reward Offered</p>}
//                   </div>
//                   <div className="card-buttons">
//                     <Button
//                       className="claim-button"
//                       variant="warning"
//                       onClick={() => handleFound(item)}
//                     >
//                       I Lost This
//                     </Button>
//                     <Button
//                       className="details-button"
//                       variant="primary"
//                       onClick={() => handleMoreDetails(index)}
//                     >
//                       Details
//                     </Button>
//                   </div>
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