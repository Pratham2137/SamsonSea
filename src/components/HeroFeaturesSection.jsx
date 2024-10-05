import { Link } from "react-router-dom";
import Pattern from "../assets/HomePage/Pattern.png";
import { homeFeatureSection } from "../constants";

const HeroFeaturesSection = () => {
  return (
    <div className="p-6 h-full lg:h-screen 2xl:h-[60vh] w-full overflow-hidden">
      <div
        className="w-full h-full flex justify-center items-center lg:bg-contain lg:bg-center lg:bg-no-repeat bg-none"
        style={{
          backgroundImage:
            window.innerWidth >= 1024 ? `url(${Pattern})` : "none",
        }}
      >
        <div className="max-w-[1200px] min-w-[350px] flex flex-col lg:flex-row justify-center gap-10 px-5">
          <div className="flex justify-center w-full h-full flex-col gap-2">
            <p className="text-[--pageYellow] uppercase tracking-wider text-lg font-bold">
              Why Us ?
            </p>
            <h4 className="text-[#111C54] font-bold text-6xl mb-8">
              Proven Expertise <br /> and Reliability
            </h4>
            <p className="text-[#7e7e7e] text-lg w-[85%] mb-10 lg:text-justify text-left">
              Samson Sea offers unparalleled expertise and customized maritime
              solutions. Our dedicated team ensures efficient and reliable
              service, tailored to meet your specific needs.
            </p>
            <Link
              to="#"
              className="w-fit py-2 px-4 rounded-3xl bg-[--pageYellow] font-semibold text-base text-white transition-all hover:text-[--pageBlue] hover:shadow-md"
            >
              Read More
            </Link>
          </div>
          <div className=" flex flex-col gap-y-6">
            {homeFeatureSection.map((item) => (
              <div
                key={item.id}
                className="bg-white py-3 px-4 xl:hover:shadow-xl  group rounded relative transition-all duration-300"
              >
                <h4 className="text-[--pageBlue] font-bold text-lg mb-3">
                  {item.title}
                </h4>
                <p className="text-[#606060] lg:text-justify text-left">{item.desc}</p>
                <span className=" absolute h-full bg-[--pageYellow] group-hover:w-[3px] top-0 left-0"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFeaturesSection;
