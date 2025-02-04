import Image from "next/image"
import { projectList } from "./project-list"
import Link from "next/link"

export default function ProjectsPage() {
    return (
        <div className="max-w-6xl mx-auto py-2">
            <h2 className="text-3xl font-bold text-black text-center mb-10">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectList.map((project, index) => (
                    <Link key={index} href={project.path} className="group h-full">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  h-full flex flex-col">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5 flex-grow flex flex-col">
                                <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2 cursor-pointer">{project.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
