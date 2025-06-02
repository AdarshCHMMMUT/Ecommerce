import { useState, useEffect } from 'react';
import { Navbar } from "../../components/Navabar";
import { OrderCard } from '../../components/ordercard';

export const Orders = () => {
    const [ordersData, setOrdersData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/user/getorders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId: "67f26351a47633cecd6197e7" }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }

                const data = await response.json();
                setOrdersData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="max-w-7xl mx-auto my-10 text-center">
                    <h3 className="text-2xl font-semibold text-gray-700">Loading...</h3>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div className="max-w-7xl mx-auto my-10 text-center">
                    <h3 className="text-2xl font-semibold text-red-600">Error: {error}</h3>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10 px-4">
                <h1 className="mb-6 text-3xl font-bold text-gray-800 text-center">Your Orders</h1>
                {ordersData?.success && ordersData?.orders?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ordersData.orders.map((order) => (
                            <div key={order._id}>
                                <OrderCard order={order} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg">No orders found.</p>
                )}
            </div>
        </>
    );
};