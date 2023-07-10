import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";

const ServiceTakerList = () => {
  const lists = [
    {
      index: 1,
      src: "https://i.ibb.co/dcr2n5g/bnmpc.png",
      alt: "BNMPC",
      button: {
        text: "VISIT WEBSITE",
        link: "https://www.noormohammadcollege.ac.bd/",
      },
    },
    {
      index: 2,
      src: "https://i.ibb.co/b7zzYMn/vnsc.png",
      alt: "VNSC",
      button: {
        text: "VISIT WEBSITE",
        link: "https://www.vnsc.edu.bd/",
      },
    },
    {
      index: 3,
      src: "https://i.ibb.co/zsGNWJc/acc.png",
      alt: "ACC",
      button: {
        text: "VISIT WEBSITE",
        link: "https://acc.edu.bd/",
      },
    },
    {
      index: 4,
      src: "https://i.ibb.co/dPP7fJY/rajuk.png",
      alt: "RAJUK COLLEGE",
      button: {
        text: "VISIT WEBSITE",
        link: "http://www.rajukcollege.edu.bd/",
      },
    },
    {
      index: 5,
      src: "https://i.ibb.co/Dt87RJY/shahin.png",
      alt: "BAFSD",
      button: {
        text: "VISIT WEBSITE",
        link: "https://bafsd.edu.bd/",
      },
    },
    {
      index: 6,
      src: "https://i.ibb.co/dr3gtFp/hcc.png",
      alt: "HCC",
      button: {
        text: "VISIT WEBSITE",
        link: "http://www.hcc.edu.bd/",
      },
    },
    {
      index: 7,
      src: "https://i.ibb.co/c6GF2rG/sjs.png",
      alt: "SJS",
      button: {
        text: "VISIT WEBSITE",
        link: "https://sjs.edu.bd/new/index.php",
      },
    },
    {
      index: 8,
      src: "https://i.ibb.co/qd3f9Jt/czs.png",
      alt: "CZS",
      button: {
        text: "VISIT WEBSITE",
        link: "http://www.czs.edu.bd/",
      },
    },
    {
      index: 9,
      src: "https://i.ibb.co/5MyX4tv/glabdhaka.png",
      alt: "GLAB DHAKA",
      button: {
        text: "VISIT WEBSITE",
        link: "http://www.glabdhaka.edu.bd/",
      },
    },
    {
      index: 10,
      src: "https://i.ibb.co/VQ56kZS/jzsj.png",
      alt: "JZSJ",
      button: {
        text: "VISIT WEBSITE",
        link: "http://www.jzsj.edu.bd/",
      },
    },
  ];
  return (
    <section className="xl:mb-10" id="school-list">
      <div className="xl:mb-10">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Our Valuable Users_
        </h1>
      </div>
      <div className="flex items-center justify-center w-full h-full py-10 md:py-16 lg:py-20 xl:py-24 sm:py-8 px-5">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden overflow-x-hidden"
          isIntrinsicHeight={true}
          totalSlides={10}
          visibleSlides={5}
          step={1}
          infinite={true}
          isPlaying
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 outline-none bg-gray-400 ring-2 ring-offset-2 ring-gray-400 cursor-pointer p-2"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="lg:h-[350px] xl:h-[500px] flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {lists.map((list, i) => {
                    return (
                      <Slide key={i} index={list.index}>
                        <div className="flex flex-shrink-0 relative lg:h-[218px] lg:w-[218px] xl:h-[350px] xl:w-[345px] sm:w-auto bg-white rounded-xl drop-shadow-xl">
                          <img
                            src={list.src}
                            alt={list.alt}
                            className="w-full p-12"
                          />
                        </div>
                        <div className="absolute top-0 bottom-64 hover:bg-black hover:bg-opacity-20 cursor-pointer rounded-lg lg:h-[218px] lg:w-[218px] xl:w-[345px] xl:h-[350px]">
                          <Link
                            to={list.button.link}
                            target="_blank"
                            className="relative lg:left-[46px] lg:top-[100px] xl:left-[116px] xl:top-[160px] font-bold text-white px-2 py-3 bg-black hover:bg-opacity-70 rounded-lg opacity-0 hover:opacity-100"
                          >
                            {list.button.text}
                          </Link>
                        </div>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 outline-none bg-gray-400 ring-2 ring-offset-2 ring-gray-400 p-2"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden overflow-x-hidden"
          isIntrinsicHeight={true}
          totalSlides={10}
          visibleSlides={4}
          step={1}
          infinite={true}
          isPlaying
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 outline-none bg-gray-400 ring-2 ring-offset-2 ring-gray-400 cursor-pointer p-1"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-[400px] flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {lists.map((list, i) => {
                    return (
                      <Slide key={i} index={list.index}>
                        <Link to={list.button.link} target="_blank">
                          <div className="flex flex-shrink-0 relative sm:w-auto w-[230px] h-[230px] bg-white drop-shadow p-5 rounded-md">
                            <img src={list.src} alt={list.alt} />
                          </div>
                        </Link>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 outline-none bg-gray-400 ring-2 ring-offset-2 ring-gray-400 p-1"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden overflow-x-hidden"
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-4 outline-none bg-gray-400 ring-2 ring-offset-2 ring-gray-400 cursor-pointer p-1"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  {lists.map((list, i) => {
                    return (
                      <Slide key={i} index={list.index}>
                        <Link to={list.button.link} target="_blank">
                          <div className="flex flex-shrink-0 relative sm:w-auto max-w-[350px] h-[350px] p-10 bg-black bg-opacity-10">
                            <img
                              src={list.src}
                              alt={list.alt}
                              className="p-5"
                            />
                          </div>{" "}
                        </Link>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-4 outline-none bg-gray-400 ring-2 ring-offset-2 ring-gray-400 p-1"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </section>
  );
};

export default ServiceTakerList;
