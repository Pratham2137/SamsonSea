import { Link } from "react-router-dom";
import serviceSectionImage from "../assets/HomePage/ServiceSection.png";
import { heroServiceSection } from "../constants";
import ImageEffect from "./ImageEffect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroServiceSection = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    let serviceAnimate = gsap.timeline({
      scrollTrigger: {
        trigger: ".serviceContainer",
        start: "top bottom",
        end: "top 70%",
        // play pause resume reset restart complete reverse none
        toggleActions: "none play none reset",
      },
    });

    serviceAnimate.from(".serviceContainer", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power2",
      stagger: 0.4,
    });
    serviceAnimate.from(
      ".serviceBtn",
      {
        opacity: 0,
        y: "20px",
        duration: 0.5,
      },
      "<0.5"
    );
  });

  return (
    <div
      className="w-full py-7 flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${serviceSectionImage})`,
      }}
    >
      <div
        className=" h-full py-5 flex flex-col justify-center items-center gap-10 max-w-[1200px] min-w-[350px]" // Add a height or necessary classes
      >
        <h1 className="font-semibold text-white text-4xl relative group">
          Our Services
          <span
            className={`absolute left-1/2 -translate-x-1/2 bottom-[-5px] h-[3px] bg-[--pageYellow] w-[60%] `}
          ></span>
        </h1>
        <div className="flex gap-y-4 gap-x-4 flex-col lg:flex-row justify-center items-center h-full w-full">
          {heroServiceSection.map((item) => (
            <div
              key={item.id}
              className="bg-white w-[300px] lg:w-[350px] hover:shadow-2xl rounded overflow-hidden serviceContainer"
            >
              <div>
                <ImageEffect
                  src={item.imgURL}
                  alt={item.imgAlt}
                  className="h-[200px] w-full p-0 m-0"
                  scale={true}
                />
              </div>
              <div className="flex flex-col py-2 px-4 gap-y-4 ">
                <h3 className="text-xl font-semibold text-[#091242]">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#606060] lg:text-justify ">
                  {item.desc}
                </p>
                <Link
                  to={item.btnSrc}
                  className="hover:text-[#091242] font-semibold w-fit"
                >
                  {item.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="serviceBtn">
          <Link
            className="bg-white text-[#091242] rounded hover:bg-[--pageYellow] hover:text-white font-semibold text-lg py-2 px-4 active:scale-[0.96]"
            to="/service"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroServiceSection;
