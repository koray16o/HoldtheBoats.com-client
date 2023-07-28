import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getFavouriteBoats } from '../api/boats.api';
import Footer from '../components/Footer';

const FavBoats = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [favouriteBoats, setFavouriteBoats] = useState([]);
  const { boatId } = useParams();

  const fetchFavouriteBoats = async () => {
    try {
      const response = await getFavouriteBoats(boatId);
      console.log('boatid', boatId);
      console.log('response', response);
      console.log('response.data', response.data);
      console.log('Response data:', response.data);
      setFavouriteBoats(response.data.favouriteBoats);
      console.log('setfavboats', setFavouriteBoats);
    } catch (error) {
      console.log('Error fetching favourite boats', error);
      console.log('Error response data:', error.response.data);
    }
  };

  useEffect(() => {
    fetchFavouriteBoats();
  }, []);

  if (isLoggedIn) {
    return (
      <div>
        <Navbar />

        {favouriteBoats.map(boat => (
          <div key={boat._id}>
            <h3>{boat.title}</h3>
            <h3>{boat.price}</h3>
          </div>
        ))}
        <Footer />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default FavBoats;
