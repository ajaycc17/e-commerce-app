import React from "react";

export default function page() {
    return (
        <div className="px-2 md:px-4">
            <div className="max-w-xl mx-auto py-8">
                <h1 className="text-xl font-medium font-head text-center border-b pb-3 mb-3">
                    Add a New Product for Sale
                </h1>
                <form className="flex flex-col gap-3">
                    <input
                        type="text"
                        className="border p-2.5 rounded-xl bg-gray-50 font-head font-medium"
                        placeholder="Product Name"
                    />
                    <input
                        type="text"
                        className="border p-2.5 rounded-xl bg-gray-50 font-head font-medium"
                        placeholder="Product Image URL"
                    />
                    <input
                        type="number"
                        className="border p-2.5 rounded-xl bg-gray-50 font-head font-medium"
                        placeholder="Price"
                    />
                    <textarea
                        rows={5}
                        className="border p-2.5 rounded-xl bg-gray-50 font-head font-medium"
                        placeholder="Product Description"
                    />
                    <input type="hidden" />
                    <button className="rounded-xl p-2.5 bg-black text-white font-medium font-head">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}
