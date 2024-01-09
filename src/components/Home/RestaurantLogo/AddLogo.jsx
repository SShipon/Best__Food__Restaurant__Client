import React from 'react';
import Marquee from 'react-fast-marquee';

const Logo = ({logo}) => {
  const {logoImg, icon } = logo;
  console.log(logo)
  return (
   
       <div className=''>
         <img className='h-20 w-26 ml-9' src={logoImg} alt="" srcset="" />
       
       </div>

  );
};

export default Logo;