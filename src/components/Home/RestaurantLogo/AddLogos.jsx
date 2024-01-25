import React from 'react';
import img1 from '../../../assets/Restaurant_logo/images__1_-removebg-preview.png'
import img2 from  '../../../assets/Restaurant_logo/images__3_-removebg-preview.png'
import img3 from  '../../../assets/Restaurant_logo/images__4_-removebg-preview.png'
import img4 from  '../../../assets/Restaurant_logo/images__6_-removebg-preview.png'
import img5 from  '../../../assets/Restaurant_logo/images__9_-removebg-preview.png'
import Logo from './AddLogo';
import Marquee from 'react-fast-marquee';
import Facebook from '../../../Shared/Svg/Facebook';
const Logos = () => {
    const restaurantLogos = [
      {
        icon: <Facebook />,
        __id: 1,
        logoImg: img1,
      },
      {
        __id: 2,
        logoImg: img2,
      },
      {
        __id: 3,
        logoImg: img3,
      },
      {
        __id: 4,
        logoImg: img4,
      },
      {
        __id: 5,
        logoImg: img5,
      },
      {
        icon: <Facebook />,
        __id: 1,
        logoImg: img1,
      },
      {
        __id: 2,
        logoImg: img2,
      },
      {
        __id: 3,
        logoImg: img3,
      },
      {
        __id: 4,
        logoImg: img4,
      },
      {
        __id: 5,
        logoImg: img5,
      },
    ];
    
    return (
      <div
        className="pt-5 pb-20 "
        style={{
          backgroundColor: '#f4ecdf',
        }}
      >
        <div className="text-center my-10">
          <h2 className="text-3xl text-base-100">
            {' '}
            OUR TOP WORLD RESTAURANT PARTNERSHIP
          </h2>
          <p className="mt-4">
            {' '}
            of companies plan to consolidate their tech tools in the next year.{' '}
            <br /> One way to respond to this downscaling is to seek out
            technology partnerships..
          </p>
        </div>
        <Marquee speed={30}>
          <div className="flex gap-5 z-0">
            {restaurantLogos.map((logo) => (
              <Logo key={logo.__id} logo={logo}></Logo>
            ))}
          </div>
        </Marquee>
      </div>
    );
};

export default Logos;