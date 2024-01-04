import React from 'react';
import './SpecialChefs.css';
import chef1 from '../../../assets/chefs/chef_img_1.jpg'
import chef2 from '../../../assets/chefs/chef_img_2.jpg'
import chef3 from '../../../assets/chefs/chef_img_3.jpg'
import chef4 from '../../../assets/chefs/chef_img_4.jpg'
const SpecialChefs = () => {
    return (
      <div>
        <section>
          <div className="about-chefs-container">
            <div className="about-chefs-header-part">
              <h1>MEET WITH OUR CHEFS</h1>
              <button>VIEW ALL CHEF</button>
            </div>
            <div className="about-chef-cards-flex">
              <div className="about-chef-card">
                <img src={chef1} alt="" />
                <h2>NATHANEAL DOWN</h2>
                <h3>Main Chef</h3>
              </div>
              <div className="about-chef-card">
                <img src={chef2} alt="" />
                <h2>PELICAN STEVE</h2>
                <h3>Executive Chef</h3>
              </div>
              <div className="about-chef-card">
                <img src={chef3} alt="" />
                <h2>DYLAN MERINGUE</h2>
                <h3>Master Chef</h3>
              </div>
              <div className="about-chef-card">
                <img src={chef4} alt="" />
                <h2>FERGUS DOUCHEBAG</h2>
                <h3>Executive Chef</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="about-article-container">
            <h4>OUR LATEST NEWS & ARTICLE</h4>
            <div className="about-article-cards">
              <div className="about-article-card">
                <img
                  src="https://html.themefax.com/restina/html/assets/images/blog_img_1.jpg"
                  alt=""
                />
                <div className="about-article-content">
                  <p> APRIL 18, 2024</p>
                  <h1>WHAT IS THE DIFFERENCE BETWEEN HAMBURGERS &...</h1>
                  <button>READ MORE</button>
                </div>
              </div>

              <div className="about-article-card">
                <img
                  src="https://html.themefax.com/restina/html/assets/images/blog_img_2.jpg"
                  alt=""
                />
                <div className="about-article-content">
                  <p> APRIL 18, 2024</p>
                  <h1>PAIRING WINE WITH INDIAN FOOD: TIPS FROM A...</h1>
                  <button>READ MORE</button>
                </div>
              </div>

              <div className="about-article-card">
                <img
                  src="https://html.themefax.com/restina/html/assets/images/blog_img_3.jpg"
                  alt=""
                />
                <div className="about-article-content">
                  <p> APRIL 18, 2024</p>
                  <h1>THE WONDERS OF THAI CUISINE SWEET, SALTY &...</h1>
                  <button>READ MORE </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default SpecialChefs;