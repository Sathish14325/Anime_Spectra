import React from "react";
import CardCarousel from "../compontents/CardCarousel";
const Home = () => {
  return (
    <div>
      <CardCarousel title="Top Anime" apiPath="top/anime" />
      <CardCarousel title="Upcomimg" apiPath="seasons/upcoming" />
      <CardCarousel title="Mango" apiPath="manga" />
    </div>
  );
};

export default Home;
