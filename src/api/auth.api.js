import axios from 'axios';
const baseURL = `${import.meta.env.VITE_Boats_API}/auth`;

export const signup = user => {
  return axios.post(`${baseURL}/signup`, user);
};

export const login = user => {
  return axios.post(`${baseURL}/login`, user);
};

//We need to add the JWT token to the authorization headers of the verify request
export const verify = storedToken => {
  return axios.get(`${baseURL}/verify`, {
    headers: {
      Authorization: `Bearer ${storedToken}`
    }
  });
};

export const forgotPassword = email => {
  return axios.post(`${baseURL}/forgot-password`, { email });
};
export const resetPassword = (resetToken, newPassword) => {
  return axios.post(`${baseURL}/reset-password`, {
    resetToken,
    newPassword
  });
};
