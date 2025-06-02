import { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userid, setUserid] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUserid(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserid(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userid, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
