/* eslint-disable @next/next/no-img-element */

export default function CartItem(props: {
    image: string;
    title: string;
    desc: string;
    price: number;
}) {
    return (
        <div className="border rounded-2xl flex">
            <div className="flex justify-center items-center p-6">
                <img src={props.image} width="100px" alt="Rice" />
            </div>
            <div className="p-4 border-l w-full">
                <h3 className="flex items-center justify-between font-head text-lg font-medium mb-2">
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
                <p>{props.desc}</p>
                <button className="mt-3 bg-red-100 text-red-700 px-3 font-head font-medium py-1.5 rounded-md">
                    Remove from cart
                </button>
            </div>
        </div>
    );
}
