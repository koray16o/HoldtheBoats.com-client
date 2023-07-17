import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteBoat, getBoat } from '../api/boats.api';

const BoatDetails = () => {
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

      <div className="BoatDetails">
        {boat && (
          <div>
            {Array.isArray(boat.imgURL) && (
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
            )}
            <h1>Name: {boat.title}</h1>
            <h1>Type of Boat: {boat.type}</h1>
            <h1>{boat.form}</h1>
            <p>Description: {boat.description}</p>
            <h1>Country: {boat.country}</h1>
            <Link to={`/boats/edit/${id}`}>
              <button>Edit Boat</button>
            </Link>
            <button onClick={handleDelete}>Delete Boat</button>
          </div>
        )}

        <Link to={`/boats`}>Back to boats</Link>
      </div>
    </div>
  );
};

export default BoatDetails;
