import ProjectTroubleshootingItem from "./ProjectTroubleshootingItem"
import { TaskType } from "@data/project-details"

interface ProjectTroubleshootingProps {
    troubleshootings: TaskType[]
}

export default function ProjectTroubleshooting({ troubleshootings }: ProjectTroubleshootingProps) {
    if (!troubleshootings || troubleshootings.length === 0) return null

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">문제 해결 경험</h2>
            <ProjectTroubleshootingItem troubleshootings={troubleshootings} />
        </section>
    )
}
