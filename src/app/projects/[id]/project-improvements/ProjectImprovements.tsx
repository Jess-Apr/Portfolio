import { TaskType } from "../data/project-details"
import ProjectImprovementsItem from "./ProjectImprovementsItem"

interface ProjectImprovementsProps {
    improvements: TaskType[]
}

export default function ProjectImprovements({ improvements }: ProjectImprovementsProps) {
    if (!improvements || improvements.length === 0) return null

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">기능 개선</h2>
            <ProjectImprovementsItem improvements={improvements} />
        </section>
    )
}
