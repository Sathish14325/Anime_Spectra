import React, { useState, useEffect } from "react";
import Card from "../compontents/Card";

const TopAnime = () => {
  const [data, setData] = useState([]);

  let response = [];
  const fetchData = async () => {
    response = await fetch(`https://api.jikan.moe/v4/top/anime`).then((res) => {
      return res.json();
    });
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-20">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default TopAnime;
