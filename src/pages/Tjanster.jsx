import React from "react";
import "../styles/hem.css";

function Tjanster() {
  return (
    <div>
      <section className="relative min-h-[30vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/hedstrombil.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">Tjänster</h1>
      </section>
      {/* ="w-16 md:w-32 lg:w-48"  */}
      <section className="w-1/12 md:w-5/5 lg:w-3/5 mx-auto text-center pt-[100px]">
      <h1 className="text-black text-4xl font-semibold text-center">Vi erbjuder en rad olika tjänster som passar dina behov!</h1>
        <p className="text-[#333] text-[14px] font-light leading-[22px] p-[10px]">
          Vi erbjuder ett antal olika tjänster
        </p>

        <div className="mt-[5%] flex flex-col md:flex-row px-4 md:px-40 justify-between">
          <div className="basis-full md:basis-[40%] h-[300px] md:h-[600px] bg-[url('src/assets/bilder/spackling.jpg')] rounded-[10px] mb-[5%] py-1 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)] bg-no-repeat bg-center bg-cover flex items-center justify-center">
          </div>
          <div className="basis-full md:basis-[31%] h-[300px] md:h-[600px] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
            <h3 className="text-4xl text-center font-semibold my-[10px]">Spackling</h3>
            <p>
              <br /> Spackling är en avgörande del av varje måleriprojekt och grunden till ett perfekt slutresultat. Genom att fylla i sprickor, hål och ojämnheter skapas en slät och
              jämn yta som ger färg och tapet bästa möjliga fäste. Utan spackling riskerar ytan att se ojämn och sliten ut, och färgen kan fästa dåligt, vilket leder till ett mindre hållbart resultat.
              <br /> <br />En välspacklad vägg ger inte bara en snyggare finish, utan gör också att målningen håller längre och ser professionell ut.
              Oavsett om det handlar om en renovering eller ett nybygge är spackling en investering i kvalitet, hållbarhet och ett vackert hem. <br /> <br />
            </p>
            <a
              href="/kontakt"
              className="inline-block no-underline text-black border border-black py-3 px-[34px] text-[13px] bg-transparent relative cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-1000">
              Kontakta oss för en offert!
            </a>
          </div>
        </div>

        <div className="mt-[5%] flex flex-col md:flex-row justify-between">
          <div className="basis-full md:basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
            <h3 className="text-center font-semibold my-[10px]">Spackling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>

          <div className="basis-full md:basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">         
            <h3 className="text-center font-semibold my-[10px]">Spackling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>

          <div className="basis-full md:basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
            <h3 className="text-center font-semibold my-[10px]">Spackling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tjanster;