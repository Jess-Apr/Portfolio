import { HighlightedText } from "src/utils/HighlightedText"
import { TaskType } from "../data/project-details"

interface ProjectImprovementsItemListProps {
    improvements: TaskType[]
    isRoot: boolean
}

export default function ProjectImprovementsItemList({ improvements, isRoot }: ProjectImprovementsItemListProps) {
    return (
        <ul className={`mt-2 space-y-2 text-black ${!isRoot ? "list-disc pl-6" : ""}`}>
            {improvements &&
                improvements.map((improvement, index) => (
                    <li key={index}>
                        <h2 className="text-lg mb-2">
                            <HighlightedText text={improvement.title} />
                        </h2>
                        {improvement.subtasks && improvement.subtasks.length > 0 && (
                            <ProjectImprovementsItemList improvements={improvement.subtasks} isRoot={false} />
                        )}
                    </li>
                ))}
        </ul>
    )
}
