import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Track if user is logging in
  const [user, setUser] = useState(null);

  //   State to track loading, checking localStorage
  const [loading, setLoading] = useState(true);

  //   Check localStorage for exisitng user on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser != "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const response = await axios.post(`${baseUrl}/core/token`, credentials);
    const { access, refresh } = response.data;

    // Save tokens and user data in localStorage
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);

    const loggedInUser = { username: credentials.username };
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
