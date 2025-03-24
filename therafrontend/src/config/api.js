const API_URL = import.meta.env.VITE_API_URL;
console.log("API URL being used:", API_URL);

if (!API_URL) {
  console.error("API_URL is not defined! Check environment variables.");
}

export { API_URL };
