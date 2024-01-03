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
      </div>
    </div>
  );
};

export default Contact;
