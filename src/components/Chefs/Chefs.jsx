import React from 'react';

const Chefs = () => {
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
                        <i className="fa-brands fa-facebook-f"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-twitter"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-linkedin-in"></i>
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
                        <i className="fa-brands fa-facebook-f"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-twitter"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-linkedin-in"></i>
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
                        <i className="fa-brands fa-facebook-f"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-twitter"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-linkedin-in"></i>
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
                        <i className="fa-brands fa-facebook-f"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-twitter"></i>
                      </li>
                      <li>
                        <i className="fa-brands fa-linkedin-in"></i>
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
      </div>
    );
};

export default Chefs;