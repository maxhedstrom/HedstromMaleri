// src/components/admin/ImageUploader.jsx
import React from "react";

export default function ImageUploader({ src, onChange, id }) {
  return (
    <div className="flex flex-col items-center p-4 border rounded-md shadow-sm bg-white">
      {src ? (
        <img
          src={src}
          alt="En Defaultbild finns uppladdad, det går fortfarande att byta bild"
          className="w-302 h-32 object-cover rounded-lg mb-2"
        />
      ) : (
        <div className="w-32 h-32 bg-gray-100 rounded-lg mb-2 flex items-center justify-center text-gray-400">
          Ingen bild
        </div>
      )}
      <label
        htmlFor={id}
        className="text-sm px-3 py-1 bg-[var(--text-color)] text-white rounded-full hover:bg-[var(--rubrik-color)] transition cursor-pointer"
      >
        {src ? "Byt bild" : "Ladda upp bild"}
      </label>
      <input
        id={id}
        type="file"
        accept="image/*"
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
}


