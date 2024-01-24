import React from 'react';
import Banner from './Banner/Banner';
import Menu from './Menu/Menu';
import PopularCategory from './PopularCategory/PopularCategory';
import Logos from './RestaurantLogo/AddLogos';
import SpecialChefs from './SpecialChefs/SpecialChefs';
import Foods from './HomeFood/Foods';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCategory></PopularCategory>
            {/* <Menu></Menu> */}
            <Foods />
            <SpecialChefs></SpecialChefs>
            <Logos></Logos>
           
        </div>
    );
};

export default Home;