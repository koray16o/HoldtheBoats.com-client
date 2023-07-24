import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const FavBoats = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <div>
        <Navbar />
        <h1>Fav boats</h1>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default FavBoats;
