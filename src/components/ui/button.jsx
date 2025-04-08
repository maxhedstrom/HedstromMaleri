export function Button({ children, className, onClick, ...props }) {
  // OBS demo funktionalitet för knapp till kontaktformulär!
  
  const handleClick = (event) => {
    // Scrolla till toppen av sidan vid knapptryckning
    window.scrollTo(0, 0);

    // Om det finns ett `onClick`-event från föräldern, anropas det också
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`inline-block text-black border border-black py-3 px-[34px] text-[13px] bg-transparent cursor-pointer hover:border-[#f44336] hover:bg-[#f44336] transition duration-500 ${className}`}
      onClick={handleClick}  // Lägg till onClick här
      {...props}
    >
      {children}
    </button>
  );
}
