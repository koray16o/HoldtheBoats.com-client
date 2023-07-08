import axios from 'axios';
const baseURL = `${import.meta.env.VITE_Boats_API}/api`;

const setAuthorizationHeaders = () => {
  //Set JWT token in the headers for every request in this file

  axios.interceptors.request.use(config => {
    //retrieve the JWT token from the local storage
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      config.headers = { Authorization: `Bearer ${storedToken}` };
    }
    return config;
  });
};
setAuthorizationHeaders();

export const getAllBoats = () => {
  return axios.get(`${baseURL}/boats`);
};

export const getBoat = id => {
  return axios.get(`${baseURL}/boats/${id}`);
};

export const addBoat = boat => {
  return axios.post(`${baseURL}/newboat`, boat);
};

export const updateBoat = updatedBoat => {
  return axios.put(`${baseURL}/boats/${updatedBoat._id}`, updatedBoat);
};

export const deleteBoat = id => {
  return axios.delete(`${baseURL}/boats/${id}`);
};

export const upload = uploadData => {
  return axios.post(`${baseURL}/upload`, uploadData);
};
