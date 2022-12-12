import { Logo, MenuIcon } from "svg";
import Menu from "../Menu";
import classes from "./header.module.scss";

const Header: React.FC<{ setShowMenu: (bool: boolean) => void }> = (props) => {
  return (
    <header className={classes.header}>
      <Logo />
      <MenuIcon onClick={() => props.setShowMenu(true)} />
    </header>
  );
};

export default Header;
