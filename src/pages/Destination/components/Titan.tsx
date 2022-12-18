import classes from "../destination.module.scss";
import { TitanPic } from "assets";
import { Navigation } from "components/destination";

const Titan = () => {
  return (
    <>
      <div className={classes.top}>
        <h2 className={classes.title}>
          <span>01</span>Pick your destination
        </h2>
        <img src={TitanPic} alt="moon" className={classes.pic} />
      </div>
      <div className={classes.bottom}>
        <Navigation />
        <h1 className={classes.object}>Titan</h1>
        <p className={classes.description}>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <hr className={classes.line} />
        <div className={classes.stats}>
          <div className={classes["stats-box"]}>
            <span className={classes["stats-text"]}>AVG. DISTANCE</span>
            <p className={classes.amount}>1.6 BIL. km</p>
          </div>
          <div className={classes["stats-box"]}>
            <span className={classes["stats-text"]}>Est. travel time</span>
            <p className={classes.amount}>7 years</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Titan;
