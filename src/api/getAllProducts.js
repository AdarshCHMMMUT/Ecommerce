import axios from "axios";

const BaseUrl = 'https://api.escuelajs.co/api/v1';

export const getAllProducts = async () => {
    const url = `${BaseUrl}/products`;
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        console.error("Failed to fetch products:", err);
        throw new Error('An error occurred while fetching the products. Please try again later.');
    }
};
