import Image from "next/image"

interface ImageSlideProps {
    transition: boolean
    currentIndex: number
    extendedImages: string[]
}

export default function ImageSlide({ transition, currentIndex, extendedImages }: ImageSlideProps) {
    return (
        <div className="overflow-hidden rounded-2xl">
            <div
                className={`flex ${transition && "transition-transform duration-500"}`}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {extendedImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`ProjectI image ${index}`}
                        width={0}
                        height={0}
                        sizes="100vh"
                        className={`bg-gray-50 object-contain h-[500px] w-full flex shrink-0 justify-center items-center`}
                    />
                ))}
            </div>
        </div>
    )
}
