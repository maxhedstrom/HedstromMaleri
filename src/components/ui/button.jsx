export function Button({ children, className, onClick, ...props }) {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`inline-block text-black border border-black py-3 px-[34px] text-[13px] bg-transparent cursor-pointer hover:border-[var(--rutor-color)] hover:bg-[var(--detalj-color)] transition duration-500 ${className}`}
      onClick={handleClick} 
      {...props}
    >
      {children}
    </button>
  );
}
