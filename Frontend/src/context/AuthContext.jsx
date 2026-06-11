import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('minibazar_token');
    const storedUser = localStorage.getItem('minibazar_user');
    if (storedToken && storedUser) {
      setAccessToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await authAPI.login(email, password);
    if (res.success) {
      setAccessToken(res.data.accessToken);
      setUser(res.data.user);
      setIsLoggedIn(true);
      localStorage.setItem('minibazar_token', res.data.accessToken);
      localStorage.setItem('minibazar_user', JSON.stringify(res.data.user));
    }
    return res;
  };

  const register = async (data) => {
    return await authAPI.register(data);
  };

  const logout = () => {
    setAccessToken(null);
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('minibazar_token');
    localStorage.removeItem('minibazar_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, accessToken, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
