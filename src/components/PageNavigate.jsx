import bgImage from "../assets/ContactUs/Background-Image.png";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNavigate = ({ title, src }) => {
  return (
    <div className="flex justify-center items-center relative w-full">
      <img src={bgImage} alt="ship" className="relative h-56 lg:h-full w-full"></img>
      <div className="absolute text-white">
        <h4 className="text-5xl font-semibold mb-2 ">{title}</h4>
        <p className="flex gap-3 text-xl items-center">
          <Link to={src}>Home</Link>{" "}
          <FaArrowRight className="text-[--pageYellow]" /> {title}
        </p>
      </div>
    </div>
  );
};

// Corrected propTypes (lowercase 'p')
PageNavigate.propTypes = {
  title: PropTypes.string.isRequired, // Assuming title is required
  src: PropTypes.string.isRequired, // Assuming src is required
};

export default PageNavigate;
