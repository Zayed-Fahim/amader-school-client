import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import "./CarouselStyle.css";
// import required modules
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  const images = [
    {
      src: "https://i.ibb.co/8MZXH8B/school-9.jpg",
      no: 1,
    },
    {
      src: "https://i.ibb.co/9pJPb7M/school-2.jpg",
      no: 2,
    },
    {
      src: "https://i.ibb.co/KWfcwFP/school-5.jpg",
      no: 3,
    },
    {
      src: "https://i.ibb.co/mGB9j0M/school-3.jpg",
      no: 4,
    },
    {
      src: "https://i.ibb.co/f8MVXgx/school-1.jpg",
      no: 5,
    },
  ];

  return (
    <div className="mt-[90px] md:mt-[89px] lg:mt-[89px] xl:mt-[89px]">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="hidden md:block lg:block xl:block w-full h-[40vh] md:h-[65vh] lg:h-[60vh] xl:h-[70vh]"
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image.no}>
              <img
                className="h-[40vh] md:h-[65vh] lg:h-[60vh] xl:h-[70vh] w-full"
                src={image.src}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
