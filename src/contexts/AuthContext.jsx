import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:8080/user";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);

  function logout() {
    setUserId(null);
    setIsLogin(false);
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("lname");
    localStorage.removeItem("role");
    localStorage.removeItem("isLogin");
  }
  async function signup(newUser) {
    setIsLogin(true);
    setError(null);
    try {
      const res = await axios.post(`${BASE_URL}/save`, { ...newUser });

      // console.log(res);
      setIsLogin(false);
      console.log(res.data);
      return res.data;
    } catch (error) {
      setError(error.response.data);
    }
  }
  async function login(email, password) {
    setIsLogin(true);
    try {
      setError(null);
      const res = await axios.post(`${BASE_URL}/login`, { email, password });
      setUserId(res.data.id);
      setIsLogin(false);
      // return res;
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("name", res.data.fname);
      localStorage.setItem("lname", res.data.lname);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("isLogin", true);
      return res;
    } catch (error) {
      setError(error.response.data);
    }
    // const res = await axios.post(`${BASE_URL}/login`, { email, password });
    // setUserId(res.data.id);
    // setIsLogin(false);
    // return res;
  }
  return (
    <AuthContext.Provider
      value={{ signup, userId, login, isLogin, error, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("auth context used outside auth provider");
  }
  return context;
}
export { AuthContext, AuthProvider, useAuth };
