import { useNavigate } from 'react-router-dom';
import { db } from '../../FireBaseConfig/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import './DisplayData.css';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaThumbsUp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import LostItemClaimForm from '../LostItemClaimForm/LostItemClaimForm';
import LostItemsSection from './LostItemsSection/LostItemsSection';
import FoundItemSection from './FoundItemSection/FoundItemSection';
import Banner from '../../Components/BannerComp/Banner';
import Footer from '../../Components/FooterComponent/Footer';

const DisplayData = ({ AllItems, AllFoundItems, CategoryValue, FilData, setCatSection, CatSection, setFilData, loading }) => {
  const navigate = useNavigate();
  const [oneFilteredData, setOneFilteredData] = useState([]);
  const [twoFilteredData, setTwoFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const allDocs = await getDocs(collection(db, 'users'));
      const AllItemsFromDocs = allDocs.docs.flatMap(doc => doc.data().WholeItems || []);
      setOneFilteredData(AllItemsFromDocs);

      const foundDocs = await getDocs(collection(db, 'FoundUsers'));
      const AllItemsFromFoundDocs = foundDocs.docs.flatMap(doc => doc.data().FoundItems || []);
      setTwoFilteredData(AllItemsFromFoundDocs);
    };

    fetchingData();
  }, []);

  useEffect(() => {
    setOneFilteredData(AllItems);
    setTwoFilteredData(AllFoundItems);
  }, [AllItems, AllFoundItems]);

  useEffect(() => {
    const filterItems = (items, category) =>
      category === 'All' ? items : items.filter(x => x.category === category);
    setTwoFilteredData(filterItems(AllFoundItems, FilData));
  }, [CategoryValue, FilData]);

  useEffect(() => {
    const filterItems = (items, category) =>
      category === 'All' ? items : items.filter(x => x.category === category);
    setOneFilteredData(filterItems(AllItems, CatSection));
  }, [CategoryValue, CatSection]);

  useEffect(() => {
    const fetchingReviews = async () => {
      const foundDocs = await getDocs(collection(db, 'FoundUsers'));
      const AllReviews = foundDocs.docs.flatMap(doc => doc.data().Reviews || []);
      setReviews(AllReviews);
    };
    fetchingReviews();
  }, []);

  const handleLost = item => {
    localStorage.setItem('ClaimFounds', JSON.stringify(item));
    navigate('/LostItemClaimForm');
  };

  const handleFound = item => {
    localStorage.setItem('ClaimLosts', JSON.stringify(item));
    navigate('/FoundItemClaimForm');
  };

  const handleMoreDetails = NameOftheItem => {
    navigate(`/Items/${NameOftheItem}`);
  };

  const filteredOne = oneFilteredData.filter(item =>
    item.itemname?.toLowerCase().includes(searchQuery) ||
    item.color?.toLowerCase().includes(searchQuery) ||
    item.brand?.toLowerCase().includes(searchQuery) ||
    item.location?.toLowerCase().includes(searchQuery)
  );

  const filteredTwo = twoFilteredData.filter(item =>
    item.itemname?.toLowerCase().includes(searchQuery) ||
    item.color?.toLowerCase().includes(searchQuery) ||
    item.brand?.toLowerCase().includes(searchQuery) ||
    item.location?.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      {loading ? (
        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', padding: '10px 0' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ minWidth: 300, flexShrink: 0 }}>
              <Skeleton width={300} height={200} />
              <Skeleton height={20} style={{ margin: '10px 0' }} />
              <Skeleton height={10} width={300} />
              <Skeleton height={10} width={300} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <Container className="py-3">
            <input
              type="text"
              placeholder="Search by name, color, brand or location..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value.toLowerCase())}
              id='search'
            />
          </Container>

          <div style={{ margin: '10% 0' }}>
            <FoundItemSection setCatSection={setCatSection} />
          </div>

          <div className="scroll-container" style={{ marginBottom: '10%' }}>
            <div className="scroll-cards">
              {filteredOne.map((item, i) => (
                <div className="card" key={i}>
                  <img src={item.imageURL} alt={item.name} />
                  <div className="card-content">
                    <h3>{item.itemname}</h3>
                    <h4 className="meta">Color: {item.color}</h4>
                    <p>Brand: {item.brand}</p>
                    <div className="reward"><FaLocationDot /> {item.location}</div>
                    <Button id="btn1" onClick={() => handleLost(item)}>I-Found-It</Button>
                    <Button id="btn2" onClick={() => handleMoreDetails(item.itemname)}>MoreDetails</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ margin: '5% 0 10%' }}>
            <LostItemsSection setCatSection={setCatSection} setFilData={setFilData} />
          </div>

          <div className="scroll-container" style={{ marginBottom: '5%' }}>
            <div className="scroll-cards">
              {filteredTwo.map((item, i) => (
                <div className="card" key={i}>
                  <img src={item.imageURL} alt={item.name} />
                  <div className="card-content">
                    <h3>{item.itemname}</h3>
                    <p style={{ color: 'black' }}>Color: {item.color}</p>
                    <p style={{ fontWeight: '700' }}>Brand: {item.brand}</p>
                    <div className="reward"><FaLocationDot /> {item.location}</div>
                    <Button id="btn1" onClick={() => handleFound(item)}>I-Found-It</Button>
                    <Button id="btn2" onClick={() => handleMoreDetails(item.itemname)}>MoreDetails</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <Banner />

      <Container className="my-5">
        <h4 className="text-center mb-4">💬 What Others Are Saying</h4>
        <Row xs={1} md={4} lg={3} className="g-4">
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
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default DisplayData;