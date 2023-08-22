import Link from "next/link";
import ShopItem from "./ShopItem";

export default function Shop() {
    return (
        <div className="px-2 md:px-4 py-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between font-head font-medium">
                    <h2 className="text-xl">Latest Products</h2>
                    <Link
                        href="/products"
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md"
                    >
                        See all
                    </Link>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                    <ShopItem
                        image="https://www.svgrepo.com/show/246731/bicycle-bike.svg"
                        title="Bicycle"
                        desc="Almost new condition, 6 months old and barely used. Might need a mild servicing."
                        price={99.99}
                    />
                    <ShopItem
                        image="https://www.svgrepo.com/show/492787/book-and-people-spring.svg"
                        title="OS Textbook"
                        desc="Standard textbook for Operating System by Galvin. Good condition, almost no wear and tear."
                        price={10.0}
                    />
                    <ShopItem
                        image="https://www.svgrepo.com/show/283928/roller-skate-skate.svg"
                        title="Skating Shoes"
                        desc="Used around 9 months, almost no wear and tear. Mild cleaning may be required."
                        price={8.99}
                    />
                    <ShopItem
                        image="https://www.svgrepo.com/show/362106/gamepad.svg"
                        title="X-box Series X"
                        desc="The most recently launched X-box X series, 6 months old in new condition within warranty."
                        price={999}
                    />
                </div>
            </div>
        </div>
    );
}
