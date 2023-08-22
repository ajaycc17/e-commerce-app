/* eslint-disable @next/next/no-img-element */

export default function ShopItem(props: {
    image: string;
    title: string;
    desc: string;
    price: number;
}) {
    return (
        <div className="border rounded-2xl">
            <div className="flex justify-center p-4">
                <img src={props.image} width="150px" alt="Rice" />
            </div>
            <div className="p-4 mt-2 border-t">
                <h3 className="flex items-center justify-between font-head text-lg font-medium mb-2">
                    {props.title}
                    <span className="text-green-800 bg-[#edf9e7] text-base px-3 rounded-md">
                        ${props.price}
                    </span>
                </h3>
                <p>{props.desc}</p>
                <button className="mt-3 bg-sky-100 text-sky-800 px-3 font-head font-medium py-1.5 rounded-md">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
