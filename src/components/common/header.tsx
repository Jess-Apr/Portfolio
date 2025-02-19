"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Header() {
    const pathname = usePathname()

    const tabs = [
        { text: "About", link: "/about", match: ["/", "/about"] },
        { text: "Skills", link: "/skills", match: ["/skills"] },
        { text: "Projects", link: "/projects", match: ["/projects", /^\/projects\/.*/] },
    ]

    return (
        <nav className="fixed w-full flex justify-center bg-white bg-opacity-95 text-soft-black py-5 shadow-md z-10 px-6 sm:px-12">
            <div className="w-full flex justify-between items-center max-w-6xl">
                <span className="text-xl font-bold cursor-default">Jessie's Portfolio</span>
                <ul className="flex space-x-10 items-center">
                    {tabs.map((tab) => {
                        const isActive = tab.match.some((path) =>
                            typeof path === "string" ? pathname === path : path.test(pathname)
                        )

                        return (
                            <li key={tab.text}>
                                <Link
                                    href={tab.link}
                                    className={`transition-colors duration-200 ${
                                        isActive ? "font-semibold" : "hover:border-b hover:border-b-soft-black"
                                    }`}
                                >
                                    {tab.text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
