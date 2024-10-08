import PageNavigate from "./PageNavigate";
import { Services } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Service = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    let servicePageAnimate = gsap.timeline({});

    servicePageAnimate.from(".serviceSectionText", {
      delay: 0.3,
      opacity: 0,
      y: "40px",
      duration: 0.4,
      stagger: { each: 0.4 },
    });
    servicePageAnimate.from(
      ".serviceSectionImg",
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        stagger: { each: 0.4 },
      },
      "<0.4"
    );
  });

  return (
    <div>
      <PageNavigate title="Service" src="/" />
      <div className="flex justify-center py-16 px-5">
        <div className="flex flex-col gap-10 justify-center max-w-[1200px] min-w-[350px]">
          {Services.map((service) => (
            <div
              key={service.id}
              className="flex justify-center gap-10 items-center flex-col-reverse md:odd:flex-row md:even:flex-row-reverse"
            >
              <div className="md:w-[40%] w-full flex flex-col gap-5">
                <div className="relative serviceSectionText">
                  <h4
                    className="text-[#091242] md:text-4xl text-3xl font-extrabold "
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
                  <span className="bg-[--pageYellow] absolute border-none h-[3px] w-[15%] -bottom-1 left-0 "></span>
                </div>
                <p className="text-[#606060] text-sm text-justify md:w-[90%] w-full serviceSectionText">
                  {service.desc}
                </p>
              </div>
              <div className="h-full flex justify-center items-center serviceSectionImg">
                <img
                  src={service.imgURL}
                  alt="Service 1"
                  className="md:h-[300px] md:w-[350px] h-[200px]"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
