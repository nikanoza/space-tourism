import classes from "./home.module.scss";

const Home = () => {
  return (
    <div className={classes.home}>
      <h3 className={classes.describe}>SO, YOU WANT TO TRAVEL TO</h3>
      <h1 className={classes.title}>space</h1>
      <h4 className={classes.description}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </h4>
      <button className={classes.explore}>EXPLORE</button>
    </div>
  );
};

export default Home;
