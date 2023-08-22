/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { RiAttachmentLine } from "react-icons/ri";

export default function Hero() {
    return (
        <div className="px-2 md:px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 py-8 border-b border-gray-200">
                <div className="flex flex-col justify-center gap-4">
                    <h1 className="text-3xl font-semibold font-head">
                        We Help Pass on the Legacy
                    </h1>
                    <p className="text-lg">
                        An easy, efficient and effective platform to exchange
                        and sell items in campuses, from notes to bicycles,
                        everything!
                    </p>
                    <div className="flex">
                        <Link
                            href="/add-produc"
                            className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2"
                        >
                            <RiAttachmentLine />
                            Add Products
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="/chart.svg" width="50%" alt="Delivery" />
                </div>
            </div>
        </div>
    );
}
