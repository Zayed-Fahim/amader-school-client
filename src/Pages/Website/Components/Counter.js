import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Counter = () => {
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div
      className="bg-[#FFBE15] bg-opacity-80 lg:h-[400px]  lg:flex-row flex-col gap-5 py-5 lg:py-0 lg:gap-16 grid md:grid-cols-2 
    lg:grid-cols-4 xl:grid-cols-4 place-items-center xl:gap-0 xl:px-20"
    >
      <div className="border-[6px] md:border-[6px] lg:border-8 xl:border-8 border-white h-[140px] w-[140px] md:h-[170px] md:w-[170px] lg:h-[200px] lg:w-[200px]  xl:h-[200px] xl:w-[200px] rounded-[50%] flex justify-center items-center flex-col">
        <CountUp
          className="text-white text-4xl md:text-4xl xl:text-5xl lg:text-5xl font-bold text-center"
          end={4}
          enableScrollSpy
        ></CountUp>

        <div className="text-sm lg:text-xl xl:text-xl text-white font-bold text-center p-3">
          YEARS OF EXPERIENCE
        </div>
      </div>

      <div className="border-[6px] md:border-[6px] lg:border-8 xl:border-8 border-white h-[140px] w-[140px] md:h-[170px] md:w-[170px] lg:h-[200px] lg:w-[200px]  xl:h-[200px] xl:w-[200px] rounded-[50%] flex justify-center items-center flex-col">
        <CountUp
          className="text-white text-4xl md:text-4xl xl:text-5xl lg:text-5xl font-bold text-center"
          end={20}
          enableScrollSpy
        ></CountUp>

        <div className="text-sm lg:text-xl xl:text-xl text-white font-bold text-center p-3">
          SCHOOLS
        </div>
      </div>

      <div className="border-[6px] md:border-[6px] lg:border-8 xl:border-8 border-white h-[140px] w-[140px] md:h-[170px] md:w-[170px] lg:h-[200px] lg:w-[200px]  xl:h-[200px] xl:w-[200px] rounded-[50%] flex justify-center items-center flex-col">
        <CountUp
          className="text-white text-4xl md:text-4xl xl:text-5xl lg:text-5xl font-bold text-center"
          end={2000}
          enableScrollSpy
        ></CountUp>

        <div className="text-sm lg:text-xl xl:text-xl text-white font-bold text-center p-3">
          TEACHERS
        </div>
      </div>

      <div className="border-[6px] md:border-[6px] lg:border-8 xl:border-8 border-white h-[140px] w-[140px] md:h-[170px] md:w-[170px] lg:h-[200px] lg:w-[200px]  xl:h-[200px] xl:w-[200px] rounded-[50%] flex justify-center items-center flex-col">
        <CountUp
          className="text-white text-4xl md:text-4xl xl:text-5xl lg:text-5xl font-bold text-center"
          end={6000}
          enableScrollSpy
        ></CountUp>

        <div className="text-sm lg:text-xl xl:text-xl text-white font-bold text-center p-3">
          STUDENTS
        </div>
      </div>
    </div>
  );
};

export default Counter;
