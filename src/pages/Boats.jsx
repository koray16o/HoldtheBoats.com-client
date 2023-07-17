import { useState, useEffect } from 'react';
import { getAllBoats } from '../api/boats.api';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Boats = () => {
  const [boats, setBoats] = useState([]);

  const fetchBoats = async () => {
    try {
      const response = await getAllBoats();
      setBoats(response.data);
    } catch (error) {
      console.log('Error fetching boats', error);
    }
  };

  useEffect(() => {
    fetchBoats();
  }, []);

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
        <b>Check out the newest boats!</b>
      </h1>
      {boats &&
        boats.map(boat => {
          return (
            <div key={boat._id} className="boatCard">
              <h1>Name: {boat.title}</h1>
              <h1>Price: {boat.price}</h1>
              {Array.isArray(boat.imgURL) ? (
                boat.imgURL.map(url => (
                  <img src={url} key={url} alt="Boat" width={250} />
                ))
              ) : (
                <img src={boat.imgURL} alt="Boat" width={250} />
              )}
              <Link to={`/boats/${boat._id}`}>See more Details</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Boats;
