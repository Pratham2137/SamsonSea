import PageNavigate from "./PageNavigate";
import { Services } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceImg1 from "../assets/Serivce/01.png";

// Service component starts here
const Service = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // Animations for the service sections
  useGSAP(() => {
    let servicePageAnimate1 = gsap.timeline({});

    servicePageAnimate1.from(".serviceSectionText1", {
      delay: 0.4,
      opacity: 0,
      y: "40px",
      duration: 0.4,
      stagger: { each: 0.4 },
    });
    servicePageAnimate1.from(
      ".serviceSectionImg1",
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        stagger: { each: 0.4 },
      },
      "<0.4"
    );

    let servicePageAnimate = gsap.timeline({
      scrollTrigger: {
        trigger: ".serviceContainer",
        start: "top 80%",
        end: "bottom 95%",
        markers: true,
        scrub: 4,
        // play pause resume reset restart complete reverse none
        // toggleActions: "none play none reset",
      },
    });

    // Animate the text and images on scroll
    servicePageAnimate.from(".serviceSectionText", {
      delay: 0.3,
      opacity: 0,
      y: "40px",
      duration: 0.4,
      stagger: { each: 0.3 },
    });
    servicePageAnimate.from(
      ".serviceSectionImg",
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        stagger: { each: 0.5},
      },
      "<0.4"
    );
  });

  return (
    <div>
      {/* Page Navigation Component */}
      <PageNavigate title="Service" src="/" />

      {/* Services Section */}
      <div className="flex justify-center py-16 px-5">
        <div className="flex flex-col gap-10 justify-center max-w-[1200px] min-w-[350px]">
          <div className="flex justify-center gap-10 items-center flex-col-reverse md:odd:flex-row md:even:flex-row-reverse">
            {/* Service Text Section */}
            <div className="md:w-[40%] w-full flex flex-col gap-5">
              <div className="relative serviceSectionText1">
                <h4 className="text-[#091242] md:text-4xl text-3xl font-extrabold">
                  Ship Management &<br />
                  Consultancy Services
                </h4>
                <span className="bg-[--pageYellow] absolute border-none h-[3px] w-[15%] -bottom-1 left-0 "></span>
              </div>
              <p className="text-[#606060] text-sm text-justify md:w-[90%] w-full serviceSectionText1">
                Samson Sea offers comprehensive ship management solutions,
                including crew management, technical services, compliance, and
                safety management. Our consultancy services provide expert
                advice to ship owners and operators, helping them navigate
                complex regulatory environments and optimize their operations
              </p>
            </div>

            {/* Service Image Section */}
            <div className="h-full flex justify-center items-center serviceSectionImg1">
              <img
                src={serviceImg1}
                alt="Ship Management & Consultancy Services"
                className="md:h-[300px] md:w-[350px] h-[200px]"
                loading="lazy"
              />
            </div>
          </div>
          {/* Loop through services array */}
          <div className="serviceContainer">
            {Services.map((service) => (
              <div
                key={service.id}
                className="flex justify-center gap-10 items-center flex-col-reverse md:odd:flex-row-reverse md:even:flex-row"
              >
                {/* Service Text Section */}
                <div className="md:w-[40%] w-full flex flex-col gap-5">
                  <div className="relative serviceSectionText">
                    <h4
                      className="text-[#091242] md:text-4xl text-3xl font-extrabold"
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                    <span className="bg-[--pageYellow] absolute border-none h-[3px] w-[15%] -bottom-1 left-0 "></span>
                  </div>
                  <p className="text-[#606060] text-sm text-justify md:w-[90%] w-full serviceSectionText">
                    {service.desc}
                  </p>
                </div>

                {/* Service Image Section */}
                <div className="h-full flex justify-center items-center serviceSectionImg">
                  <img
                    src={service.imgURL}
                    alt={service.title}
                    className="md:h-[300px] md:w-[350px] h-[200px]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// Service component ends here

export default Service;
