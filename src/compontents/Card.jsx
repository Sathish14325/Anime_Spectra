import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Card = ({ data }) => {
  const { title, mal_id, images, score, genres, synopsis } = data;

  return (
    <Link to={`/anime/${mal_id}`}>
      <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden relative h-full">
        {/* Image */}
        <img
          src={images.jpg.large_image_url}
          alt={title}
          className="w-full h-72 object-cover"
        />

        {/* Overlay for Bookmark and Favorite Icons */}
        <div className="absolute top-2 left-2 flex space-x-2">
          <button className="bg-white p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12l5 5L20 7"
              />
            </svg>
          </button>
          <button className="bg-white p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v7m0 0l-4 4m4-4l4 4"
              />
            </svg>
          </button>
        </div>

        {/* Card Content */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="text-primary text-xl font-bold flex flex-row items-center">
              <FaStar
                color="yellow"
                style={{ display: "inline-block", marginRight: "3px" }}
              />
              {score}
            </p>
          </div>
          <p className="text-sm text-gray-400 text-primary line-clamp-3">
            {synopsis}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {genres.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-700 px-2 py-1 rounded-full text-secondary "
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
