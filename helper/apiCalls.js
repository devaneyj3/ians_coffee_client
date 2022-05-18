import { AxiosInstance } from "./CustomFetch";

export const getDrinks = async () => {
	const response = await AxiosInstance().get("drinks?populate=*");
	return response.data;
};
