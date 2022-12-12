import { Header, Menu } from "components";
import { useState } from "react";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import classes from "./app.module.scss";

const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className={classes.app}>
      <Header setShowMenu={setShowMenu} />
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
