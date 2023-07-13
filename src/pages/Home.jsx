import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <div>
        <Navbar />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
export default Home;
