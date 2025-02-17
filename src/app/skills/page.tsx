import { skillsText } from "@data/skills-text"

export default function SkillsPage() {
    return (
        <div className="py-2">
            <h2 className="text-3xl font-bold text-black text-center mb-10">Skills</h2>
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillsText.map((skill, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-5 rounded-lg shadow-md">
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
        </div>
    )
}
