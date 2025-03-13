  import React from "react";
  import "../styles/hem.css"; 

  function Tjanster() {
    return (
      // Här börjar innehållet på startsidan
      <div> 

  <section className="relative min-h-[50vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/bakgrundsbil-tvamalare.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
    <h1 className="text-white text-4xl font-semibold text-center">Tjänster vi erbjuder</h1>
  </section>


        {/*Presentation med urval av tjänster i röda block - sektion: Tjänster */}
        <h1 className="text-black text-4xl font-semibold ">Tjänster vi erbjuder</h1>

          <p className="text-[#333] text-[14px] font-light leading-[22px] p-[10px]">
            Vi erbjuder ett antal olika tjänster
          </p>
          
          <div className="mt-[5%] flex flex-col md:flex-row justify-between">
            <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
              <h3 className="text-center font-semibold my-[10px]">Spackling</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
            <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
              <h3 className="text-center font-semibold my-[10px]">Fasadmålning</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
            <div className="basis-[31%] bg-[#fff3f3] rounded-[10px] mb-[5%] py-5 px-3 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
              <h3 className="text-center font-semibold my-[10px]">Våtrum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
          </div>
      </div>
    );
  }

  export default Tjanster;