import axios from 'axios';

const BASE_URL = 'http://192.168.1.253/NaturubWebAPI/api';

export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login/IsValidUserWithJWTToken`, credentials);
  console.log(response);
  return response.data; // Contains token/user info
};
