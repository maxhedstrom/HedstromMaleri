import React from "react";

const InfoCard = ({ image, title, description, link, linkText, largeImage, reverse }) => {
  // Container-klass med flex layout
  let containerClasses = "mt-[5%] flex flex-col px-4 md:px-40 justify-between items-stretch ";
  // Om reverse är true, använd md:flex-row-reverse - lägger bilden på höger istället för vänster som är default, annars md:flex-row
  if (reverse) {
    containerClasses += "md:flex-row-reverse";
  } else {
    containerClasses += "md:flex-row";
  }

  // Gemensamma klasser för bild-delen - rundade hörn, padding och hover-effekt och flexbox för att centrera bilden
  const baseImageClasses =
    "bg rounded-[10px] py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-center bg-cover flex items-center justify-center";

  // Bild-klasser beroende på largeImage - om true, ta upp 60% av bredden, annars 40%
  let imageClasses = "";
  if (largeImage) {
    imageClasses = baseImageClasses + " basis-full md:basis-[60%] min-h-[500px]";
  } else {
    imageClasses = baseImageClasses + " basis-full md:basis-[40%] min-h-[400px] mb-5 md:mb-0";
  }
  // <div className="basis-full md:basis-[40%] min-h-[400px] sm:h-auto aspect-[3/4] md:aspect-[2/3] lg:aspect-[4/3] bg-[url('src/assets/bilder/hedstrombil2.jpg')] rounded-[10px] mb-5 md:mb-0 py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-left bg-cover flex items-center justify-center"></div>
  // <div className="basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center">

  // Klasser för text-delen - rundade hörn, padding och hover-effekt och flexbox för att centrera texten
  const textBoxClasses =
    "basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center";

  // Hantering av länk och länktext - om länk finns, skapa en knapp med länktext annars är default "Läs mer"
  let linkElement = null;
  if (link) {
    let buttonText = "Läs mer";
    if (linkText) {
      buttonText = linkText;
    }
    linkElement = (
      <div className="mt-5 text-center">
        <a
          href={link}
          className="inline-block text-black border border-black py-3 px-[34px] text-[13px] bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-500"
        >
          {buttonText}
        </a>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      {/* Bildsektionen */}
      <div className={imageClasses} style={{ backgroundImage: `url(${image})` }}></div>

      {/* Textsektionen */}
      <div className={textBoxClasses}>
        <h3 className="text-[var(--rubrik-color)] text-center text-3xl md:text-4xl 2xl:text-4xl font-semibold my-3">
          {title}
        </h3>
        <p className="whitespace-pre-line text-center text-[var(--text-color)] text-sm md:text-base 2xl:text-base leading-relaxed">
          {description}
        </p>

        {linkElement} 
      </div>
    </div>
  );
};

export default InfoCard;
