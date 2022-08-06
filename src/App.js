import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./bootstrapReset.scss";

import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import setDarkModePrefrences from "./utils/setDarkModePrefrences";

import Characters from "./Pages/Characters/Characters";
import Character from "./Pages/Character/Character";
import Episode from "./Pages/Episode/Episode";
import Location from "./Pages/Location/Location";
import Home from "./Pages/Home/Home";

import Navbar from "./components/UI/Navbar/Navbar";
import DarkMode from "./components/UI/DarkMode/DarkMode";
import Footer from "./components/UI/Footer/Footer";
import PageStartLink from "./components/UI/PageStartLink/PageStartLink";
import Loader from "./components/UI/Loader/Loader";
const FOF = React.lazy(() => import("./Pages/FOF/FOF"));

const App = () => {
  setDarkModePrefrences();

  return (
    <Router>
      <Navbar />
      <DarkMode />
      <PageStartLink />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/404"
            element={
              <Suspense fallback={<Loader />}>
                <FOF />
              </Suspense>
            }
          />
          <Route path="/*" element={<Navigate to="/404" replace />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/episode/:id" element={<Episode />} />
          <Route
            path="/episode"
            element={<Navigate to="/episode/1" replace />}
          />
          <Route path="/location/:id" element={<Location />} />
          <Route
            path="/location"
            element={<Navigate to="/location/1" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
