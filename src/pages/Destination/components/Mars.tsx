import classes from "../destination.module.scss";
import { MarsPic } from "assets";
import { Navigation } from "components/destination";

const Mars = () => {
  return (
    <>
      <div className={classes.top}>
        <h2 className={classes.title}>
          <span>01</span>Pick your destination
        </h2>
        <img src={MarsPic} alt="moon" className={classes.pic} />
      </div>
      <div className={classes.bottom}>
        <Navigation />
        <h1 className={classes.object}>MARS</h1>
        <p className={classes.description}>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <hr className={classes.line} />
        <div className={classes.stats}>
          <div className={classes["stats-box"]}>
            <span className={classes["stats-text"]}>AVG. DISTANCE</span>
            <p className={classes.amount}>225 MIL. km</p>
          </div>
          <div className={classes["stats-box"]}>
            <span className={classes["stats-text"]}>Est. travel time</span>
            <p className={classes.amount}>9 months</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mars;
