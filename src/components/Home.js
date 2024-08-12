import React, { useEffect, useState } from "react";
import { DATA_API_URL } from "../constant";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(DATA_API_URL);
    const json = await data.json();
    setData(json?.photos)
    console.log(data);
  };

  return <div className="overflow-x-hidden w-full h-full relative py-10">
    <h1 className="text-[40px] text-center font-bold pb-8">MargaSoochi Assignment</h1>
    <div className="grid grid-cols-3 gap-5 overflow-hidden relative px-56">
        {data && data.map((card) =>{
            return <Link key={card.id} to={`/imagedetails/${card.id}`}>
                <img src={card.url} alt={card.title} className="w-full rounded-lg overflow-hidden"/>
            </Link>
        })}
    </div>
  </div>;
};

export default Home;
