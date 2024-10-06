import PageNavigate from "./PageNavigate";
import SubtitleContainer from "./SubtitleContainer";
import ourCompany1 from "../assets/AboutUs/AboutUs-ourCompany.jpg";
import ourCompany2 from "../assets/AboutUs/AboutUs-ourCompany2.jpg";
import ourMission1 from "../assets/AboutUs/AboutUsMission.jpg";
import ourMission2 from "../assets/AboutUs/AboutUsMission2.jpg";
import dotPattern from "../assets/AboutUs/dotted.png";
import ourIndustry from "../assets/AboutUs/AboutUsIndustry.jpg";
import checkMark from "../assets/AboutUs/check-mark.png";
import ImageEffect from "./ImageEffect";

const AboutUs = () => {
  return (
    <div>
      <PageNavigate title="About Us" src="/" />
      <div className="flex justify-center items-center py-20  px-3">
        <div className="max-w-[1200px] min-w-[350px] flex flex-col gap-14 p-50">
          {/*Our History Section Start*/}
          <div className="flex lg:justify-around lg:flex-row flex-col gap-y-5">
            <div className="flex lg:w-fit md:justify-center w-full mb-10 lg:mb-0">
              <div className="relative pl-10 md:pl-0">
                <div className="relative">
                  <ImageEffect
                    src={ourCompany1}
                    alt="ourCompany1"
                    className="h-[320px] w-[220px] z-[1] flex justify-center items-center object-fill object-center"
                  />
                  <span className="absolute w-[80px] h-[280px] -right-[40px] top-[15px] bg-[--pageBlue] -z-[1]"></span>
                </div>
                <div className="absolute z-[5] top-[45px] -right-[100px]">
                  <ImageEffect
                    src={ourCompany2}
                    alt="ourCompany2"
                    className="h-[215px] w-[170px] p-3 bg-white object-fill"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] w-full flex flex-col gap-5">
              <div>
                <SubtitleContainer text="Our History" />
                <h4 className="text-4xl font-extrabold text-[#091242]">
                  Our Company
                </h4>
              </div>
              <p className="text-[#606060] text-[15px] text-justify ">
                Samson Sea Private Limited was established in 2022 by Mr. George
                Samson and Mrs. Julie Samson, with a vision to redefine customer
                satisfaction in the maritime industry. Rooted in a strong
                commitment to ethical values and individual growth, the company
                has swiftly built a reputation for excellence. Driven by
                innovation and a deep understanding of the industry, Samson Sea
                strives to deliver solutions that not only meet the needs of its
                clients but also exceed their expectations. With a steadfast
                focus on quality and integrity, Samson Sea continues to set new
                standards in maritime services, fostering long-lasting
                relationships with clients and partners worldwide.
              </p>
            </div>
          </div>
          {/*Our History Section End*/}

          {/*Our mission Section Start*/}
          <div className="flex justify-around items-center mb-10 lg:flex-row flex-col-reverse">
            <div className="lg:w-[50%] w-full flex flex-col gap-5">
              <div>
                <SubtitleContainer text="Mission" />
                <h4 className="text-4xl font-extrabold text-[--pageYellow]">
                  Trusted Maritime Services <br />{" "}
                  <span className="text-[#091242]">
                    {" "}
                    for Global Excellence{" "}
                  </span>
                </h4>
              </div>
              <p className="text-justify text-[#606060]">
                Our mission at Samson Sea Private Limited is to provide
                high-quality maritime services, ensuring safety, reliability,
                and operational excellence across all client needs.We are
                dedicated to fostering innovation, ethical practices, and
                customer-focused solutions, aiming to be the preferred partner
                in the global maritime industry.
              </p>
              <a
                href="#"
                className="px-4 py-3 bg-[--pageYellow] text-[#091242] w-fit rounded-lg font-semibold hover:bg-[#091242] hover:text-[--pageYellow] transition-all hover:shadow-md"
              >
                Discover More
              </a>
            </div>
            <div className="mb-10">
              <div className="py-10 mb-10 lg::mb-0">
                <div className="relative w-fit">
                  <div className="relative">
                    <ImageEffect
                      src={ourMission1}
                      alt="Mission1Image"
                      className="rounded-xl md:h-[300px] md:w-full w-[300px] z-[1] shadow-custom-dark3"
                      divClasses="overflow-hidden"
                    />
                    <span className="absolute -bottom-[70px] left-[20px] -z-[10]">
                      <img src={dotPattern} alt="Dot Pattern" />
                    </span>
                  </div>
                  <div className="absolute z-[5] md:-right-[30px] md:-bottom-[60px] -right-[20px] -bottom-[40px]">
                    <div className="relative">
                      <ImageEffect
                        src={ourMission2}
                        alt="Mission2Image"
                        className="md:h-[180px] md:w-[250px] h-[120px] w-[200px] rounded-2xl object-cover object-center shadow-custom-dark4"
                        divClasses="overflow-hidden"
                      />
                      <div className="md:h-[120px] md:w-[160px] h-[80px] w-[140px] bg-white absolute top-[20px] -left-[80px] rounded-xl shadow-custom-dark2 flex justify-center items-center z-50">
                        <p className="text-center text-base md:text-2xl font-semibold text-[#091242]">
                          <span className="md:text-4xl text-2xl text-[--pageYellow] font-bold">
                            50+
                          </span>
                          <br /> Projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Our Mission Section End*/}

          {/*Our Industry Section Start*/}
          <div className="flex lg:justify-around items-center mt-5 lg:flex-row flex-col justify-center ">
            <div className="overflow-hidden rounded-xl mb-10 lg:mb-0">
              <ImageEffect
                src={ourIndustry}
                alt="Our Industry"
                scale={true}
                className="h-[350px] w-[450px] rounded-xl object-fill"
              />
            </div>
            <div className="lg:w-[50%] w-full flex flex-col gap-4">
              <div className="text-[#091242]">
                <h4 className="text-4xl font-bold">
                  Our Industry Explicit <br />
                  <span className="text-[--pageYellow]">competence</span>
                </h4>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-justify text-[#606060]">
                  At Samson Sea Private Limited, we pride ourselves on
                  delivering exceptional maritime expertise through competence,
                  precision, and industry-leading solutions.
                </p>
                <div className="flex justify-between lg:w-[60%] w-full md:w-[50%]">
                  <div className="flex flex-col gap-3 ">
                    <div className="flex items-center gap-1 text-[#5B4640]">
                      <img src={checkMark} />
                      <p>Reliable</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#5B4640]">
                      <img src={checkMark} />
                      <p>Efficient</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#5B4640]">
                      <img src={checkMark} />
                      <p>Professional</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-1 text-[#5B4640]">
                      <img src={checkMark} />
                      <p>Safe</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#5B4640]">
                      <img src={checkMark} />
                      <p>Comprehensive</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#5B4640]">
                      <img src={checkMark} />
                      <p>Trustworthy</p>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="px-4 py-2 bg-[--pageYellow] text-[#091242] w-fit rounded-lg font-semibold hover:bg-[#091242] hover:text-[--pageYellow] transition-all hover:shadow-md mt-2"
                >
                  Contact Us Now!
                </a>
              </div>
            </div>
          </div>
          {/*Our Industry Section End*/}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
