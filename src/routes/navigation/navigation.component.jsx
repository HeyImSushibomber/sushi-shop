import { Link, NavLink, Outlet } from "react-router-dom";

import logo from "../../assets/heyImSushiBomber.jpg";
import { useUser } from "../../context/user-context";
import { signOutAuth } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { user, setUser } = useUser();

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" className="logo"></img>
        </Link>
        <div className="nav-links-container">
          {user ? (
            <span
              className="nav-link"
              onClick={async () => {
                await signOutAuth();
                setUser(null);
              }}
            >
              Sign Out
            </span>
          ) : (
            <NavLink className="nav-link" to="authentication">
              Sign In
            </NavLink>
          )}
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
