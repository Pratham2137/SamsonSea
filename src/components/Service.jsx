import PageNavigate from "./PageNavigate";
import { Services } from "../constants";

const Service = () => {
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
                <div className="relative">
                  <h4
                    className="text-[#091242] md:text-4xl text-3xl font-extrabold"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
                  <span className="bg-[--pageYellow] absolute border-none h-[3px] w-[15%] -bottom-1 left-0 "></span>
                </div>
                <p className="text-[#606060] text-sm text-justify md:w-[90%] w-full">{service.desc}</p>
              </div>
              <div className="h-full flex justify-center items-center">
                <img
                  src={service.imgURL}
                  alt="Service 1"
                  className="md:h-[300px] md:w-[350px] h-[200px]"
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
