# Hedström Måleri AB – Hemsida

Detta är en hemsida byggd med React och Vite för måleriföretaget Hedström Måleri AB. Projektet är under utveckling och syftar till att visa företagets tjänster, kontaktinformation samt möjliggöra att skicka arbetsförfrågningar.

## Teknisk info

- **Byggd med:** React + Vite  
- **CSS:** Tailwind + vanlig CSS  
- **Backend:** JSON-filer (ingen databas i nuläget)  
- **Syfte:** Skapa en enkel och underhållsvänlig webbplats för en mindre verksamhet  

## Plugins och beroenden

Projektet använder följande Vite-plugins och paket:

1. [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) – för HMR (Hot Module Replacement)

2. **Tailwind CSS** – används för styling.  
   Om Tailwind inte är förinstallerat, kör (rekommenderat):
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

3. **React Icons** – används för ikoner (t.ex. hamburgermeny):
   npm install react-icons

4. **axios** - Ett löftesbaserat HTTP-bibliotek för att göra anrop till API:er (GET, POST, PUT, DELETE) från både webbläsare och Node.js.
   npm install axios

5. **express** - Ett minimalistiskt och flexibelt webb­ramverk för Node.js som gör det enkelt att skapa API:er, routa förfrågningar och hantera middleware.
 npm install express

6. **nodemailer** - Ett modulärt verktyg för att skicka e-post från din Node.js-server via SMTP eller tredjeparts­tjänster (t.ex. Gmail, SendGrid).
   npm install nodemailer

7. **multer** - En middleware för Express som hanterar multipart/form-data-förfrågningar, vilket gör det enkelt att ladda upp filer (bilder, dokument) till din server.
   npm install multer