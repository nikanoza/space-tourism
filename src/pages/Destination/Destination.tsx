import { Outlet } from "react-router";
import classes from "./destination.module.scss";

const Destination = () => {
  return (
    <main className={classes.main}>
      <Outlet />
    </main>
  );
};

export default Destination;
