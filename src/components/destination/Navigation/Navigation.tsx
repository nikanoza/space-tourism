import { NavLink, useLocation } from "react-router-dom";
import classes from "./navigation.module.scss";

const Navigation = () => {
  const location = useLocation();

  return (
    <ul className={classes.navbar}>
      <li className={classes["navbar-item"]}>
        <NavLink
          to="/destination/moon"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          moon
        </NavLink>
        <div
          className={location.pathname.includes("moon") ? classes.active : ""}
        ></div>
      </li>
      <li className={classes["navbar-item"]}>
        <NavLink
          to="/destination/mars"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          mars
        </NavLink>
        <div
          className={location.pathname.includes("mars") ? classes.active : ""}
        ></div>
      </li>
      <li className={classes["navbar-item"]}>
        <NavLink
          to="/destination/europa"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          europa
        </NavLink>
        <div
          className={location.pathname.includes("europa") ? classes.active : ""}
        ></div>
      </li>
      <li className={classes["navbar-item"]}>
        <NavLink
          to="/destination/titan"
          className={({ isActive }) => (isActive ? classes.activeLink : "")}
        >
          titan
        </NavLink>
        <div
          className={location.pathname.includes("titan") ? classes.active : ""}
        ></div>
      </li>
    </ul>
  );
};

export default Navigation;
