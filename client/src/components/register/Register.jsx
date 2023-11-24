import "./reg.css";

const Register = () => {
  return (
    <main>
      <form method="POST" className="signupForm">
        <h2>Sign Up</h2>
        <ul className="noBullet">
          <li>
            <label htmlFor="userName">Last Name:</label>
            <input
              type="text"
              className="inputFields"
              id="userName"
              name="userName"
            />
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="inputFields"
              id="email"
              name="email"
            />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="inputFields"
              id="password"
              name="password"
            />
          </li>
          <li>
            <label htmlFor="repeat-password">Repeat-Password:</label>
            <input
              type="password"
              className="inputFields"
              id="repeat-password"
              name="repeatPassword"
            />
          </li>
          <li id="center-btn">
            <button id="join-btn">JOIN</button>
          </li>
        </ul>
      </form>
    </main>
  );
};

export default Register;
