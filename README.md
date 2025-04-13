# Hedström Måleri AB – Hemsida

Detta är en hemsida byggd med React och Vite för måleriföretaget Hedström Måleri AB. Projektet är under utveckling och syftar till att visa företagets tjänster, kontaktinformation samt möjliggöra att skicka arbetsförfrågningar.

## Teknisk info

- **Byggd med:** React + Vite  
- **CSS:** Tailwind + vanlig CSS  
- **Backend:** JSON-filer (ingen databas i nuläget)  
- **Syfte:** Skapa en enkel och underhållsvänlig webbplats för en mindre verksamhet  

## Plugins

Projektet använder följande Vite-plugins och paket:

1. [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) – för HMR (Hot Module Replacement)

2. **Tailwind CSS** – används för styling.  
   Om Tailwind inte är förinstallerat, kör (rekommenderat):
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

3. **React Icons** – används för ikoner (t.ex. hamburgermeny):
   npm install react-icons