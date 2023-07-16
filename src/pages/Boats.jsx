import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { getAllBoats } from '../api/boats.api';
import AddBoat from './AddBoat';
import { Link } from 'react-router-dom';

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
      <h1>Boats</h1>
      <AddBoat refreshList={fetchBoats} />
      {boats &&
        boats.map(boat => {
          return (
            <div key={boat._id} className="boatCard">
              <h1>{boat.title}</h1>
              {boat.imgURL && <img src={boat.imgURL} width={250} />}
              <Link to={`/boats/${boat._id}`}>See more Details</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Boats;
