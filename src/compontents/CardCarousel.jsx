import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/ bg-opacity-50 p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-10 h-10 text-primary border bg-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-opacity-50 p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-10 h-10 text-primary border bg-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M15 5l-7 7 7 7"
        />
      </svg>
    </div>
  );
};

const TopAnimeCarousel = (props) => {
  const title = props.title;
  const apiPath = props.apiPath;

  // console.log(title);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState([]);

  let response = [];
  const fetchData = async () => {
    response = await fetch(`https://api.jikan.moe/v4/${apiPath}`).then(
      (res) => {
        return res.json();
      }
    );
    setData(response.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const arrow = (
    <FaArrowAltCircleRight
      style={{ display: "inline-block", marginLeft: "5px" }}
    />
  );

  return (
    <div className="mx-auto px-2 py-6 relative">
      <h2 className="titles text-orange-500 text-3xl font-bold mb-4 border-l-4 p-2">
        {title}
        <Link to={`/${apiPath}`}>{arrow}</Link>
      </h2>
      <Slider {...settings}>
        {data.map((anime, index) => (
          <div key={anime.mal_id} className="px-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-gray-950 font-bold truncate">
                  {anime.title}
                </h3>
              </div>
              {/* Rank Number Badge */}
              <div className="absolute top-2 left-2 bg-gray-900 bg-opacity-100 text-white text-lg font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                #{index + 1}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopAnimeCarousel;
