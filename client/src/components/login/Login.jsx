import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const LoginFormKyes = {
  Email: 'email',
  Password: 'password',
};

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
      [LoginFormKyes.Email]: '',
      [LoginFormKyes.Password]: '',
  });

  return (
    <main>
      <section>
        <div>
          <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <ul className="noBullet">
              <li>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="email"
                  name="email"
                  onChange={onChange}
                  values={values[LoginFormKyes.Email]}
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
                  values={values[LoginFormKyes.Password]}
                />
              </li>

              <li id="center-btn">
                <button id="login-btn" type="submit">Login</button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
