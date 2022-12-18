import classes from "../destination.module.scss";
import { MoonPic } from "assets";
import { Navigation } from "components/destination";

const Moon = () => {
  return (
    <>
      <div className={classes.top}>
        <h2 className={classes.title}>
          <span>01</span>Pick your destination
        </h2>
        <img src={MoonPic} alt="moon" className={classes.pic} />
      </div>
      <div className={classes.bottom}>
        <Navigation />
        <h1 className={classes.object}>MOON</h1>
        <p className={classes.description}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <hr className={classes.line} />
        <div className={classes.stats}>
          <div className={classes["stats-box"]}>
            <span className={classes["stats-text"]}>AVG. DISTANCE</span>
            <p className={classes.amount}>384,400 km</p>
          </div>
          <div className={classes["stats-box"]}>
            <span className={classes["stats-text"]}>Est. travel time</span>
            <p className={classes.amount}>384,400 km</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moon;
