// gör länkar i navbaren till knappar och ger hover effekten
export default function NavLink({ href, children }) {
      
    return (
      <a
        href={href}
        className="border-2 border-transparent hover:border-white focus:ring-2 focus:ring-white text-white font-bold text-[16px] rounded-md px-4 py-2"
      >
        {children}
      </a>
    );
  }
  