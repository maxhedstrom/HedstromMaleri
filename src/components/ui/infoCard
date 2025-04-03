import React from "react";

export const Card = ({title, description, image}) => {
  return (
    <div className="mt-[5%] flex flex-col md:flex-row px-4 md:px-40 justify-between items-stretch">
    {image && (
      <div
        className="basis-full md:basis-[40%] min-h-[400px] sm:h-auto aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/3] rounded-[10px] mb-5 md:mb-0 py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-left bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    )}

    <div className="basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center">
      <h3 className="text-[var(--rubrik-color)] text-3xl md:text-3xl 2xl:text-4xl font-semibold my-3">
        {title}
      </h3>
      <p className="text-[var(--text-color)] text-sm md:text-[14px] 2xl:text-base leading-relaxed">
        {description}
      </p>
    </div>
  </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center ${className}`}>{children}</div>;
};
