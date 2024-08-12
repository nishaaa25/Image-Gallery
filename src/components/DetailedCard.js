import React, { useEffect, useState } from "react";
import { DATA_API_URL } from "../constant";
import { useParams } from "react-router-dom";

const DetailedCard = () => {
  const { id } = useParams();
  console.log(id);
  const [imageDetails, setImageDetails] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImageDetails();
  }, []);

  const getImageDetails = async () => {
    try {
      const data = await fetch(`${DATA_API_URL}${id}`);
      const json = await data?.json();
      setTimeout(() => {
        setImageDetails(json?.photo);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log("Failed to fetch data" + error);
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen overflow-hidden relative px-40 ">
      {loading ? (
        <p className="text-[50px] py-[300px] font-bold text-center">Loading...</p>
      ) : (
        <div className="flex place-items-center gap-10 relative h-full">
          <div className="w-1/2 rounded-[30px] overflow-hidden">
            <img src={imageDetails.url} alt={imageDetails.title} />
          </div>
          <div className="w-1/2 flex flex-col place-items-start gap-4">
            <h1 className="font-bold text-[38px] tracking-[4px]">
              {imageDetails.title}
            </h1>
            <p className="text-xl trackng-[3px]">{imageDetails.description}</p>
            <div className="bg-blue-400 px-4 py-1 rounded-md mt-5">
              <p className="text-2xl font-bold ">User : {imageDetails.user}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedCard;
