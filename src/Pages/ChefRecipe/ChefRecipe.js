import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const premium = useLoaderData();
    const [isFavorite, setIsFavorite] = useState({
        button1: false,
        button2: false,
        button3: false
      });

  
      const handleFavoriteClick = (buttonName) => {
        setIsFavorite((prevState) => ({
          ...prevState,
          [buttonName]: true
        }));
        toast.success(`Recipe added to favorites!`, { autoClose: 2000 });
      };

    return (

    <div className="card mx-auto w-3/4 mb-32 mt-5 bg-base-300 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Recipe 1</h2>
    <h2 className="card-title">Item: {premium.recipe1}</h2>
        <h2 className="card-title">ingredients: {premium.ingredients}</h2>
        <h2 className="card-title">cooking Method: {premium.cooking}</h2>
        <h2 className="card-title">Rating: {premium.rating}</h2>
    
    <div className="card-actions">
      <button onClick={() => handleFavoriteClick('button1')} disabled={isFavorite.button1} className="btn btn-primary">Add To Favorite</button>
    </div>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Recipe 2</h2>
    <h2 className="card-title">Item: {premium.recipe2}</h2>
        <h2 className="card-title">ingredients: {premium.ingredients2}</h2>
        <h2 className="card-title">cooking Method: {premium.cooking2}</h2>
        <h2 className="card-title">Rating: {premium.rating2}</h2>
    
    <div className="card-actions">
      <button onClick={() => handleFavoriteClick('button2')} disabled={isFavorite.button2} className="btn btn-primary">Add To Favorite</button>
    </div>
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Recipe 3</h2>
    <h2 className="card-title">Item: {premium.recipe3}</h2>
        <h2 className="card-title">ingredients: {premium.ingredients3}</h2>
        <h2 className="card-title">cooking Method: {premium.cooking3}</h2>
        <h2 className="card-title">Rating: {premium.rating3}</h2>
    
    <div className="card-actions">
      <button onClick={() => handleFavoriteClick('button3')} disabled={isFavorite.button3} className="btn btn-primary">Add To Favorite</button>
    </div>
  </div>
</div>
    );
};

export default ChefRecipe;