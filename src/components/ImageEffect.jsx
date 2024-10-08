import PropTypes from "prop-types";

const ImageEffect = ({ className, divClasses, src, alt, scale }) => {
  const classes = `relative z-[1] object-cover transition-transform duration-500 ease-out overflow-hidden ${
    className || ""
  }`;

  const classes2 = `lg:w-full h-full flex items-center justify-center relative imageEffect ${
    scale ? "imageEffect2" : ""
  } overflow-hidden ${divClasses || ""}`;

  return (
    <div className={classes2}>
      <img src={src} alt={alt} className={classes} loading="lazy" />
    </div>
  );
};

ImageEffect.propTypes = {
  className: PropTypes.string,
  divClasses: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  scale: PropTypes.bool,
};

export default ImageEffect;
