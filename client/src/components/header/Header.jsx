import { Link } from "react-router-dom";
import "./nav.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

const Header = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="topnav">
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/posts">Posts</Link>
        {authenticated ? (
          <>
            <Link to="/posts/create">Create Post</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
