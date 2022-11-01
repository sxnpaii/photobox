
// images for slider
import sliderImg1 from "../img/slides_img/sliderImg1.svg";
import sliderImg2 from "../img/slides_img/sliderImg4.jpg";
import sliderImg3 from "../img/slides_img/sliderImg5.jpg";
import sliderImg4 from "../img/slides_img/sliderImg6.jpg";
import sliderImg5 from "../img/slides_img/sliderImg7.jpg";
import sliderImg6 from "../img/slides_img/sliderImg8.jpg";
import sliderImg7 from "../img/slides_img/sliderImg9.jpg";
// personal style
import "../App.css";
// //
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={"auto"}
                centeredSlides={true}
                loop={true}
                loopFillGroupWithBlank={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    470: {
                        slidesPerView: 2,
                    },
                    798: {
                        slidesPerView: 3,
                    }
                }}


                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={sliderImg1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderImg2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderImg3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderImg4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderImg5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderImg6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderImg7} alt="" /></SwiperSlide>
            </Swiper>
        </>







    );
}

