import Navbar from '../components/Navbar';
import { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
import { deleteBoat, getBoat } from '../api/boats.api';
import { AuthContext } from '../context/AuthContext';
import Contact from '../components/Contact';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';

const BoatDetails = () => {
  const { isLoggedIn, userId } = useContext(AuthContext);
  const [boat, setBoat] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [ownerEmail, setOwnerEmail] = useState('');

  const fetchBoat = async id => {
    try {
      const response = await getBoat(id);
      setBoat(response.data);
      console.log(response.data.owner.email);
      setOwnerEmail(response.data.owner.email);
    } catch (error) {
      console.log('error fetching boat', error);
    }
  };

  useEffect(() => {
    fetchBoat(id);
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteBoat(id);
      navigate('/boats');
    } catch (error) {
      console.log('Error deleting the boat', error);
    }
  };
  if (isLoggedIn) {
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h1>
            <b>Boat details</b>
          </h1>
        </div>

        {boat && (
          <div className="BoatDetails" style={{ margin: '30px' }}>
            <Carousel slide={false}>
              {boat.imgURL.length > 0 &&
                boat.imgURL.map((url, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={url}
                      alt={`Boat ${index + 1}`}
                      style={{ width: '750px' }}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>

            <div style={{ textAlign: 'center' }}>
              <h5>Price: {boat.price}€</h5>
              <h5>Name: {boat.title}</h5>
              <h5>Country: {boat.country}</h5>
              <h5>Type of Boat: {boat.type}</h5>
              <h5>Description: {boat.description}</h5>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <h5>
                  <b>Boat Details:</b>
                </h5>
                <p>Year: {boat.year}</p>
                <p>Condition: {boat.condition}</p>
                <p>Length: {boat.length}</p>
                <p>Beam: {boat.beam}</p>
                <p>Draught: {boat.draught}</p>
                <p>Displacement: {boat.displacement}</p>
                <p>Material: {boat.material}</p>
                <p>Steering: {boat.steering}</p>
                <p>Keel: {boat.keel}</p>
                <p>Ballast: {boat.ballast}</p>
                <p>Headroom: {boat.headroom}</p>
                <p>Cabins: {boat.cabins}</p>
                <p>Berths: {boat.berths}</p>
                <p>Watertank: {boat.watertank}</p>
                <p>Propulsion: {boat.propulsion}</p>
                <p>Engine: {boat.engine}</p>
                <p>Fuel Type: {boat.fuelType}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {boat.owner._id === userId && (
                  <>
                    <Link to={`/boats/edit/${id}`}>
                      <Button variant="info">Edit Boat</Button>
                    </Link>
                    <Button variant="danger" onClick={handleDelete}>
                      Delete Boat
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <Link to={`/boats`} style={{ textDecoration: 'none', color: 'blue' }}>
            Back to boats
          </Link>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Contact ownerEmail={ownerEmail} />
        </div>

        <Footer />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default BoatDetails;
