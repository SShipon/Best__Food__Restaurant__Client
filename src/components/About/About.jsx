import React from 'react';
import './About.css'
const About = () => {
  return (
    <div>
      <div className="about-banner">
        <div className="about-invite">
          <div className="about-invite-left">
            <h1>WE INVITE YOU TO VISIT OUR RESTAURANT</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </p>
            <button>View All Menue</button>
          </div>
          <div className="about-invite-right">
            <div className="about-img-first-div">
              <div>
                <img
                  src="https://html.themefax.com/restina/html/assets/images/about_story_img_1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://html.themefax.com/restina/html/assets/images/about_story_img_3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="about-img-second-div">
              <img
                src="https://html.themefax.com/restina/html/assets/images/about_story_img_4.jpg"
                alt=""
              />
              <img
                src="https://html.themefax.com/restina/html/assets/images/about_story_img_2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
