export function Input({ className, ...props }) {
  // OBS demo funktionalitet för inputfält till kontaktformulär!  
  return (
      <input
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${className}`}
        {...props}
      />
    );
  }
  