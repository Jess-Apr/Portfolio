import ImageCarousel from "./image-carousel/ImageCarousel"
import ProjectInfo from "./ProjectInfo"
import ProjectTechStack from "./ProjectTechStack"
import ProjectTasks from "./project-tasks/ProjectTasks"
import ProjectImprovements from "./project-improvements/ProjectImprovements"
import BackButton from "./BackButton"
import { projectDataMapper } from "@data/project-details-data-mapper"

interface ProjectDetailPageProps {
    params: Promise<{ id: string }>
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = await params
    const projectData = projectDataMapper[id]

    return (
        <div className="w-full max-w-6xl min-h-screen bg-white text-soft-black">
            <BackButton />
            <h1 className="text-4xl font-bold mb-6">{projectData.title}</h1>
            <ImageCarousel />
            <ProjectInfo info={projectData.info} />
            <ProjectTechStack techStack={projectData.techStack} />
            <ProjectTasks title="주요 작업 내용" tasks={projectData.tasks} />
            {projectData.improvements ? <ProjectImprovements improvements={projectData.improvements} /> : null}
        </div>
    )
}
