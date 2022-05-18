import axios from "axios";

export const AxiosInstance = () => {
	const baseURL = "https://ians-coffee.herokuapp.com/api/";

	return axios.create({
		baseURL: baseURL,
	});
};
