import React from 'react';
import CustomButton from '../../Sheared/CustomButton/CustomButton';
import './About.css'
const About = () => {
  return (
    <div className="about-container">
      <div>
        <section className="about-banner">
          <div className="about-banner-content">
            <h2>DISCOVER ART OF FOOD WITH US.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
              reminu is one doeiusmod tempor incidition ulla mco laboris nisi ut
              aliquip ex ea commo condorico consectetur adipiscing elitut
              aliquip.
            </p>
            <button>Food Menue</button>
          </div>
        </section>
        <section className="about-invite">
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
            <button>View All Menu </button>
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
        </section>
        <section>
          <div className="about-all-img">
            <div className="about-img-1">
              <img
                src="https://html.themefax.com/restina/html/assets/images/showcase_img_1.jpg"
                alt=""
              />
            </div>
            <div className="about-img-2">
              <img
                src="https://html.themefax.com/restina/html/assets/images/showcase_img_2.jpg"
                alt=""
              />
              <img
                src="https://html.themefax.com/restina/html/assets/images/showcase_img_3.jpg"
                alt=""
              />
            </div>
            <div className="about-img-1">
              <img
                src="	https://html.themefax.com/restina/html/assets/images/showcase_img_4.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div className="about-reservations-container">
            <div className="about-reservations-content">
              <div className="about-reservations-left">
                <img
                  src="https://html.themefax.com/restina/html/assets/images/reservation_img.jpg"
                  alt=""
                />
              </div>
              <div className="about-reservations-right">
                <h4>RESERVATIONS</h4>
                <form action="">
                  <div className="about-form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Select Person" />
                    <input type="date" />
                    <input type="text" placeholder="Select Time" />
                    <button>BOOK NOW</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="about-rating">
            <div className="about-rating-content">
              <a
                class="venobox play-btn vbox-item"
                data-autoplay="true"
                data-vbtype="video"
                href="https://youtu.be/nqye02H_H6I?si=ougeOsfL0tat6YbT"
              >
                <i class="fas fa-play" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
