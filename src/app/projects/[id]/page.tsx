import ImageCarousel from "./image-carousel/ImageCarousel"
import ProjectInfo from "./ProjectInfo"
import ProjectTechStack from "./ProjectTechStack"
import ProjectTasks from "./project-tasks/ProjectTasks"
import ProjectTroubleshooting from "./project-troubleshooting/ProjectTroubleshooting"
import BackButton from "./BackButton"
import { projectDataMapper } from "@data/project-details-data-mapper"
import ProjectTitle from "./ProjectTitle"
import ProjectLink from "./ProjectLink"

interface ProjectDetailPageProps {
    params: Promise<{ id: string }>
}

export function generateStaticParams() {
    return [{ id: "sitescoop" }, { id: "lingpick" }, { id: "pinnflag" }, { id: "daygrid" }]
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = await params
    const projectData = projectDataMapper[id]

    return (
        <div className="w-full max-w-6xl min-h-screen bg-white text-soft-black">
            <BackButton />
            <ProjectTitle title={projectData.title} type={projectData.type} />
            <ProjectLink links={projectData.links} />
            <ImageCarousel images={projectData.images} />
            <ProjectInfo info={projectData.info} />
            <ProjectTechStack techStacks={projectData.techStacks} />
            <ProjectTasks title="주요 작업 내용" tasks={projectData.tasks} />
            {projectData.troubleshootings ? (
                <ProjectTroubleshooting troubleshootings={projectData.troubleshootings} />
            ) : null}
        </div>
    )
}
