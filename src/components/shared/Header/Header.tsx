import { NavLink, useLocation } from "react-router-dom";
import { Logo, MenuIcon } from "svg";
import classes from "./header.module.scss";

const Header: React.FC<{ setShowMenu: (bool: boolean) => void }> = (props) => {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes["menu-mb"]}>
        <MenuIcon onClick={() => props.setShowMenu(true)} />
      </div>
      <div className={classes.line}></div>
      <div className={classes["menu-ds"]}>
        <ul className={classes.nav}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <span className={classes.numeric}>00</span>
              home
            </NavLink>
            <div
              className={
                location.pathname.includes("home") ? classes.active : ""
              }
            ></div>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <span className={classes.numeric}>01</span>
              destination
            </NavLink>
            <div
              className={
                location.pathname.includes("destination") ? classes.active : ""
              }
            ></div>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <span className={classes.numeric}>02</span>
              crew
            </NavLink>
            <div
              className={
                location.pathname.includes("crew") ? classes.active : ""
              }
            ></div>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <span className={classes.numeric}>03</span>
              technology
            </NavLink>
            <div
              className={
                location.pathname.includes("technology") ? classes.active : ""
              }
            ></div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
