import React, { useRef } from 'react';
import './Contact.css';
import { toast } from 'react-toastify';
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g1c26wo",
        "template_yb7v9ac",
        form.current,
        "user_5ySjOOUu9Vj2df9Ohyyw7"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank you dear Customer !!!", {
            position: toast.POSITION.TOP_RIGHT,
          });
    
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="bg-purple">
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
            <form ref={form} onSubmit={sendEmail} action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name}"
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
                  name="user_email"
                  type="text"
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
                  name="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
        <section>
          <div className="contact-cards-flex">
            <div className="contact-card">
              <div className="contact-logo ">
                <i className="fa-solid fa-phone"></i>
                <h2>Phone Us 24/7</h2>
              </div>
              <p>+1 234 XXXX 123</p>
              <p>+1 234 XXXX 567</p>
            </div>
            <div className="contact-card">
              <div className="contact-logo ">
                <i className="fa-solid fa-envelope"></i>
                <h2>Get Direction</h2>
              </div>
              <p>Sector:7, Road:27, House:18, Uttara, Dhaka, 1230 Dhaka.</p>
              {/* <p>37125 Maya Estate Dr, Victoria Road,</p> */}
              <p>Warsaw, Poland - 234834</p>
            </div>
            <div className="contact-card">
              <div className="contact-logo ">
                <i className="fa-solid fa-location-dot"></i>
                <h2>Opening Hours</h2>
              </div>
              <p>Everyday 11.00 PM - 11.00 AM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
