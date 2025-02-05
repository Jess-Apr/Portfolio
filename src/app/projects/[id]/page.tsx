"use client"

import { use } from "react"
import ImageCarousel from "./ImageCarousel"
import ProjectInfo from "./ProjectInfo"
import ProjectTechStack from "./ProjectTechStack"
import ProjectTasks from "./ProjectTasks"
import ProjectImprovements from "./ProjectImprovements"
import ProjectTroubleShooting from "./ProjectTroubleShooting"
import BackButton from "./BackButton"

interface ProjectDetailPageProps {
    params: Promise<{ id: string }>
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = use(params)

    return (
        <div className="w-full max-w-6xl min-h-screen bg-white text-soft-black">
            <BackButton />
            <h1 className="text-4xl font-bold mb-6">{id} Project</h1>
            <ImageCarousel />
            <ProjectInfo />
            <ProjectTechStack />
            <ProjectTasks />
            <ProjectImprovements />
            <ProjectTroubleShooting />
        </div>
    )
}
