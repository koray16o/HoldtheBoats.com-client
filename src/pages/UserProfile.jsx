import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const UserProfile = () => {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default UserProfile;
