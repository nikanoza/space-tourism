import { Header, Menu } from "components";
import React, { useEffect, useState } from "react";
import { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import classes from "./app.module.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const Destination = lazy(() => import("./pages/Destination/Destination"));

const Moon = lazy(() => import("./pages/Destination/components/Moon"));
const Mars = lazy(() => import("./pages/Destination/components/Mars"));

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);
  return (
    <div className={classes.app}>
      <Header setShowMenu={setShowMenu} />
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <React.Suspense>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/destination"
          element={
            <React.Suspense>
              <Destination />
            </React.Suspense>
          }
        >
          <Route path="" element={<Navigate to="moon" />} />
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
