import { useState } from "react";
import classes from "./technology.module.scss";
import data from "./helpers";

const Technology = () => {
  const [technologyIndex, setTechnologyIndex] = useState<number>(0);

  const info = data[technologyIndex];

  return (
    <div className={classes.main}>
      <h2 className={classes.title}>
        <span>03</span>SPACE LAUNCH 101
      </h2>
      <div className={classes.wrapper}>
        <img src={info.image.landscape} alt="" className={classes.landscape} />
        <ul className={classes.pagination}>
          <li
            className={classes["pagination-item"]}
            style={{
              color: technologyIndex === 0 ? "var(--dark)" : "var(--light)",
              backgroundColor:
                technologyIndex === 0 ? "var(--light)" : "transparent",
              border:
                technologyIndex === 0
                  ? "none"
                  : "1px solid rgba(255,255,255, 0.35)",
            }}
            onClick={() => setTechnologyIndex(0)}
          >
            1
          </li>
          <li
            className={classes["pagination-item"]}
            style={{
              color: technologyIndex === 1 ? "var(--dark)" : "var(--light)",
              backgroundColor:
                technologyIndex === 1 ? "var(--light)" : "transparent",
              border:
                technologyIndex === 1
                  ? "none"
                  : "1px solid rgba(255,255,255, 0.35)",
            }}
            onClick={() => setTechnologyIndex(1)}
          >
            2
          </li>
          <li
            className={classes["pagination-item"]}
            style={{
              color: technologyIndex === 2 ? "var(--dark)" : "var(--light)",
              backgroundColor:
                technologyIndex === 2 ? "var(--light)" : "transparent",
              border:
                technologyIndex === 2
                  ? "none"
                  : "1px solid rgba(255,255,255, 0.35)",
            }}
            onClick={() => setTechnologyIndex(2)}
          >
            3
          </li>
        </ul>
        <div className={classes.texts}>
          <h3 className={classes.info}>THE TERMINOLOGY…</h3>
          <h1 className={classes.name}>{info.name}</h1>
          <p className={classes.description}>{info.description}</p>
        </div>
        <img src={info.image.portrait} alt="" className={classes.portrait} />
      </div>
    </div>
  );
};

export default Technology;
