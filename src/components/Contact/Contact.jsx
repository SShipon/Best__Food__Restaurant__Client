import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <section className="contact-flex">
          <div className="contact-left">
            <h1>Contact Information</h1>
            <p>
              Loremum et malesuada fames ac ante ipsum primis in faucibus. Sed
              molestie accumsan dui, non iaculis.
            </p>
            <img
              src="https://coderthemes.com/yum/assets/contact-9b0d2548.png"
              alt=""
            />
          </div>
          <div className="contact-right">
            <form action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">E-mail</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  placeholder="Enter Your message"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button>Send Message</button>
            </form>
          </div>
        </section>
        <section>
          <div className="contact-cards-flex">
            <div className="contact-card">
              <div className="contact-logo ">
                <i class="fa-solid fa-phone"></i>
                <h2>Call Us</h2>
              </div>
              <p>+1 234 XXXX 123</p>
              <p>+1 234 XXXX 567</p>
            </div>
            <div className="contact-card">
              <div className="contact-logo ">
                <i class="fa-solid fa-envelope"></i>
                <h2>Email</h2>
              </div>
              <p>demomail123@mail.com</p>
              <p>helpdemo123@mail.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-logo ">
                <i class="fa-solid fa-location-dot"></i>
                <h2>Address</h2>
              </div>
              <p>37125 Maya Estate Dr, Victoria Road,</p>
              <p>Warsaw, Poland - 234834</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
