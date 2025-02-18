interface ProjectTechStackProps {
    techStacks: string[]
}

export default function ProjectTechStack({ techStacks }: ProjectTechStackProps) {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">사용한 기술 스택</h2>
            <div className="flex flex-wrap gap-2">
                {techStacks.map((stack) => (
                    <span key={stack} className="bg-blue-100 text-black px-3 py-1 rounded-lg text-sm font-medium">
                        {stack}
                    </span>
                ))}
            </div>
        </section>
    )
}
