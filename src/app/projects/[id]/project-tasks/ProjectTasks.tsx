import ProjectTasksList from "./ProjectTasksItem"
import { TaskType } from "@data/project-details"

interface ProjectTasksProps {
    title: string
    tasks: TaskType[]
}

export default function ProjectTasks({ title, tasks }: ProjectTasksProps) {
    if (!tasks || tasks.length === 0) return null

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <ProjectTasksList tasks={tasks} isRoot={true} />
        </section>
    )
}
