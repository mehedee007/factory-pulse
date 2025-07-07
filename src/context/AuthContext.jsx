import { jwtDecode } from 'jwt-decode';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() =>{
    const token = localStorage.getItem('token');
    if(!token) return null;
    try{
      const decoded = jwtDecode(token);
      return decoded;
    }
    catch (e){
      console.log('Invalid Token !', e);
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem('token'));

  const login = (decodedUser, token) => {
    localStorage.setItem('token', token);
    setUser(decodedUser);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
