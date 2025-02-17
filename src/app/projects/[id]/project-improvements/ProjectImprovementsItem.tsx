import { TaskType } from "@data/project-details"
import ProjectImprovementsItemList from "./ProjectImprovementItemList"

interface ProjectImprovementsItemProps {
    improvements: TaskType[]
}

export default function ProjectImprovementsItem({ improvements }: ProjectImprovementsItemProps) {
    return (
        <div className="space-y-6">
            {improvements.map((improvement, index) => (
                <div key={index} className="p-4 border-l-4 border-blue-200 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-soft-black mb-3">{improvement.title}</h3>
                    {improvement.subtasks && improvement.subtasks.length > 0 && (
                        <ProjectImprovementsItemList improvements={improvement.subtasks} isRoot={true} />
                    )}
                </div>
            ))}
        </div>
    )
}
