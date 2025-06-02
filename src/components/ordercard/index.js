export const OrderCard = ({ order }) => {
    const toggleReadMore = (e) => {
        const button = e.target;
        const descriptionText = button.previousElementSibling;

        if (button.textContent === "Read More") {
            descriptionText.classList.remove("line-clamp-2", "overflow-hidden");
            button.textContent = "Read Less";
        } else {
            descriptionText.classList.add("line-clamp-2", "overflow-hidden");
            button.textContent = "Read More";
        }
    };

    return (
        <div 
            className="flex flex-col relative border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
        >
            <div className="p-6">
                <div 
                    className="mb-4 text-gray-900 font-semibold text-xl tracking-tight"
                >
                    {order.product.name}
                </div>
                <div>
                    <p 
                        className="mb-2 text-blue-600 font-medium text-lg"
                    >
                        {order.currency.toUpperCase()} {order.amount.toFixed(2)}
                        <span 
                            className="text-gray-500 font-normal text-sm italic ml-2"
                        >
                            (Quantity: {order.product.quantity})
                        </span>
                    </p>
                    <p 
                        className="line-clamp-2 overflow-hidden text-gray-600 mb-2 text-base leading-relaxed"
                    >
                        <span className="font-medium">Order ID:</span> {order._id} <br />
                        <span className="font-medium">Payment Status:</span> {order.status.charAt(0).toUpperCase() + order.status.slice(1)} <br />
                        <span className="font-medium">Shipping:</span> {order.shipping.name}, {order.shipping.country}
                    </p>
                    <button
                        className="text-blue-600 font-medium text-sm bg-transparent border-0 p-0 cursor-pointer hover:underline"
                        onClick={toggleReadMore}
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};