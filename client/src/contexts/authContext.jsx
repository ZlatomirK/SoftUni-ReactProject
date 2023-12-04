import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import Path from "../paths";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const loginSubmitHandler =  (values) => {
    authService.login(values.email, values.password);

    navigate(Path.Home);
  };

  const registerSubmitHandler = (values) => {
    authService.register(
      values.userName,
      values.email,
      values.password,
      values.confirmPassword
    );

    navigate(Path.Home);
  };

  const logoutHandler = async () => {
      try {
        await authService.logout(); // Make a request to your logout endpoint
        // clearAuthState(); // Clear the authentication state
      } catch (error) {
        console.error("Logout failed:", error);
      }
    
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
