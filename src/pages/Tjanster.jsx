import React from "react";
import "../styles/hem.css";

function Tjanster() {
  return (
    <div>
      {/* Text som visas i navbaren */}
      <section className="relative min-h-[30vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/hedstrombil.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">Tjänster</h1>
      </section>

      {/* Introduktion till sidan med tjänster */}
      <section className="w-3/4 md:w-5/5 lg:w-8/9 mx-auto text-center pt-[100px]">
        <h1 className="text-black text-4xl font-semibold text-center">Vi erbjuder en rad olika tjänster som passar dina behov!</h1>
        <p className="text-[#333] text-[14px] font-light leading-[22px] p-[10px]">
          Vi erbjuder ett antal olika tjänster
        </p>

        {/* Presentation av tjänster med bilder och tillhörande text */}

        {/* Spackling */}
        <div className="mt-[5%] flex flex-col md:flex-row px-4 md:px-40 justify-between items-stretch">
          {/* Bildcontainer */}
          <div className="basis-full md:basis-[40%] min-h-[400px] h-full bg-[url('src/assets/bilder/spackling.jpg')] rounded-[10px] mb-5 md:mb-0 py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-center bg-cover flex items-center justify-center">
          </div>

          {/* Textcontainer */}
          <div className="basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold my-3">Spackling</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Spackling är en avgörande del av varje måleriprojekt och grunden till ett perfekt slutresultat.
              Genom att fylla i sprickor, hål och ojämnheter skapas en slät och jämn yta som ger färg och tapet bästa möjliga fäste.
              Utan spackling riskerar ytan att se ojämn och sliten ut, och färgen kan fästa dåligt, vilket leder till ett mindre hållbart resultat.
              <br /><br />
              En välspacklad vägg ger inte bara en snyggare finish, utan gör också att målningen håller längre och ser professionell ut. 
              Oavsett om det handlar om en renovering eller ett nybygge är spackling en investering i kvalitet, hållbarhet och ett vackert hem.
            </p>
            <div className="mt-5">
              <a
                href="/kontakt"
                className="inline-block text-black border border-black py-3 px-[34px] text-[13px] bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-500">
                Kontakta oss för en offert!
              </a>  
            </div>
          </div>
        </div>

        {/* Duplicate Spackling Section */}
        <div className="mt-[5%] flex flex-col md:flex-row px-4 md:px-40 justify-between items-stretch">
          {/* Bildcontainer */}
          <div className="basis-full md:basis-[40%] min-h-[400px] h-full bg-[url('src/assets/bilder/spackling.jpg')] rounded-[10px] mb-5 md:mb-0 py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-center bg-cover flex items-center justify-center">
          </div>
          {/* Textcontainer */}
          <div className="basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold my-3">Spackling</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Spackling är en avgörande del av varje måleriprojekt och grunden till ett perfekt slutresultat.
              Genom att fylla i sprickor, hål och ojämnheter skapas en slät och jämn yta som ger färg och tapet bästa möjliga fäste.
              Utan spackling riskerar ytan att se ojämn och sliten ut, och färgen kan fästa dåligt, vilket leder till ett mindre hållbart resultat.
              <br /><br />
              En välspacklad vägg ger inte bara en snyggare finish, utan gör också att målningen håller längre och ser professionell ut. 
              Oavsett om det handlar om en renovering eller ett nybygge är spackling en investering i kvalitet, hållbarhet och ett vackert hem.
            </p>
            <div className="mt-5">
              <a
                href="/kontakt"
                className="inline-block text-black border border-black py-3 px-[34px] text-[13px] bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-500">
                Kontakta oss för en offert!
              </a>  
            </div>
          </div>
        </div>
          {/* Duplicate Spackling Section */}
          <div className="mt-[5%] flex flex-col md:flex-row px-4 md:px-40 justify-between items-stretch">
          {/* Bildcontainer */}
          <div className="basis-full md:basis-[40%] min-h-[400px] h-full bg-[url('src/assets/bilder/spackling.jpg')] rounded-[10px] mb-5 md:mb-0 py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-center bg-cover flex items-center justify-center">
          </div>
          {/* Textcontainer */}
          <div className="basis-full md:basis-[55%] min-h-[400px] h-full rounded-[10px] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] text-center md:text-left flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold my-3">Spackling</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Spackling är en avgörande del av varje måleriprojekt och grunden till ett perfekt slutresultat.
              Genom att fylla i sprickor, hål och ojämnheter skapas en slät och jämn yta som ger färg och tapet bästa möjliga fäste.
              Utan spackling riskerar ytan att se ojämn och sliten ut, och färgen kan fästa dåligt, vilket leder till ett mindre hållbart resultat.
              <br /><br />
              En välspacklad vägg ger inte bara en snyggare finish, utan gör också att målningen håller längre och ser professionell ut. 
              Oavsett om det handlar om en renovering eller ett nybygge är spackling en investering i kvalitet, hållbarhet och ett vackert hem.
            </p>
            <div className="mt-5">
              <a
                href="/kontakt"
                className="inline-block text-black border border-black py-3 px-[34px] text-[13px] bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-500">
                Kontakta oss för en offert!
              </a>  
            </div>
          </div>
        </div>
      
      </section>
    </div>
  );
}

export default Tjanster;