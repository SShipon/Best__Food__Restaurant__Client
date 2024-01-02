import React from 'react';
import Marquee from 'react-fast-marquee';

const Logo = ({logo}) => {
  const { id,name,logoImg } = logo;
  console.log(logo)
  return (
   
       <div>
         <img src={logoImg} alt="" srcset="" />
       </div>

  );
};

export default Logo;