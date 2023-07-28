import Navbar from '../components/Navbar';
import { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
import { deleteBoat, getBoat } from '../api/boats.api';
import { AuthContext } from '../context/AuthContext';
import Contact from '../components/Contact';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer';

const BoatDetails = () => {
  const { isLoggedIn, userId, user } = useContext(AuthContext);
  const [boat, setBoat] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchBoat = async id => {
    try {
      const response = await getBoat(id);
      setBoat(response.data);
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
        <h1
          style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {' '}
          <b>Boat details</b>
        </h1>

        <div className="BoatDetails" style={{ marginLeft: '30px' }}>
          {boat && (
            <div key={boat._id}>
              {/* {boat.imgURL.length && (
              <div>
                <h2>Images:</h2>
                {boat.imgURL.map(url => (
                  <img
                    src={url}
                    alt="Boat"
                    key={url}
                    style={{ width: '250px' }}
                  />
                ))}
              </div>
            )} */}
              <Carousel slide={false}>
                {boat.imgURL.length && (
                  <Carousel.Item>
                    {boat.imgURL.map(url => (
                      <img
                        src={url}
                        alt="Boat"
                        key={url}
                        style={{ width: '750px' }}
                      />
                    ))}
                  </Carousel.Item>
                )}
              </Carousel>

              <h5>Price: {boat.price}€</h5>
              <h5>Name: {boat.title}</h5>
              <h5>Type of Boat: {boat.type}</h5>
              <h5>Description: {boat.description}</h5>
              <h5>
                <b>Boat Details:</b>
              </h5>

              <p>year: {boat.year}</p>
              <p>condition: {boat.condition}</p>
              <p>length: {boat.length}</p>
              <p>beam: {boat.beam}</p>
              <p>draught: {boat.draught}</p>
              <p>displacement: {boat.displacement}</p>
              <p>material: {boat.material}</p>
              <p>steering: {boat.steering}</p>
              <p>keel: {boat.keel}</p>
              <p>ballast: {boat.ballast}</p>
              <p>headroom: {boat.headroom}</p>
              <p>cabins: {boat.cabins}</p>
              <p>berths: {boat.berths}</p>
              <p>watertank: {boat.watertank}</p>
              <p>propulsion: {boat.propulsion}</p>
              <p>engine: {boat.engine}</p>
              <p>fuelType: {boat.fuelType}</p>
              <h5>Country: {boat.country}</h5>
              {boat.owner._id === userId && (
                <>
                  <Link to={`/boats/edit/${id}`}>
                    <button>Edit Boat</button>
                  </Link>
                  <button onClick={handleDelete}>Delete Boat</button>
                </>
              )}
            </div>
          )}

          <Link to={`/boats`}>Back to boats</Link>
        </div>
        <div>
          <Contact email={user.email} />
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default BoatDetails;
