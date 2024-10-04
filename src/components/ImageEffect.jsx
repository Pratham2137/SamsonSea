/* eslint-disable react/prop-types */

const ImageEffect = ({ className, src, alt }) => {
  const classes = `relative z-[1] object-cover transition-transform duration-500 ease-out overflow-hidden ${
    className || ""
  }`;

  return (
    <div className="lg:w-full h-full flex items-center justify-center relative imageEffect overflow-hidden">
      <img src={src} alt={alt} className={classes} />
    </div>
  );
};

export default ImageEffect;
