import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import './PopularCategory.css';

const PopularCategory = () => {
  return (
    <div>
      <div className="popular-gategory-container">
        <h1>OUR POPULAR CATEGORY 🔥 </h1>
        <section>
          <Swiper
            slidesPerView={2}
            freeMode={true}
            spaceBetween={10}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://html.themefax.com/restina/html/rtl/assets/images/category_img_2.jpg"
                  alt=""
                />
                <p>Dessert</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://html.themefax.com/restina/html/rtl/assets/images/category_img_1.jpg"
                  alt=""
                />
                <p>Pizza</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://html.themefax.com/restina/html/rtl/assets/images/category_img_3.jpg"
                  alt=""
                />
                <p>BURGER</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://html.themefax.com/restina/html/rtl/assets/images/category_img_4.jpg"
                  alt=""
                />
                <p>DRINKS</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://html.themefax.com/restina/html/rtl/assets/images/category_img_2.jpg"
                  alt=""
                />
                <p>Dessert</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://html.themefax.com/restina/html/rtl/assets/images/category_img_3.jpg"
                  alt=""
                />
                <p>BURGER</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <img
                  src="https://html.themefax.com/restina/html/rtl/assets/images/category_img_1.jpg"
                  alt=""
                />
                <p>Pizza</p>
              </a>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default PopularCategory;
