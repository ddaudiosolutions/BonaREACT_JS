import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ServicesDataList from "../../data/services/servicesHomeItems.json";

const ServicesHome = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
    };

    /*  Object.assign(swiperContainer, params);
    swiperContainer.initialize(); */
  }, []);

  return (
    <section id="services" className="block spacer p-top-xl">
      <div className="adv-slider-services">
        <div className="adv-swiper-container">
          <div className="adv-swiper-wrapper services-items clearfix">
            <swiper-container ref={swiperRef} init="false">
              <swiper-slide class="blue-slide">Slide 1</swiper-slide>
              <swiper-slide class="yellow-slide">Slide 2</swiper-slide>
              <swiper-slide class="green-slide">Slide 3</swiper-slide>
            </swiper-container>
          </div>

          {/* <div className="adv-2-swiper-button-prev">
            <span>
              <span className="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto">
                Previous
              </span>
            </span>
          </div>

          <div className="adv-2-swiper-button-next">
            <span>
              <span className="btn btn-lg btn-after-horbar btn-link border-0 p-0 min-w-auto">
                Next
              </span>
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
