interface SlideIndicatorProps {
    items: string[]
    displayIndex: number
    goToSlide: (index: number) => void
}

export default function SlideIndicator({ items, displayIndex, goToSlide }: SlideIndicatorProps) {
    return (
        <div className="w-full flex justify-center items-center gap-3 mt-4">
            {items.map((_, index) => (
                <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                           ${displayIndex === index + 1 ? "bg-gray-800" : "bg-gray-400"}`}
                    onClick={() => goToSlide(index)}
                />
            ))}
        </div>
    )
}
