import Link from "next/link"

export default function Header() {
    const tabs = [
        { text: "About", link: "/about" },
        { text: "Skills", link: "/skills" },
        { text: "Projects", link: "/projects" },
    ]

    return (
        <nav className="fixed w-full flex justify-between bg-white bg-opacity-80 text-soft-black py-5 px-20 shadow-md">
            <span className="text-xl font-extrabold cursor-default">Jessie's Portfolio</span>
            <ul className="flex space-x-10">
                {tabs.map((tab) => (
                    <li>
                        <Link
                            href={tab.link}
                            className="hover:border-b hover:border-b-soft-black transition-colors duration-200 font-extrabold"
                        >
                            {tab.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
