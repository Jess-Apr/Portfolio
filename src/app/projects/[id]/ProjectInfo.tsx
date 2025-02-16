interface ProjectInfoProps {
    info: {
        desc: string
        period: string
        participants: string
        role: string
    }
}

export default function ProjectInfo({ info }: ProjectInfoProps) {
    return (
        <section className="w-full mb-8">
            <h2 className="text-2xl font-semibold mb-2">프로젝트 소개</h2>
            <p className="mb-6 text-lg">{info.desc}</p>
            <ul className="space-y-2 text-lg">
                <li>
                    <strong>진행 기간:</strong> {info.period}
                </li>
                <li>
                    <strong>진행 인원:</strong> {info.participants}
                </li>
                <li>
                    <strong>담당 업무:</strong> {info.role}
                </li>
            </ul>
        </section>
    )
}
