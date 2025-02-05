export default function ProjectTechStack() {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">사용한 기술 스택</h2>
            <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"].map((tech) => (
                    <span key={tech} className="bg-gray-200 text-black px-3 py-1 rounded-lg text-sm font-medium">
                        #{tech}
                    </span>
                ))}
            </div>
        </section>
    )
}
