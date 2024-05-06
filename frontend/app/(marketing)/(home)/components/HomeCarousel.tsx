"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import WelcomeSlide from "./WecomeSlide";

type props = { label?: string };

const HomeCarousel: React.FC<props> = ({
  label = "product carousel or slider",
}) => {
  return (
    <section aria-label={label} className="h-[400px]">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper rounded-xl"
      >
        {[
          <SwiperSlide key={1}>
            <WelcomeSlide />
          </SwiperSlide>,
          // <SwiperSlide key={2}>B</SwiperSlide>,
          // <SwiperSlide key={3}>C</SwiperSlide>,
          // <SwiperSlide key={4}>D</SwiperSlide>,
        ]}
      </Swiper>
    </section>
  );
};

export default HomeCarousel;
