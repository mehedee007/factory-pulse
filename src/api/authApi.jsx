import axios from 'axios';

const BASE_URL = 'http://localhost:8880/api';

export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login/IsValidUserWithJWTToken`, credentials);
  console.log(response);
  return response.data; // Contains token/user info
};
