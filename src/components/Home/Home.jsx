import React from 'react';
import Banner from './Banner/Banner';
import Menu from './Menu/Menu';
import PopularCategory from './PopularCategory/PopularCategory';
import Logos from './RestaurantLogo/AddLogos';
import SpecialChefs from './SpecialChefs/SpecialChefs';
import Foods from './HomeFood/Foods';
import HomeReviews from './Review/HomeReviews';
import Reviews from '../Dashboard/Review/Reviews';
import Timer from '../Timer/Timer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCategory></PopularCategory>
            {/* <Menu></Menu> */}
            <Foods />
            <SpecialChefs></SpecialChefs>
            <Logos></Logos>
            <HomeReviews />
            <Reviews />
            <Timer />
           
        </div>
    );
};

export default Home;