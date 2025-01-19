import Link from "next/link"

export default function Header() {
    return (
        <nav className="fixed w-full flex justify-between bg-white bg-opacity-80 text-soft-black py-5 px-20 shadow-md">
            <span className="text-lg font-extrabold cursor-default">Jessie's Portfolio</span>
            <ul className="flex space-x-8">
                <li>
                    <Link
                        href="/"
                        className="hover:border-b hover:border-b-soft-black transition-colors duration-200 font-extrabold"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/skills"
                        className="hover:border-b hover:border-b-soft-black transition-colors duration-200 font-extrabold"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        className="hover:border-b hover:border-b-soft-black transition-colors duration-200 font-extrabold"
                    >
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
