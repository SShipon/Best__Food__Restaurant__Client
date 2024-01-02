import React from 'react';
import img1 from '../../../assets/Restaurant_logo/images__1_-removebg-preview.png'
import img2 from  '../../../assets/Restaurant_logo/images__3_-removebg-preview.png'
import img3 from  '../../../assets/Restaurant_logo/images__4_-removebg-preview.png'
import img4 from  '../../../assets/Restaurant_logo/images__6_-removebg-preview.png'
import img5 from  '../../../assets/Restaurant_logo/images__9_-removebg-preview.png'
import Logo from './Logo';
import Marquee from 'react-fast-marquee';
const Logos = () => {
    const restaurantLogos =[
        {
          id:1,
          logoImg:img1
        },
        {
          id:2,
          logoImg:img2
        },
        {
            id:3,
            logoImg:img3
          },
          {
            id:4,
            logoImg:img4
          },
          {
            id:5,
            logoImg:img5
          },
        
    ]
    
    return (
        <div>
          
           <div  className='text-center my-10'>
                <h2 className='text-4xl bold'>  OUR TOP WORLD RESTAURANT PARTNERSHIP</h2>
                <p className='text-base mt-4'> of companies plan to consolidate their tech
            tools in the next year.  <br />  One way to respond to this downscaling is to
            seek out technology partnerships..</p>
            </div>
            <Marquee>
            <div className='flex z-0'>
            {
              restaurantLogos.map(logo=><Logo
              key={logo.id}
              logo={logo}
              ></Logo>)  
             }       
            </div>
        </Marquee>
        </div>
      
    );
};

export default Logos;