import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import footerImg from "../assets/Footer/Footer.png";
import samsonseaLogo from "../assets/Footer/white png.png";
import emailIcon from "../assets/Footer/footerMessage.png";
import callIcon from "../assets/Footer/footerCall.png";
import { navigationFooter } from "../constants";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  // Set istext to false if the current route is the home page ('/')
  const istext = location.pathname !== "/";

  return (
    <div id="footer">
      <div className="relative h-[250px] flex justify-center items-center">
        <img
          src={footerImg}
          alt="footer Image"
          className="w-full h-full z-[-1]"
        />
        {istext && ( // Only display the text if istext is true
          <p className="lg:text-5xl text-3xl text-white font-semibold absolute z-2">
            Let&apos;s Sail Together
          </p>
        )}
      </div>
      <div className="bg-[#091242] text-white flex gap-y-3 flex-col items-center py-5 overflow-hidden px-10">
        <div className="flex flex-col lg:flex-row justify-center px-1 lg:px-8 gap-y-10 lg:justify-between gap-x-5 max-w-[1200px] min-w-[350px] mb-5">
          <div className="flex flex-col gap-5 lg:w-[35%] w-full">
            <h4 className="self-center lg:self-start">
              <img
                src={samsonseaLogo}
                alt="SamsonSea"
                className="h-[180px] lg:h-[90px] lg:w-[300px] w-[400px]"
              ></img>
            </h4>
            <p className="w-[90%] lg:w-full mb-3">
              Our team is ready to assist you with all your maritime needs and
              provide prompt, professional support.
            </p>
            <div className="flex gap-3 items-center">
              <img src={emailIcon}></img>
              <div className="flex flex-col">
                <p>Email</p>
                <a href="mailto:smsnsea@gmail.com">smsnsea@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img src={callIcon}></img>
              <div className="flex flex-col">
                <p>Call Us</p>
                <div className="flex gap-1">
                  <a href="tel:9870445480">9870445480</a>
                  <p>/</p>
                  <a href="tel:7768825296">7768825296</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-10 lg:mb-[80px]">Pages</h4>
            <div className="flex flex-col gap-y-3">
              {navigationFooter.map((navItems) => (
                <Link
                  to={navItems.url}
                  key={navItems.id}
                  className={`relative group`}
                >
                  <span
                    className={`absolute top-0 left-0 h-full bg-[--pageYellow] transition-all duration-300 group-hover:w-[2px]`}
                  ></span>
                  <div className="hover:translate-x-2 transition-transform ">
                    {navItems.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="self-center lg:self-start">
            <h4 className="text-2xl font-semibold lg:mb-[80px] mb-5 text-center lg:text-start">
              Subscribe
            </h4>
            <input
              type="email"
              placeholder="Email here*"
              className="bg-transparent border border-solid border-[#4e5683] px-5 py-3 mb-5 max-w-[400px] min-w-[350px]"
            ></input>
            <div className="flex items-center gap-4 w-full">
              <a
                href="#"
                className="flex items-center gap-2 bg-[--pageYellow] w-fit font-semibold px-3 py-2 hover:text-[--pageBlue] transition rounded"
              >
                Submit <PiPaperPlaneRightBold className="text-xl font-bold" />
              </a>
              <a href="https://www.linkedin.com/in/samson-sea-612709332/?originalSubdomain=in">
                <FaLinkedin className="text-xl hover:text-[--pageYellow] transition " />
              </a>
              <a
                className="text-xl hover:text-[--pageYellow] transition"
                href="https://www.instagram.com/smsn.sea"
              >
                <FaInstagram />
              </a>
              <a href="https://m.facebook.com/61566797021390/">
                <FaFacebook className="text-xl hover:text-[--pageYellow] transition" />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white border-none lg:w-[120%] w-full" />
        <div>
          Copyright © Samson Sea Private Limited | Designed & Developed by
          Synergy Media
        </div>
      </div>
    </div>
  );
};

// Optional prop validation, not needed here since we're not passing props anymore
Footer.propTypes = {
  istext: PropTypes.bool,
};

export default Footer;
