import { useEffect, useState, useRef } from "react";
import InfoCard from "/src/components/ui/InfoCard";

const Projekt = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [timeline, setTimeline] = useState([]); // Här lagras projekten
  const timelineRef = useRef(null);

  // För att få scrollhöjd att fungera korrekt, använd useRef för att referera till elementet och useEffect för att lyssna på scrollhändelsen.
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const scrolled = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.min(Math.max(0, (scrolled / totalHeight) * 100), 100);
    
        const delayFactor = 0.2; // Alltid långsammare scroll
        const slowScrollPercentage = scrollPercentage * delayFactor;
    
        // Endast lägg till offset om enheten är responsiv (< 768px)
        const isResponsive = window.innerWidth < 768;
        const offsetPercentage = isResponsive ? 5 : 0; 
    
        setScrollHeight(Math.min(slowScrollPercentage + offsetPercentage, 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Hämta projekten från projekt.json
    fetch("http://localhost:5000/api/get-projekt")

    .then((res) => res.json())
      .then((data) => setTimeline(data))
      .catch((err) => console.error("Kunde inte läsa in projekt.json", err));
  }, []);

  return (
    <>
      <header className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/antonOpeter.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">
          Våra projekt
        </h1>
      </header>

      <section className="w-3/4 md:w-5/5 lg:w-8/9 mx-auto text-center pt-[100px]">
        <h1 className="text-[var(--rubrik-color)] text-4xl font-semibold text-center">
          Vi har stor erfarenhet av alla typer av projekt och du kan se ett utplock av dessa här
        </h1>

        {/* Sektion: Tidslinje */}
        <p className="text-[var(--text-color)] text-[14px] font-light leading-[22px] p-[10px]">
          Företaget ägs och drivs av Peter Hedström som har över 26 års erfarenhet i branschen.
        </p>

        <div id="target-section" className="relative flex flex-col items-center py-10">
          <div ref={timelineRef} className="relative w-full max-w-4xl">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2">
              <div
                className="absolute w-full bg-red-500 transition-all duration-500 sticky top-0"
                style={{ height: `${scrollHeight}%` }}
              ></div>
            </div>
            {timeline.map((event, index) => (
              <div key={index} className={`relative flex items-center w-full mb-10 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className="w-1/2 p-4">
                  <h3 className="text-lg font-semibold text-[var(--rubrik-color)]">{event.year}</h3>
                  <p className="text-[var(--text-color)] text-sm md:text-base">{event.text}</p>
                </div>
                <div className="w-8 h-8 bg-red-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Exempel på projektbilder med beskrivning */}
        <div className="mt-10">
          {timeline.length > 0 && (
            <div className="mt-[5%] flex flex-col md:flex-row px-4 md:px-40 justify-between items-stretch">
              {timeline.map((project, index) => (
                <div key={index} className="basis-full md:basis-[40%] min-h-[400px] h-full bg-[url('src/assets/bilder/spackling.webp')] rounded-[10px] mb-5 md:mb-0 py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-center bg-cover flex items-center justify-center">
                  <div className="text-white text-center p-5 bg-black bg-opacity-50 w-full rounded-md">
                    <h3 className="text-xl font-semibold">{project.year}</h3>
                    <p>{project.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>
    </>
  );
};

export default Projekt;
