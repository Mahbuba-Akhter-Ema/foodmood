import React from "react";
import { Link, useLoaderData } from "react-router-dom";


const ChefDetails = () => {
  const cardDetails = useLoaderData();

  return (
    <div className="flex justify-center items-center mx-auto p-10 ">
      <div className="card w-96 bg-base-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={cardDetails.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <h2 className="card-title text-4xl mx-auto mt-3">Name: {cardDetails.title}</h2>
        <h2 className="card-title mx-auto">Experience: {cardDetails.experience}</h2>
        <h2 className="card-title mx-auto">Likes: {cardDetails.Likes}</h2>
        <h2 className="card-title mx-auto">Recipes: {cardDetails.recipes}</h2>
        
        <div className="card-body items-center text-center">
          <p className="card-body line-clamp-3 mb-2">
            {cardDetails.details}
          </p>
          <div className="card-actions justify-center">
            <button className="inline-flex items-center m-2  justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500  hover:bg-red-700 focus:shadow-outline focus:outline-none">
              <Link to={`/premiumpage/${cardDetails.id}`}>
                View Full Recipes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
