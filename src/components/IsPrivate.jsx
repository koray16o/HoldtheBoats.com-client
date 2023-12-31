import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const IsPrivate = props => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  //If the authentication is still ongoing
  if (isLoading) return <p>Loading...</p>;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return props.children;
  }
};

export default IsPrivate;
