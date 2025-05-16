// src/utils/api.js
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export function getUrl(path) {
  return `${baseUrl}${path}`;
}
