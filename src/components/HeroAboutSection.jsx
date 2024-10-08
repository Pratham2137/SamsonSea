import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import tick from "../assets/HomePage/Tick.png";
import ship from "../assets/HomePage/HomeAboutUs.png";
import ImageEffect from "./ImageEffect";
import SubtitleContainer from "./SubtitleContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// HeroAboutSection component starts here
const HeroAboutSection = () => {
  // Register GSAP plugin for scroll-based animations
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // Animation timeline for text and image when scrolling
  useGSAP(() => {
    let animateTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animateText",
        start: "top bottom",
        end: "top 70%",
        // play pause resume reset restart complete reverse none
        toggleActions: "none play none reset",
      },
    });

    // Text animation - fades in and slides up
    animateTl.from(".animateText", {
      opacity: 0,
      y: "40px",
      duration: 0.5,
      stagger: { each: 0.1 },
    });

    // Image animation - fades in and scales up
    animateTl.from(
      "#heroAboutImg",
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
      },
      "<0.3"
    );
  });

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row py-9 gap-y-5 justify-between max-w-[1200px] min-w-[350px] items-center w-full px-10">
        {/* Text content section */}
        <div className="flex flex-col md:items-center lg:items-start lg:w-[50%]">
          <div className="animateText flex flex-col md:items-center lg:items-start">
            {/* Subtitle and Main Heading */}
            <SubtitleContainer text="Welcome to SamsonSea" className="mb-1" />
            <h1 className="animateText text-5xl font-bold mb-5 text-[#1C2752] md:text-center lg:text-left">
              We’re Committed <br /> to Quality
            </h1>

            {/* Description paragraph */}
            <p className="animateText text-[15px] text-[#606060] w-full mb-5 md:text-center lg:text-justify text-left">
              Our team combines deep industry knowledge with tailored services,
              ensuring efficient and reliable operations across all aspects of
              ocean transportation. Whether it’s chartering, vessel management,
              or ship inspections, we are dedicated to meeting your unique needs
              and exceeding expectations every step of the way.
            </p>

            {/* Key points with tick icons */}
            <div className="animateText flex gap-5 mb-5 text-[#1C2752] font-semibold">
              <div className="flex flex-col gap-10">
                <div className="flex justify-center items-center gap-2">
                  <img src={tick} width={20} height={20} alt="tick" />
                  <p>Trustworthy</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} width={20} height={20} alt="tick" />
                  <p>Reliable</p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex justify-center items-center gap-2">
                  <img src={tick} width={20} height={20} alt="tick" />
                  <p>Professional</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img src={tick} width={20} height={20} alt="tick" />
                  <p>50+ Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Link to "More About Us" */}
          <div className="animateText">
            <Link
              to="/about-us"
              className="bg-[--pageYellow] w-fit py-2 px-4 font-semibold text-[18px] text-[--pageBlue] my-3 hover:bg-[--pageBlue] hover:text-[--pageYellow] transition-all duration-300 hover:shadow-2xl active:scale-[0.95]"
            >
              More About Us
            </Link>
          </div>
        </div>

        {/* Image section */}
        <div className="lg:w-auto md:w-full" id="heroAboutImg">
          <ImageEffect
            src={ship}
            alt="ship"
            className={`lg:min-w-[300px] lg:max-w-auto w-full h-[450px]`}
            scale={true}
          />
        </div>
      </div>
    </div>
  );
};
// HeroAboutSection component ends here

export default HeroAboutSection;
