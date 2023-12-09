import request from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const login = (email, password) => {
  const response = request.post(`${baseUrl}/login`, {
    email,
    password,
  });
  return response;
};

export const register = (userName, email, password, confirmPassword) => {
  const response = request.post(`${baseUrl}/register`, {
    userName,
    email,
    password,
    confirmPassword,
  });
  return response;
};

export const decodeToken = (token) => {
  const response = request.post(`${baseUrl}/decode`, { token });
  return response;
};

export const logout = () => {
  request.get(`${baseUrl}/logout`);
};
