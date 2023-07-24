import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const MyBoatAds = () => {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    return (
      <div>
        <Navbar />
        <h1>Myboatads</h1>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default MyBoatAds;
