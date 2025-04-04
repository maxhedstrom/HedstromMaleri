import React from "react";
import "../styles/hem.css";
import { Button } from "/src/components/ui/button";
import { Link } from "react-router-dom";
import InfoCard from "/src/components/ui/InfoCard";

<Link to="/tjanster">
  <Button className="w-full">
    Kontakta oss för en offert!
  </Button>
</Link>

function Tjanster() {
 return (
  <div>
      {/* Text som visas i navbaren */}
      <section className="relative min-h-[60vh] w-full bg-[linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url('src/assets/bilder/bakgrundsbil-tvamalare.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-white text-4xl font-semibold text-center">Tjänster</h1>
      </section>

      {/* Introduktion till sidan med tjänster */}
    <section className="w-11/12 md:w-5/5 mx-auto text-center py-16 px-4">

        <h1 
         className="text-[var(--rubrik-color)] text-4xl font-semibold text-center">Vi arbetar både åt byggföretag, bostadsrättföreningar och privatpersoner. <br /> <br />
        </h1>
        <h2 className="text-black text-2xl font-extralight text-center">
          Nedan kan du läsa mer om vilka tjänster vi erbjuder och hur vi kan hjälpa dig.
        </h2>

      <InfoCard
        image="src/assets/bilder/spackling.webp"
        title="Fasadmålning"
        description="Ge din fasad ett lyft med professionell målning! Vi på Hedström Måleri AB använder moderna metoder och lift för att nå  alla ytor smidigt och säkert. Med högkvalitativa färger och noggrant arbete skyddar vi din fasad och ger den ett fräscht, hållbart utseende. Kontakta oss idag för en kostnadsfri offert!"  
        linkText="Kontakta oss för en offert!"
        className="border"
        link="/projekt"      
        reverse={false}
      />

      <InfoCard
        image="src/assets/bilder/vatrum.webp"
        title="Våtrum"
        description=" Behöver ditt badrum eller liknande målas om krävs specialverktyg och kompetens kring hållbarhet. Våra våtrumstjänster garanterar hållbara, stilrena och fuktsäkra lösningar för ditt badrum eller tvättstuga. Vi använder högkvalitativa material och följer branschstandarder för att skapa en säker och elegant miljö"
        linkText="Kontakta oss för en offert!"
        className="border"
        link="/projekt"      
        reverse={true}
      />

      <InfoCard
        image="src/assets/bilder/spackling.jpg"
        title="Container 3"
        description="Spackling är en avgörande del av varje måleriprojekt och grunden till ett perfekt slutresultat. Genom att fylla i sprickor, hål och ojämnheter skapas en slät och jämn yta som ger färg och tapet bästa möjliga fäste.  Utan spackling riskerar ytan att se ojämn och sliten ut, och färgen kan fästa dåligt, vilket leder till ett mindre hållbart resultat.
          

                    En välspacklad vägg ger inte bara en snyggare finish, utan gör också att målningen håller längre och ser professionell ut. 
                    Oavsett om det handlar om en renovering eller ett nybygge är spackling en investering i kvalitet, hållbarhet och ett vackert hem."
        linkText="Kontakta oss för en offert!"
        className="border"
        link="/projekt"      
        reverse={false}
      />
                
      <InfoCard
        image="src/assets/bilder/spackling.webp"
        title="Fasadmålning"
        description="Ge din fasad ett lyft med professionell målning! Vi på Hedström Måleri AB använder moderna metoder och lift för att nå  alla ytor smidigt och säkert. Med högkvalitativa färger och noggrant arbete skyddar vi din fasad och ger den ett fräscht, hållbart utseende. Kontakta oss idag för en kostnadsfri offert!"  
        linkText="Kontakta oss för en offert!"
        className="border"
        link="/projekt"      
        reverse={true}
      />

      <InfoCard
        image="src/assets/bilder/spackling.jpg"
        title="Container 3"
        description="Spackling är en avgörande del av varje måleriprojekt och grunden till ett perfekt slutresultat. Genom att fylla i sprickor, hål och ojämnheter skapas en slät och jämn yta som ger färg och tapet bästa möjliga fäste.  Utan spackling riskerar ytan att se ojämn och sliten ut, och färgen kan fästa dåligt, vilket leder till ett mindre hållbart resultat.
          

                    En välspacklad vägg ger inte bara en snyggare finish, utan gör också att målningen håller längre och ser professionell ut. 
                    Oavsett om det handlar om en renovering eller ett nybygge är spackling en investering i kvalitet, hållbarhet och ett vackert hem."
        linkText="Kontakta oss för en offert!"
        className="border"
        link="/projekt"      
        reverse={false}
      />
    </section>
  </div>
  );
}

export default Tjanster;