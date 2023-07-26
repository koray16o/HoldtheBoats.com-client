import { createContext, useState, useEffect } from 'react';
import { verify } from '../api/auth.api';

const AuthContext = createContext();

const AuthProviderWrapper = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const userId = user ? user._id : null;

  const storeToken = token => {
    localStorage.setItem('authToken', token);
  };

  const authenticateUser = async () => {
    //get the token from local storage
    const storedToken = localStorage.getItem('authToken');

    //If the token exists verify if it is valid
    if (storedToken) {
      try {
        const response = await verify(storedToken);
        const user = response.data;
        setUser(user);
        setIsLoggedIn(true);
      } catch (error) {
        console.log('An error occurred authenticating the user', error);
        //If token is invalid, the server response is an error
        setUser(null);
        setIsLoggedIn(false);
      }
    } else {
      //If token does not exist
      setUser(null);
      setIsLoggedIn(false);
    }

    setIsloading(false);
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const removeToken = () => {
    //delete the token from local storage
    localStorage.removeItem('authToken');
  };

  const logOutUser = () => {
    //To log out user remove token
    removeToken();

    //update state variables
    authenticateUser();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        user,
        userId,
        storeToken,
        authenticateUser,
        logOutUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviderWrapper };
