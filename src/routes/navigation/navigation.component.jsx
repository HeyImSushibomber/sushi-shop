import { Link, NavLink, Outlet } from "react-router-dom";

import logo from "../../assets/heyImSushiBomber.jpg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" className="logo"></img>
        </Link>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="login">
            Login
          </NavLink>
        </div>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="contact">
            Contact
          </NavLink>
        </div>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="menu">
            Menu
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
