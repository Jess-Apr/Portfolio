import { HighlightedText } from "src/utils/HighlightedText"
import { TaskType } from "../data/project-details"

interface ProjectTasksListProps {
    tasks: TaskType[]
    isRoot: boolean
}

export default function ProjectTasksList({ tasks, isRoot }: ProjectTasksListProps) {
    if (!tasks || tasks.length === 0) return null

    return (
        <ul className={`list-disc pl-6 ${isRoot ? "space-y-3" : ""}`}>
            {tasks.map((task, index) => (
                <li key={index}>
                    <section className="mb-2">
                        <h2 className="text-lg mb-2">
                            <HighlightedText text={task.title} />
                        </h2>
                        {task.subtasks && task.subtasks.length > 0 && (
                            <ProjectTasksList tasks={task.subtasks} isRoot={false} />
                        )}
                    </section>
                </li>
            ))}
        </ul>
    )
}
