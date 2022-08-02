import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Characters from "./Pages/Characters";
import Character from "./Pages/Character/Character";
import Episode from "./Pages/Episode/Episode";
import Location from "./Pages/Location/Location";

import Navbar from "./components/UI/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import DarkMode from "./components/UI/DarkMode/DarkMode";
import FOF from "./Pages/FOF/FOF";
import Footer from "./components/UI/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <DarkMode />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<FOF />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/episode/:id" element={<Episode />} />
        <Route path="/episode" element={<Navigate to="/episode/1" replace />} />
        <Route path="/location/:id" element={<Location />} />
        <Route
          path="/location"
          element={<Navigate to="/location/1" replace />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
