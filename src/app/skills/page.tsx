import { skillsText } from "./skills-text"

export default function SkillsPage() {
    return (
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
            {skillsText.map((skill, index) => (
                <div
                    key={index}
                    className="flex items-start bg-gray-100 p-5 rounded-lg shadow-md transition-transform hover:scale-105"
                >
                    <img src={skill.icon} alt={skill.name} width={50} height={50} />
                    <div className="ml-4">
                        <span className="block text-lg font-bold text-gray-800">{skill.name}</span>
                        <ul className="mt-2 list-disc list-outside space-y-1 pl-5 text-gray-600">
                            {skill.desc.map((text, idx) => (
                                <li key={idx}>{text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
