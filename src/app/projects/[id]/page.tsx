import ImageCarousel from "./ImageCarousel"
import ProjectInfo from "./ProjectInfo"
import ProjectTechStack from "./ProjectTechStack"
import ProjectTasks from "./ProjectTasks"
import ProjectImprovements from "./ProjectImprovements"
import ProjectTroubleShooting from "./ProjectTroubleShooting"
import BackButton from "./BackButton"
import { lingpick } from "./project-details"
import { projectDataMapper } from "./project-data-mapper"

interface ProjectDetailPageProps {
    params: { id: string }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = params
    console.log("id: ", id)
    const projectData = projectDataMapper[id]

    return (
        <div className="w-full max-w-6xl min-h-screen bg-white text-soft-black">
            <BackButton />
            <h1 className="text-4xl font-bold mb-6">{lingpick.title}</h1>
            <ImageCarousel />
            <ProjectInfo />
            <ProjectTechStack />
            <ProjectTasks tasks={projectData.tasks} />
            <ProjectImprovements />
            <ProjectTroubleShooting />
        </div>
    )
}
