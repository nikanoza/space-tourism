import { useState } from "react";
import classes from "./crew.module.scss";
import data, { CrewType } from "./helpers";

const Crew = () => {
  const [memberIndex, setMemberIndex] = useState<number>(0);
  const human: CrewType = data[memberIndex];
  return (
    <div className={classes.main}>
      <h2 className={classes.title}>
        <span>02</span>Meet your crew
      </h2>
      <div className={classes.content}>
        <img src={human.avatar} alt="crew" className={classes.avatar} />
        <div className={classes.line}></div>
        <div className={classes.info}>
          <ul className={classes.pagination}>
            <li
              className={classes["pagination-item"]}
              style={{ opacity: memberIndex === 0 ? 1 : 0.17 }}
              onClick={() => setMemberIndex(0)}
            ></li>
            <li
              className={classes["pagination-item"]}
              style={{ opacity: memberIndex === 1 ? 1 : 0.17 }}
              onClick={() => setMemberIndex(1)}
            ></li>
            <li
              className={classes["pagination-item"]}
              style={{ opacity: memberIndex === 2 ? 1 : 0.17 }}
              onClick={() => setMemberIndex(2)}
            ></li>
            <li
              className={classes["pagination-item"]}
              style={{ opacity: memberIndex === 3 ? 1 : 0.17 }}
              onClick={() => setMemberIndex(3)}
            ></li>
          </ul>
          <div className={classes.texts}>
            <h3 className={classes.position}>{human.position}</h3>
            <h1 className={classes.name}>{human.name}</h1>
            <p className={classes.bio}>{human.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
