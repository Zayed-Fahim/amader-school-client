import React from "react";
import FeaturesIconOne from "../SmallComponents/FeaturesIcons/FeaturesIconOne";
import FeaturesIconTwo from "../SmallComponents/FeaturesIcons/FeaturesIconTwo";
import FeaturesIconThree from "../SmallComponents/FeaturesIcons/FeaturesIconThree";
import FeaturesIconFour from "../SmallComponents/FeaturesIcons/FeaturesIconFour";
import FeaturesIconFive from "../SmallComponents/FeaturesIcons/FeaturesIconFive";
import FeaturesIconSix from "../SmallComponents/FeaturesIcons/FeaturesIconSix";
import FeaturesIconSeven from "../SmallComponents/FeaturesIcons/FeaturesIconSeven";
import FeaturesIconEight from "../SmallComponents/FeaturesIcons/FeaturesIconEight";

const Features = () => {
  const services = [
    {
      heading: "Students",
      icon: <FeaturesIconOne />,
      details:
        "With a separate profile for each student, it’s now easier than ever to access student particulars. From daily attendance to grades and teacher advice everything can be accessed under one platform.",
    },
    {
      heading: "Teachers",
      icon: <FeaturesIconTwo />,
      details:
        "Our teacher module is designed to save time and focus on what matters the most. From submitting grades to updating the syllabus everything is super easy with Amader School.",
    },
    {
      heading: "Library Management",
      icon: <FeaturesIconThree />,
      details:
        "Managing a library is not boring anymore. Thanks to our library module adding new books, issuing books, as well as can maintain all library activities are now easier than ever.",
    },
    {
      heading: "Parents",
      icon: <FeaturesIconFour />,
      details:
        "Using separate parents’ login it’s now easy to track all the activities of every child. Checking attendance, grades, notice everything can be assessed using Amader School.",
    },
    {
      heading: "Report Card & Transcript",
      icon: <FeaturesIconFive />,
      details:
        "Create transcripts, report cards with a click of a button and store them safely on the cloud. Using a secure database your all-important data are tucked away safely and can be assessed from anywhere & anytime.",
    },
    {
      heading: "Academic Setting",
      icon: <FeaturesIconSix />,
      details:
        "Think about the old ways of adding students to class or adding a whole class itself. Using Amader School you do not have to push the papers anymore. Everything can be done digitally now. You can add class, section, student, teacher, librarian, accountant, and so on through academic settings.",
    },
    {
      heading: "Account Management",
      icon: <FeaturesIconSeven />,
      details:
        "The accounts module can easily generate fees, as well as additional income or expense items. You can also collect fees from students and create financial documents while having one hand tied behind your back.",
    },
    {
      heading: "Attendance",
      icon: <FeaturesIconEight />,
      details:
        "Attendance: Amader School introduced a smart attendance system, that can be used to take attendance from both web interfaces and also smartphones.",
    },
  ];
  return (
    <section className="py-10 md:py-14 lg:pb-16 xl:pb-20" id="our-services">
      <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold mb-10 md:mb-14 lg:mb-24 xl:mb-24">
        <h1>Features of Amader School management system_</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-16 xl:gap-0 place-items-center">
        {services.map((service, i) => {
          return (
            <div
              className="w-full h-[320px] md:h-[400px] md:w-[400] lg:h-[390px] lg:w-[380px] xl:h-[460px] xl:w-[380px] flex flex-col items-center gap-3 md:gap-5 lg:gap-5 xl:gap-5 xl:pt-10 px-5 md:px-4 lg:px-6 xl:px-2 md:border-r md:border-l lg:border-r lg:border-l xl:border-r xl:border-l border-b border-black"
              key={i}
            >
              <div className="h-24 w-24 grid place-items-center rounded-[50%] bg-[#FFBE15] bg-opacity-50 hover:bg-[none]">
                {service.icon}
              </div>
              <div>
                <h1 className="text-center text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold">
                  {service.heading}
                </h1>
              </div>
              <div>
                <p className="xl:text-[18px] text-center">{service.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
