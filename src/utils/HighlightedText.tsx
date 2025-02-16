interface HighlightedTextProps {
    text: string
}

export function HighlightedText({ text }: HighlightedTextProps) {
    const parsedText = text.split(/(<strong>.*?<\/strong>)/g).map((part, index) => {
        if (part.startsWith("<strong>") && part.endsWith("</strong>")) {
            return <strong key={index}>{part.replace(/<\/?strong>/g, "")}</strong>
        }
        return part
    })

    return <span>{parsedText}</span>
}
