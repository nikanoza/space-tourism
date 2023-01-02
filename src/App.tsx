import { Header, Menu } from "components";
import React, { useEffect, useState } from "react";
import { lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import classes from "./app.module.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const Destination = lazy(() => import("./pages/Destination/Destination"));
const Crew = lazy(() => import("./pages/Crew/Crew"));
const Technology = lazy(() => import("./pages/Technology"));

const Moon = lazy(() => import("./pages/Destination/components/Moon"));
const Mars = lazy(() => import("./pages/Destination/components/Mars"));
const Europa = lazy(() => import("./pages/Destination/components/Europa"));
const Titan = lazy(() => import("./pages/Destination/components/Titan"));

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
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route
          path="/crew"
          element={
            <React.Suspense>
              <Crew />
            </React.Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <React.Suspense>
              <Technology />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
