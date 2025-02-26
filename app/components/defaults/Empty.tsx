import React from 'react'
import Link from "next/link";

export default function Empty({ message, link, linkText }: { message?: string; link?: string; linkText?: string }) {
    return (
        <div className="flex gap-4 items-center justify-center col-span-full w-full min-h-[20vh] flex-col">
            <p className="italic text-center pt-10 pb-4 text-gray-50 font-semibold text-3xl">{message || "Sorry, No Data Found"}</p>
            {link && (
                <Link className=" text-xl text-fuchsia-500 hover:underline hover:text-fuchsia-400 duration-150" href={link}>
                    {linkText || "Explore More"}
                </Link>
            )}
        </div>

    )
}
