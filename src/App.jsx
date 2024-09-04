import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TVShows from "./components/TVShows";
import Sports from "./components/Sports";
import Live from "./components/Live";
import Settings from "./components/Settings";
import { IoHomeOutline, IoSettings } from "react-icons/io5";
import { MdOutlineLocalMovies, MdSportsGymnastics } from "react-icons/md";
import { HiMiniTv } from "react-icons/hi2";
import { RiLiveFill } from "react-icons/ri";
import "./App.css";

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="app">
        <nav className="list">
          <div className="container-of-head">
            <IoHomeOutline className="icons" />
            <Link to="/">{t("Home")}</Link>
          </div>
          <div className="container-of-head">
            <MdOutlineLocalMovies className="icons" />
            <Link to="/movies">{t("Movies")}</Link>
          </div>
          <div className="container-of-head">
            <HiMiniTv className="icons" />
            <Link to="/tvshows">{t("TVShows")}</Link>
          </div>
          <div className="container-of-head">
            <MdSportsGymnastics className="icons" />
            <Link to="/sports">{t("Sports")}</Link>
          </div>
          <div className="container-of-head">
            <RiLiveFill className="icons" />
            <Link to="/live">{t("Live")}</Link>
          </div>
          <div className="container-of-head">
            <IoSettings className="icons" />
            <Link to="/settings">Settings</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/live" element={<Live />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
