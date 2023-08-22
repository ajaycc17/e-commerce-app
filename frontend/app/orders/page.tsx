import OrdersItem from "../components/OrdersItem";

export default function Orders() {
    return (
        <div className="px-2 md:px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-6 gap-4 py-8">
                <div className="col-span-4">
                    <h1 className="text-xl font-medium font-head border-b pb-2 mb-4">
                        Past Orders
                    </h1>
                    <div className="flex flex-col gap-4">
                        <OrdersItem title="X-box Series X" price={999} />
                        <OrdersItem title="X-box Series X" price={999} />
                    </div>
                </div>
                <div className="col-span-2 bg-gray-100 p-4 rounded-2xl">
                    <h2 className="text-xl font-medium font-head border-b border-gray-300 pb-2 mb-4">
                        Order Summary
                    </h2>
                    <p className="font-head font-medium flex items-center justify-between border-b border-gray-300 pb-2 mb-2">
                        Orders today:{" "}
                        <span className="text-green-700">$1898.00</span>
                    </p>
                    <p className="font-head font-medium flex items-center justify-between border-b border-gray-300 pb-2 mb-2">
                        Orders this month:{" "}
                        <span className="text-green-700">$1898.00</span>
                    </p>
                    <p className="font-head font-medium flex items-center justify-between border-b border-gray-300 pb-2 mb-2">
                        Orders this year:{" "}
                        <span className="text-green-700">$1898.00</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
