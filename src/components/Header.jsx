import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="topnav">
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/create">Create Post</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </header>
  );
};

export default Header;
