// src/utils/api.js

export function getUrl(path) {
  // Hämtar base URL från miljövariabler (VITE_API_BASE_URL)
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
  // Se till att path alltid börjar med '/'
  const formattedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${formattedPath}`;
}
