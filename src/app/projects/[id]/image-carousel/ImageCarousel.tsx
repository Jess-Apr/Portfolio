"use client"

import { useEffect, useState } from "react"

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [transition, setTransition] = useState(true)
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)
    const items = [1, 2, 3]
    const extendedItems = [items[items.length - 1], ...items, items[0]]

    const disableButtonsTemporarily = () => {
        setIsBtnDisabled(true)
        setTimeout(() => {
            setIsBtnDisabled(false)
        }, 500)
    }

    const goToPrev = () => {
        if (isBtnDisabled) return
        disableButtonsTemporarily()

        setTransition(true)
        setCurrentIndex((prevIndex) => prevIndex - 1)
    }

    const goToNext = () => {
        if (isBtnDisabled) return
        disableButtonsTemporarily()

        setTransition(true)
        setCurrentIndex((prevIndex) => prevIndex + 1)
    }

    const goToSlide = (index: number) => {
        if (isBtnDisabled) return
        disableButtonsTemporarily()
        setTransition(true)
        setCurrentIndex(index + 1)
    }

    useEffect(() => {
        let timeoutId: NodeJS.Timeout

        if (currentIndex === 0) {
            timeoutId = setTimeout(() => {
                setCurrentIndex(extendedItems.length - 2)
                setTransition(false)
            }, 500)
        } else if (currentIndex === extendedItems.length - 1) {
            timeoutId = setTimeout(() => {
                setCurrentIndex(1)
                setTransition(false)
            }, 500)
        }

        return () => {
            clearTimeout(timeoutId)
        }
    }, [currentIndex, extendedItems.length])

    return (
        <div className="mb-8">
            <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                    <div
                        className={`flex ${transition && "transition-transform duration-500"}`}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {extendedItems.map((item) => (
                            <div
                                key={item * Math.random()}
                                className={`bg-gray-200 h-96 w-full flex shrink-0 justify-center items-center`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    type="button"
                    className="absolute top-1/2 left-3 py-6 px-4 bg-gray-700 opacity-80 rounded-full hover:bg-gray-600 transition-colors duration-100 text-white text-2xl transform -translate-y-1/2"
                    onClick={goToPrev}
                    disabled={isBtnDisabled}
                >
                    &#8249;
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 right-3 py-6 px-4 bg-gray-700 opacity-80 rounded-full hover:bg-gray-600 transition-colors duration-100 text-white text-2xl transform -translate-y-1/2"
                    onClick={goToNext}
                    disabled={isBtnDisabled}
                >
                    &#8250;
                </button>
            </div>
            <div className="w-full flex justify-center items-center gap-3 mt-4">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 
                                   ${currentIndex === index + 1 ? "bg-gray-800" : "bg-gray-400"}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}
