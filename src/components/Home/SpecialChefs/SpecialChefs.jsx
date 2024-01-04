import React from 'react';
import './SpecialChefs.css';
import chef1 from '../../../assets/chefs/chef_img_1.jpg';
import chef2 from '../../../assets/chefs/chef_img_2.jpg';
import chef3 from '../../../assets/chefs/chef_img_3.jpg';
import chef4 from '../../../assets/chefs/chef_img_4.jpg';
import article1 from '../../../assets/Article/blog_2_img_1.jpg';
import article2 from '../../../assets/Article/blog_2_img_2.jpg';
import article3 from '../../../assets/Article/blog_2_img_3.jpg';
const SpecialChefs = () => {
  return (
    <div>
      <section>
        <div className="home-back-img"></div>
      </section>
      <section>
        <div className="home-chefs-container">
          <div className="home-chefs-header-part">
            <h1>MEET WITH OUR CHEFS</h1>
          </div>
          <div className="home-chef-cards-flex">
            <div className="home-chef-card">
              <img src={chef1} alt="" />
              <div className="home-chef-content">
                <h2>NATHANEAL DOWN</h2>
                <h3>Main Chef</h3>
                <div>
                  <ul className="chef-social">
                    <li>
                      <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="home-chef-card">
              <img src={chef2} alt="" />
              <div className="home-chef-content">
                <h2>PELICAN STEVE</h2>
                <h3>Executive Chef</h3>
                <div>
                  <ul className="chef-social">
                    <li>
                      <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="home-chef-card">
              <img src={chef3} alt="" />
              <div className="home-chef-content">
                <h2>DYLAN MERINGUE</h2>
                <h3>Master Chef</h3>
                <div>
                  <ul className="chef-social">
                    <li>
                      <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="home-chef-card">
              <img src={chef4} alt="" />
              <div className="home-chef-content">
                <h2>FERGUS DOUCHEBAG</h2>
                <h3>Executive Chef</h3>
                <div>
                  <ul className="chef-social">
                    <li>
                      <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="all-chefs-btn">
            <button>View All Chefs</button>
          </div>
        </div>
      </section>

      <section>
        <div className="about-article-container">
          <h4>OUR LATEST NEWS & ARTICLE</h4>
          <div className="about-article-cards">
            <div className="about-article-card">
              <img src={article1} alt="" />
              <div className="about-article-content">
                <p> APRIL 18, 2024</p>
                <h1>WHAT IS THE DIFFERENCE BETWEEN HAMBURGERS &...</h1>
                <button>READ MORE</button>
              </div>
            </div>

            <div className="about-article-card">
              <img src={article2} alt="" />
              <div className="about-article-content">
                <p> APRIL 18, 2024</p>
                <h1>PAIRING WINE WITH INDIAN FOOD: TIPS FROM A...</h1>
                <button>READ MORE</button>
              </div>
            </div>

            <div className="about-article-card">
              <img src={article3} alt="" />
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
