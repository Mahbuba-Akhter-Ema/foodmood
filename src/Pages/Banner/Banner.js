import React from 'react';
import bannerImg from '../../assests/banner-img.jpeg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img className='w-3/4' src={bannerImg} alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Welcome to FoodMood!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/blog' className="btn btn-primary">About Us</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;