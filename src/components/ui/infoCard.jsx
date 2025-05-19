// Komponent för att visa en bild och text i en kortlayout. Används i "Om" och "Tjanster".
const InfoCard = ({ image, title, description, link, linkText, largeImage, reverse }) => {
  // Container: flex-kolumn på mobil, flex-rad på ≥948px
  let containerClasses =
    "mt-[5%] flex flex-col px-4 min-[948px]:px-40 justify-between items-stretch ";

  if (reverse) {
    containerClasses += "min-[948px]:flex-row-reverse";
  } else {
    containerClasses += "min-[948px]:flex-row";
  }

  // Bild-klasser
  const baseImageClasses =
    "bg rounded-[10px] py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-center bg-cover flex items-center justify-center";

  let imageClasses = "";
  if (largeImage) {
    imageClasses =
      baseImageClasses +
      " basis-full min-[948px]:basis-[60%] min-h-[500px]";
  } else {
    imageClasses =
      baseImageClasses +
      " basis-full min-[948px]:basis-[40%] min-h-[400px] mb-5 min-[948px]:mb-0";
  }

  // Text-box
  const textBoxClasses =
    "basis-full min-[948px]:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center min-[948px]:text-left flex flex-col justify-center";

  // Länk-knapp
  let linkElement = null;
  if (link) {
    let buttonText = linkText || "Läs mer";
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
        <h3 className="text-[var(--rubrik-color)] text-center text-3xl min-[948px]:text-4xl 2xl:text-4xl font-semibold my-3">
          {title}
        </h3>
        <p className="whitespace-pre-line text-center text-[var(--text-color)] text-sm min-[948px]:text-base 2xl:text-base leading-relaxed">
          {description}
        </p>

        {linkElement}
      </div>
    </div>
  );
};

export default InfoCard;
