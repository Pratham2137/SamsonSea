import icon from "../assets/HomePage/Icon1.svg";
import PropTypes from "prop-types";

const SubtitleContainer = ({className,text}) => {
    const classes = `flex gap-1 text-base px-2 py-1 bg-[#f4f4f4] w-fit ${
        className || ""
      }`;

  return (
    <div className={classes}>
        <img src={icon} height={15} width={15} alt="icon" />
        {text}
    </div>
  )
}

SubtitleContainer.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
}

export default SubtitleContainer