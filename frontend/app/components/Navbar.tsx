"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";

export default function Navbar() {
    const menu = useRef<HTMLDivElement>(null);
    const showAdminMenu = () => {
        if (menu.current?.classList.contains("hidden")) {
            menu.current.classList.add("flex");
            menu.current.classList.remove("hidden");
        } else {
            menu.current?.classList.remove("flex");
            menu.current?.classList.add("hidden");
        }
    };
    return (
        <header className="sticky top-0 px-2 md:px-4 py-1 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="font-head flex items-center gap-4 justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.svg"
                            width={50}
                            height={50}
                            alt="Old'sCool"
                        />
                        <span className="text-xl font-bold">
                            Old&apos;s{" "}
                            <span className="text-blue-700">Cool</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-8">
                        <nav className="flex gap-8 font-medium">
                            <Link href="/shop">Shop</Link>
                            <Link href="/orders">Orders</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/user.svg"
                                width={40}
                                height={40}
                                alt="User"
                                className="bg-white rounded-full cursor-pointer"
                                onClick={showAdminMenu}
                            />
                            <Link href="/cart" className="flex gap-1 text-xl">
                                <BsCart3 />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="menu hidden flex-col gap-2 font-head font-medium px-6 py-4 fixed right-8 top-[58px]"
                ref={menu}
            >
                <Link href="/admin/add-product">Add a Product</Link>
                <Link
                    href="/admin/products"
                    className="border-t border-gray-300 pt-2"
                >
                    Your Products
                </Link>
                <Link href="/logout" className="border-t border-gray-300 pt-2">
                    Log out
                </Link>
            </div>
        </header>
    );
}
