import { introText } from "@data/intro-text"

export default function Introduction() {
    return (
        <div className="w-full flex flex-col items-center gap-6 mt-10">
            {introText.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-8">
                    {paragraph.split(/(<strong>.*?<\/strong>)/g).map((part, partIndex) => {
                        if (part.startsWith("<strong>") && part.endsWith("</strong>")) {
                            return (
                                <strong key={partIndex} className="font-bold">
                                    {part.replace(/<\/?strong>/g, "")}
                                </strong>
                            )
                        }
                        return part
                    })}
                </p>
            ))}
        </div>
    )
}
