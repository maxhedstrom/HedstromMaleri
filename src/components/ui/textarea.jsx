export function Textarea({ className, ...props }) {
    return (
      <textarea
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${className}`}
        {...props}
      />
    );
  }
  