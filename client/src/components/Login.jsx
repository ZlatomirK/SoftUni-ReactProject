const Login = () => {
  return (
    <main>
      <section id="login-page">
        <div className="loginSection">
          <form method="POST" className="loginForm">
            <h2>Login</h2>
            <ul className="noBullet">
              <li>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="inputFields"
                  id="email"
                  name="email"
                  placeholder="peter@abv.bg"
                />
              </li>
              <li>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="inputFields"
                  id="password"
                  name="password"
                  placeholder="*******"
                />
              </li>

              <li id="center-btn">
                <button id="login-btn">Login</button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
