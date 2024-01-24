import React from 'react';
import './SingleFood'
import { useLoaderData } from 'react-router-dom';

const SingleFood = () => {
    const loaderData = useLoaderData()
    return (
        <div className='flex justify-center my-10 mx-6'>
            <div className="singlefood-main">
               {loaderData.name}
               <h2>{loaderData.newPrice}</h2>
              <img src={loaderData.image} alt="" />
           </div>
        </div>
    );
};

export default SingleFood;