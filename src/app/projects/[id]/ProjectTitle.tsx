interface ProjectTitleProps {
    title: string
    type: string
}

const typeBadgeColors: Record<string, string> = {
    "개인 프로젝트": "bg-orange-100 text-orange-700",
    "팀 프로젝트": "bg-teal-100 text-teal-700",
    "회사 프로젝트": "bg-indigo-100 text-indigo-700",
}

export default async function ProjectTitle({ title, type }: ProjectTitleProps) {
    return (
        <h1 className="text-4xl font-bold mb-2 flex items-center">
            {title}
            <span className={`ml-3 px-3 py-1 text-sm font-semibold rounded-lg bg-blue-100 text-blue-700`}>{type}</span>
        </h1>
    )
}
