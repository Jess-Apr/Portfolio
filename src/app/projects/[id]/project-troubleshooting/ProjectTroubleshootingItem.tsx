import ProjectTroubleshootingItemList from "./ProjectTroubleshootingItemList"
import { TaskType } from "@data/project-details"

interface ProjectTroubleshootingItemProps {
    troubleshootings: TaskType[]
}

export default function ProjectTroubleshootingItem({ troubleshootings }: ProjectTroubleshootingItemProps) {
    return (
        <div className="space-y-6">
            {troubleshootings.map((troubleshooting, index) => (
                <div key={index} className="p-4 border-l-4 border-blue-200 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-soft-black mb-3">{troubleshooting.title}</h3>
                    {troubleshooting.subtasks && troubleshooting.subtasks.length > 0 && (
                        <ProjectTroubleshootingItemList troubleshootings={troubleshooting.subtasks} isRoot={true} />
                    )}
                </div>
            ))}
        </div>
    )
}
