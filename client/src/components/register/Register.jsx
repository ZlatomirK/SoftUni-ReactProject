import "./reg.css";

import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Username: "userName",
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirmPassword",
};

const Register = () => {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  return (
    <main>
      <form onSubmit={onSubmit}>
        <h2>Sign Up</h2>
        <ul className="noBullet">
          <li>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              className="inputFields"
              id="userName"
              name="userName"
              onChange={onChange}
              values={values[RegisterFormKeys.Username]}
            />
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="inputFields"
              id="email"
              name="email"
              onChange={onChange}
              values={values[RegisterFormKeys.Email]}
            />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="inputFields"
              id="password"
              name="password"
              onChange={onChange}
              values={values[RegisterFormKeys.Password]}
            />
          </li>
          <li>
            <label htmlFor="confirmPassword">Confirm-Password:</label>
            <input
              type="password"
              className="inputFields"
              id="confirmPassword"
              name="confirmPassword"
              onChange={onChange}
              values={values[RegisterFormKeys.ConfirmPassword]}
            />
          </li>
          <li id="center-btn">
            <button id="join-btn" type="submit">JOIN</button>
          </li>
        </ul>
      </form>
    </main>
  );
};

export default Register;
