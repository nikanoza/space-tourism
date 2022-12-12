import { Link } from "react-router-dom";
import { Close } from "svg";
import classes from "./menu.module.scss";

const Menu: React.FC<{ setShowMenu: (bool: boolean) => void }> = (props) => {
  return (
    <div className={classes.menu}>
      <div className={classes["close-icon"]}>
        <Close onClick={() => props.setShowMenu(false)} />
      </div>
      <ul className={classes["nav-list"]}>
        <Link to="/home">
          <span className={classes["nav-item"]}>00 home</span>
        </Link>
        <Link to="/destination">
          <span className={classes["nav-item"]}>01 destination</span>
        </Link>
        <Link to="/crew">
          <span className={classes["nav-item"]}>02 crew</span>
        </Link>
        <Link to="/technology">
          <span className={classes["nav-item"]}>03 technology</span>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
