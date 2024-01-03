import React from 'react';
import Banner from './Banner/Banner';
import Foods from './FoodItems/Foods';
import PopularCategory from './PopularCategory/PopularCategory';
import Logos from './RestaurantLogo/AddLogos';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCategory></PopularCategory>
            <Logos></Logos>
           
        </div>
    );
};

export default Home;