import Link from "next/link"

export default function Header() {
    const tabs = [
        { text: "About", link: "/about" },
        { text: "Skills", link: "/skills" },
        { text: "Projects", link: "/projects" },
    ]

    return (
        <nav className="fixed w-full flex justify-between bg-white bg-opacity-80 text-soft-black py-5 px-20 shadow-md">
            <div className="w-full mx-auto md:px-12 lg:px-20 xl:px-28 flex justify-between items-center py-3">
                <span className="text-xl font-bold cursor-default">Jessie's Portfolio</span>
                <ul className="flex space-x-10 items-center">
                    {tabs.map((tab) => (
                        <li key={tab.text}>
                            <Link
                                href={tab.link}
                                className="hover:border-b hover:border-b-soft-black transition-colors duration-200 font-normal"
                            >
                                {tab.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
