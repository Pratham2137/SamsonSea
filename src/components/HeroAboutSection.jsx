import { Link } from "react-router-dom";
import icon from "../assets/HomePage/Icon1.svg";
import tick from "../assets/HomePage/Tick.png";
import ship from "../assets/HomePage/HomeAboutUs.png";
import ImageEffect from "./ImageEffect";

const HeroAboutSection = () => {
  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row py-9 gap-y-5 justify-between gap-x-10 max-w-[1200px] min-w-[350px] items-center w-full px-5">
        <div className=" flex flex-col md:items-center lg:items-start ">
          <div className="flex flex-col md:items-center lg:items-start">
            <p className="flex gap-1 text-base px-2 py-1 bg-[#f4f4f4] w-fit">
              <img src={icon} height={15} width={15} alt="icon" />
              Welcome to SamsonSea
            </p>
            <h1 className="text-5xl font-bold mb-5 text-[#1C2752] md:text-center lg:text-left">
              We’re Committed <br /> to Quality
            </h1>
            <p className="text-[15px] text-[#606060] w-[80%] mb-5 lg:text-left">
              Our team combines deep industry knowledge with tailored services,
              ensuring efficient and reliable operations across all aspects of
              ocean transportation. Whether it’s chartering, vessel management,
              or ship inspections, we are dedicated to meeting your unique needs
              and exceeding expectations every step of the way.
            </p>
            <div className="flex flex-col gap-5 mb-5 text-[#1C2752] font-semibold">
              <div className="flex gap-10">
                <div className="flex justify-center items-center gap-2">
                  <img src={tick} width={20} height={20} alt="tick" />
                  <p>Trustworthy</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img src={tick} width={20} height={20} alt="tick" />
                  <p>Reliable</p>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex justify-center items-center gap-2">
                  <img src={tick} width={20} height={20} alt="tick" />
                  <p>Professional</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img src={tick} width={20} height={20} alt="tick" />
                  <p>20 Years Of Experience</p>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="#"
            className="bg-[--pageYellow] w-fit py-2 px-4 font-semibold text-[18px] text-[--pageBlue] my-3 hover:bg-[--pageBlue] hover:text-[--pageYellow] transition-all duration-300 active:bg-[#2d408a] hover:shadow-2xl"
          >
            More About Us
          </Link>
        </div>
        <ImageEffect
          src={ship}
          alt="ship"
          className={`min-w-[300px] max-w-auto h-[450px]`}
        />
      </div>
    </div>
  );
};

export default HeroAboutSection;
