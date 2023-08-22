/* eslint-disable @next/next/no-img-element */

export default function OrdersItem(props: { title: string; price: number }) {
    return (
        <div className="border rounded-2xl p-4">
            <div className="flex justify-between items-center">
                <span className="font-head text-sm bg-gray-100 px-3 py-1 rounded-md font-medium text-gray-500">
                    Order ID: #64d76830c49427904a47b516
                </span>
                <span className="font-head text-sm bg-gray-50 px-3 py-1 rounded-md font-medium text-gray-500">
                    Ordered on: 16 Feb, 2023
                </span>
            </div>
            <h3 className="flex items-center justify-between font-head text-lg font-medium mt-2 border-b pb-2">
                {props.title}
                <div className="flex gap-2">
                    <span className="text-sky-800 bg-sky-100 text-base px-3 rounded-md">
                        Qty: 3
                    </span>
                    <span className="text-green-800 bg-[#edf9e7] text-base px-3 rounded-md">
                        ${props.price}
                    </span>
                </div>
            </h3>
            <h3 className="flex items-center justify-between font-head text-lg font-medium mt-2">
                {props.title}
                <div className="flex gap-2">
                    <span className="text-sky-800 bg-sky-100 text-base px-3 rounded-md">
                        Qty: 3
                    </span>
                    <span className="text-green-800 bg-[#edf9e7] text-base px-3 rounded-md">
                        ${props.price}
                    </span>
                </div>
            </h3>
        </div>
    );
}
