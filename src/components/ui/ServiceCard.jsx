// src/components/ui/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="basis-[31%] bg-[var(--rutor-color)] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
      <h3 className="text-[var(--rubrik-color)] text-center font-semibold my-[10px]">
        {title}
      </h3>
      <p className="text-[var(--text-color)]">{description}</p>
    </div>
  );
};

export default ServiceCard;