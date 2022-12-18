import classes from "../destination.module.scss";
import { EuropaPic } from "assets";
import { Navigation } from "components/destination";

const Europa = () => {
  return (
    <>
      <div className={classes.top}>
        <h2 className={classes.title}>
          <span>01</span>Pick your destination
        </h2>
        <img src={EuropaPic} alt="moon" className={classes.pic} />
      </div>
      <div className={classes.bottom}>
        <Navigation />
        <h1 className={classes.object}>Europa</h1>
        <p className={classes.description}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <hr className={classes.line} />
        <div className={classes.stats}>
          <div className={classes["stats-box"]}>
            <span className={classes["stats-text"]}>AVG. DISTANCE</span>
            <p className={classes.amount}>628 MIL. km</p>
          </div>
          <div className={classes["stats-box"]}>
            <span className={classes["stats-text"]}>Est. travel time</span>
            <p className={classes.amount}>3 years</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Europa;
