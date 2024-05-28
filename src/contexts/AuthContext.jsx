import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:8080/user";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  async function signup(newUser) {
    setIsLogin(true);
    const res = await axios.post(`${BASE_URL}/save`, newUser);
    // console.log(res);
    setIsLogin(false);
    return res.data;
  }
  async function login(email, password) {
    setIsLogin(true);
    const res = await axios.post(`${BASE_URL}/login`, { email, password });
    setUserId(res.data.id);
    setIsLogin(false);
    return res;
  }
  return (
    <AuthContext.Provider value={{ signup,userId, login }}>
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
export { AuthProvider, useAuth };
