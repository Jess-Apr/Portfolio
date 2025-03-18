import { TaskType } from "@data/project-details"
import { HighlightedText } from "@utils/HighlightedText"

interface ProjectTroubleshootingItemListProps {
    troubleshootings: TaskType[]
    isRoot: boolean
}

export default function ProjectTroubleshootingItemList({
    troubleshootings,
    isRoot,
}: ProjectTroubleshootingItemListProps) {
    return (
        <ul className={`mt-2 space-y-2 text-black ${!isRoot ? "list-disc pl-6" : ""}`}>
            {troubleshootings &&
                troubleshootings.map((troubleshooting, index) => (
                    <li key={index}>
                        <h2 className="text-lg mb-2">
                            <HighlightedText text={troubleshooting.title} />
                        </h2>
                        {troubleshooting.subtasks && troubleshooting.subtasks.length > 0 && (
                            <ProjectTroubleshootingItemList
                                troubleshootings={troubleshooting.subtasks}
                                isRoot={false}
                            />
                        )}
                    </li>
                ))}
        </ul>
    )
}
