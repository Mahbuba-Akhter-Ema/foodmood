import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AllChef = () => {
    const [categories, setCagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef-categories')
            .then(res => res.json())
            .then(data => setCagories(data));
    }, []);

    return (
        <div className="container mx-auto lg:grid sm:justify-center lg:grid-cols-3">
    
            <div className="col-span-3 grid lg:grid-cols-3 gap-8 mb-10">
                {
                    categories.map(category =>
                        <div key={category.id} className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 mt-5 card card-compact  bg-base-200 shadow-xl">
                            <figure><img className='w-full h-full' src={category.image} alt="Shoes" /></figure>

                            <div className="card-body">
                                <h2 className="card-title">Name: {category.title}</h2>
                                <h2 className="card-title">Experience: {category.experience}</h2>
                                <h2 className="card-title">Likes: {category.Likes}</h2>
                                <h2 className="card-title">Recipes: {category.recipes}</h2>
                                <div className='p-4'>
                                    {
                                      
                                            <Link className='bg-teal-500 text-black text-lg rounded px-4 py-3 m-1 hover:bg-teal-800 focus:shadow-outline focus:outline-none' to={`/chef-categories/${category.id}`}>View Recipes</Link>
                                            
                                    }
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>

    );
};

export default AllChef;