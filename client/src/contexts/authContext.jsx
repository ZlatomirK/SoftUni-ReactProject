import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import * as authService from "../services/authService";
import Path from "../paths";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const checkAuthentication = () => {
    const token = Cookies.get("token");
    return !!token;
  };

  useEffect(() => {
    setAuthenticated(checkAuthentication());
  }, []);

  const loginSubmitHandler = (values) => {
    authService
      .login(values.email, values.password)
      .then((result) => {
        document.cookie = `token=${result.token}; path=/;`;
        setAuthenticated(true);
        navigate(Path.Home);
      })
      .catch((error) => {
        console.log("Login failed:", error);
      });
  };

  const registerSubmitHandler = (values) => {
    authService
      .register(
        values.userName,
        values.email,
        values.password,
        values.confirmPassword
      )
      .then(() => {
        navigate(Path.Home);
      })
      .catch((error) => {
        console.log("Register failed:", error);
      });
  };

  const logoutHandler = async () => {
    try {
      await authService.logout();
      setAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    authenticated,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
