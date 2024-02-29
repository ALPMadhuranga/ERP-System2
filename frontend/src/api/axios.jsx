import axios from "axios";
// const BASE_URL = "https://university-management-system-backend-five.vercel.app";
// const BASE_URL = "";
export default axios.create({
	// baseURL: BASE_URL,
	// withCredentials: true,
});
export const axiosImage = axios.create({
	// baseURL: BASE_URL,
});
