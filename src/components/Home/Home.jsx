import React from 'react';
import Banner from './Banner/Banner';
import Foods from './FoodItems/Foods';
import Logos from './RestaurantLogo/AddLogos';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Foods></Foods>
            <Logos></Logos>
           
        </div>
    );
};

export default Home;