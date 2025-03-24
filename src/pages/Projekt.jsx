import { useEffect, useState, useRef } from "react";

const Timeline = () => {
  const events = [
    { year: "2011", text: "Hedström Måleri grundas i Örebro." },
    { year: "2012", text: "Företaget expanderar i personal och tar sig an fler projekt." },
    { year: "2013", text: "Ett samarbete med Skanska inleds." },
    { year: "2015", text: "Fortsätter att växa och får återkommande kunder samt stora kontrakt." },
    { year: "2016", text: "Måleri av 70 nyproducerade lägenheter på Åkilsbacken i Lindesberg." },
    { year: "2017", text: "Myresjö beställer ut och invändig målning av 10 nyproducerade villor i Kumla." },
    { year: "2018", text: "Sörbyskolan och Ekeskolan målas om invädningt och utvändigt." },
    { year: "2019", text: "Almbyskolan målas i flera etapper." },
    { year: "2020", text: "Flera arbeten åt privatkunder." },
    { year: "2022", text: "Anton anställs som målare. " },
    { year: "2023", text: "BRF Mårans fönster målas om samt cykelskjul på innergården." },
    { year: "2024", text: "BRF Björkhagas cykelsjul och staket målas om." },
    { year: "2025 - pågående", text: "Inlett samarbete med HMB, målning av fjärrkylecentral i Universitetsjukhuset Örebro." },
  ];

  const [scrollHeight, setScrollHeight] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Beräkna hur långt du har scrollat
        const scrolled = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - windowHeight;

        // Beräkna procentuell scrollning och multiplicera med en faktor för att sakta ner
        const scrollPercentage = Math.min(Math.max(0, (scrolled / totalHeight) * 100), 100);
        const slowScrollPercentage = scrollPercentage * 0.5; // Minska hastigheten till hälften

        // Förskjut linjen lite före skrollningen
        const offsetPercentage = 5; // Förskjut linjen med 5% mer än scrollningen
        setScrollHeight(Math.min(slowScrollPercentage + offsetPercentage, 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section className="relative min-h-[40vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/hedstrombil.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">Projekt</h1>
      </section>

      <section className="w-3/4 md:w-5/5 lg:w-8/9 mx-auto text-center pt-[100px]">
        <h1 className="text-black text-4xl font-semibold text-center">Vi har stor erfarenhet av alla typer av projekt och du kan se ett utplock av dessa här</h1>
        <p className="text-[#333] text-[14px] font-light leading-[22px] p-[10px]">
          Företaget ägs och drivs av Peter Hedström som har över 26 års erfarenhet i branschen. 
        </p>

        <div className="relative flex flex-col items-center py-10">
          <h2 className="text-3xl font-bold mb-8">Utplock av projekt genom åren</h2>
          <div ref={timelineRef} className="relative w-full max-w-4xl">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2">
              <div
                className="absolute w-full bg-red-500 transition-all duration-500 sticky top-0" // Lägg till sticky och top-0
                style={{ height: `${scrollHeight}%` }}
              ></div>
            </div>
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center w-full mb-10 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className="w-1/2 p-4">
                  <h3 className="text-lg font-semibold text-gray-700">{event.year}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{event.text}</p>
                </div>
                <div className="w-8 h-8 bg-red-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
