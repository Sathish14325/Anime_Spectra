import Header from "./compontents/Header";
import CardCarousel from "./compontents/CardCarousel";
// import MainHero from "./compontents/MainHero"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./compontents/Home";
import TopAnime from "./pages/TopAnime";

const App = () => {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top/anime" element={<TopAnime />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
