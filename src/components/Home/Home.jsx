import React from 'react';
import Banner from './Banner/Banner';
import Menu from './Menu/Menu';
import PopularCategory from './PopularCategory/PopularCategory';
import Logos from './RestaurantLogo/AddLogos';
import SpecialChefs from './SpecialChefs/SpecialChefs';
import Foods from './HomeFood/Foods';
import HomeReviews from './Review/HomeReviews';
import Reviews from '../Dashboard/Review/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularCategory />
            <Foods />
            <SpecialChefs />
            <Logos />
            <HomeReviews />
            <Reviews/>
           
        </div>
    );
};

export default Home;