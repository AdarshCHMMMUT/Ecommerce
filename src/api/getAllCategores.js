import axios from "axios";

const BaseUrl = 'https://api.escuelajs.co/api/v1';

export const getAllCategories = async () => {
    const url = `${BaseUrl}/categories`;
    try {
        const { data } = await axios.get(url);
          // Consider changing this to console.debug if it's for debugging purposes
        return data;
    } catch (err) {
        console.error("Failed to fetch products:", err);
        throw new Error('An error occurred while fetching the products. Please try again later.');
    }
};