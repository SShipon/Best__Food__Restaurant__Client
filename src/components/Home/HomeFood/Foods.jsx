import React from 'react';
import { useMenuContext } from '../../../Context/MenuContext';
import HomeFood from './HomeFood';
import Loading from '../../../Sheared/Loading/Loading';

const Foods = () => {
    const { products } = useMenuContext();
    
    if (products.length == 0) {
        return <Loading />;
      }
    console.log(products)
    return (
        <div>
           <div className="menu-cards-main">
      <div className="menu-container-grid">
        <section>
          <div className="menu-left"></div>
        </section>
        <section>
          <div className="menu-right">
            <div className="menu-header">
              <h1>DELICIOUS MENU</h1>
            </div>
            <div className="menu-cards-flex">
              {products.slice(0, 3).map((curElem) => (
                <HomeFood key={curElem.name} {...curElem}></HomeFood>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
        </div>
    );
};

export default Foods;