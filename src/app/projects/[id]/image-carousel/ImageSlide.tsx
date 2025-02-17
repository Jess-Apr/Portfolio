interface ImageSlideProps {
    transition: boolean
    currentIndex: number
    extendedItems: string[]
}

export default function ImageSlide({ transition, currentIndex, extendedItems }: ImageSlideProps) {
    return (
        <div className="overflow-hidden rounded-2xl">
            <div
                className={`flex ${transition && "transition-transform duration-500"}`}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {extendedItems.map((item, index) => (
                    <div key={index} className={`bg-gray-200 h-96 w-full flex shrink-0 justify-center items-center`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
