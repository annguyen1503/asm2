import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the register page
    navigate('/register');
  };

  const handleLoginClick = () => {
    // Navigate to the login page
    navigate('/login');
  };

  const handleLogout = () => {
    // Navigate to the login page
    dispatch({ type: "LOGOUT" });
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span className="loggedInUser">{user.username}</span>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            {/* Use the handleRegisterClick function for the Register button */}
            <button className="navButton" onClick={handleRegisterClick}>
              Register
            </button>
            {/* Use the handleLoginClick function for the Login button */}
            <button className="navButton" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
