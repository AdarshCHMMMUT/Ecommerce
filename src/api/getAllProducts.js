import axios from "axios";
export const getAllProducts = async () => {
    try {
        const { data } = await axios.get('https://thirdcopyback.vercel.app/api/user/items');
        return data;
    } catch (err) {
        console.error("Failed to fetch products:", err);
    }
};
