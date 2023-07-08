import axios from 'axios';
const baseURL = `${import.meta.env.VITE_Boats_API}/auth`;

export const signup = (user, company) => {
  return axios.post(`${baseURL}/signup`, (user, company));
};

export const login = (user, company) => {
  return axios.post(`${baseURL}/login`, (user, company));
};

//We need to add the JWT token to the authorization headers of the verify request
export const verify = storedToken => {
  return axios.get(`${baseURL}/verify`, {
    headers: {
      Authorization: `Bearer ${storedToken}`
    }
  });
};