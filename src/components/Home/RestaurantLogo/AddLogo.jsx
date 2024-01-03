import React from 'react';
import Marquee from 'react-fast-marquee';

const Logo = ({logo}) => {
  const {logoImg, icon } = logo;
  console.log(logo)
  return (
   
       <div className=''>
         <img className='object-cover h-40 w-96' src={logoImg} alt="" srcset="" />
       
       </div>

  );
};

export default Logo;