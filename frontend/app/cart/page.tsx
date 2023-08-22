import React from "react";
import CartItem from "../components/CartItem";
import { BsBoxSeam } from "react-icons/bs";

export default function page() {
    return (
        <div className="px-2 md:px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-6 gap-4 py-8">
                <div className="col-span-4">
                    <h1 className="text-xl font-medium font-head border-b pb-2 mb-4">
                        Your Cart Items
                    </h1>
                    <div className="flex flex-col gap-4">
                        <CartItem
                            image="https://www.svgrepo.com/show/362106/gamepad.svg"
                            title="X-box Series X"
                            desc="The most recently launched X-box X series, 6 months old in new condition within warranty."
                            price={999}
                        />
                        <CartItem
                            image="https://www.svgrepo.com/show/362106/gamepad.svg"
                            title="X-box Series X"
                            desc="The most recently launched X-box X series, 6 months old in new condition within warranty."
                            price={999}
                        />
                    </div>
                </div>
                <div className="col-span-2 bg-gray-100 p-4 rounded-2xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-medium font-head border-b border-gray-300 pb-2 mb-4">
                            Order Summary
                        </h2>
                        <p className="font-head font-semibold text-xl">
                            Order total:{" "}
                            <span className="text-green-700">$1898.00</span>
                        </p>
                        <p>Order to be delivered within 2 days.</p>
                        <div className="my-2 flex flex-col font-head">
                            <label
                                htmlFor="address"
                                className="font-semibold pb-1"
                            >
                                Address
                            </label>
                            <textarea
                                rows={3}
                                name="address"
                                id="address"
                                className="border rounded-xl py-1.5 px-3 bg-gray-50 font-medium"
                                placeholder="Your address"
                            />
                        </div>
                    </div>
                    <button className="bg-black rounded-xl text-white p-2.5 font-head font-medium">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
}
