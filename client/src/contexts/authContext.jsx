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
    return !!token; // Modify this based on your authentication logic
  };

  useEffect(() => {
    setAuthenticated(checkAuthentication());
  }, []);

  const loginSubmitHandler = (values) => {
    authService
      .login(values.email, values.password)
      .then((result) => {
        document.cookie = `token=${result.token}; path=/;`;
      })
      .catch((error) => {
        console.log("Login failed:", error);
      });
    setAuthenticated(true);

    navigate(Path.Home);
  };

  const registerSubmitHandler = (values) => {
    authService.register(
      values.userName,
      values.email,
      values.password,
      values.confirmPassword
    );
    setAuthenticated(true);

    navigate(Path.Home);
  };

  const logoutHandler = async () => {
    try {
      await authService.logout(); // Make a request to your logout endpoint
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
