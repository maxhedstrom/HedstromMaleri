import { useEffect, useRef, useState } from "react";
import fallbackTimeline from "../data/fallbacktimeline";
import altLogo from "/src/assets/bilder/altLogo.jpg";
import { getUrl } from "../utils/api";
import navbar from "../assets/bilder/projekt.jpg";

const Projekt = () => {
  const [timeline, setTimeline] = useState([]);
  const timelineRef = useRef(null);
  const redLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && redLineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offsetTop = rect.top + window.scrollY;
        const visibleHeight = rect.height;
        const scrollY = window.scrollY;
        const scrollProgress = (scrollY - offsetTop + windowHeight * 0.4) / visibleHeight;

        const speedFactor = 1.0; // gör att linjen växer före skrollen
        const newHeight = Math.min(Math.max(0, scrollProgress * 100 * speedFactor), 100);
        redLineRef.current.style.height = `${newHeight}%`;
      }
    };

    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScroll);
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, []);

  useEffect(() => {
    fetch(getUrl("/api/get-projekt"))
      .then((res) => {
        if (!res.ok) throw new Error("Kunde inte hämta från backend");
        return res.json();
      })
      .then((data) => setTimeline(data))
      .catch((err) => {
        console.error("Använder fallback:", err);
        setTimeline(fallbackTimeline);
      });
  }, []);

  return (
    <>
      <header
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url(${navbar})`,
        }}
        className="relative min-h-[60vh] w-full bg-no-repeat bg-top md:bg-center bg-cover flex items-center justify-center px-4 text-center"
      >
        <h1 className="text-white text-3xl md:text-4xl font-semibold max-w-2xl">Våra projekt</h1>
      </header>

      <section className="w-3/4 md:w-5/5 lg:w-8/9 mx-auto text-center pt-[100px]">
        <h1 className="text-[var(--rubrik-color)] text-4xl font-semibold text-center">
          Här kan du läsa om vår stolta historia och se ett urplock av våra projekt genom åren.
        </h1>

        <p className="text-[var(--text-color)] text-[14px] font-light leading-[22px] p-[10px]">
          Företaget ägs och drivs av Peter Hedström som har över 35 års erfarenhet i branschen.
        </p>

        <div id="target-section" className="relative flex flex-col items-center py-10">
          <div ref={timelineRef} className="relative w-full max-w-4xl">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2">
              <div
                ref={redLineRef}
                className="absolute w-full bg-red-500 transition-all duration-300 ease-out top-0"
                style={{ height: "0%" }}
              ></div>
            </div>

            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center w-full mb-10 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-3/4 md:w-1/2">
                  <h3
                    className={`text-lg font-semibold text-[var(--rubrik-color)] mb-2 ${
                      index % 2 === 0 ? "mr-33 md:mr-10" : "ml-33 md:ml-10"
                    }`}
                  >
                    {event.year}
                  </h3>
                  <p
                    className={`text-[var(--text-color)] text-sm md:text-base mb-4 ${
                      index % 2 === 0 ? "mr-33 md:mr-10" : "ml-33 md:ml-10"
                    }`}
                  >
                    {event.text}
                  </p>
                </div>
                <img
                  src={altLogo}
                  alt="Tidslinje ikon"
                  className="w-20 h-20 rounded-full absolute left-1/2 transform -translate-x-1/2 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projekt;
