import axios from "axios";
export const getAllCategories = async () => {
    try {
        const { data } = await axios.get('https://thirdcopyback.vercel.app/api/user/category');
        return data;
    } catch (err) {
        console.error("Failed to fetch products:", err);
    }
};