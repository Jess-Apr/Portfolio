"use client"

import { useEffect, useState } from "react"
import SlideIndicator from "./SlideIndicator"
import SlideButton from "./SlideButton"
import ImageSlide from "./ImageSlide"

interface ImageCarouselProps {
    images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [displayIndex, setDisplayIndex] = useState(1)
    const [transition, setTransition] = useState(true)
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)
    const extendedImages = [images[images.length - 1], ...images, images[0]]

    const disableButtonsTemporarily = () => {
        setIsBtnDisabled(true)
        setTimeout(() => {
            setIsBtnDisabled(false)
        }, 500)
    }

    const changeSlide = (direction: "prev" | "next") => {
        if (isBtnDisabled) return
        disableButtonsTemporarily()

        setTransition(true)
        setCurrentIndex((prevIndex) => prevIndex + (direction === "next" ? 1 : -1))
    }

    const goToSlide = (index: number) => {
        if (isBtnDisabled) return
        disableButtonsTemporarily()
        setTransition(true)
        setCurrentIndex(index + 1)
    }

    useEffect(() => {
        if (currentIndex === 0) {
            setDisplayIndex(images.length)
        } else if (currentIndex === extendedImages.length - 1) {
            setDisplayIndex(1)
        } else {
            setDisplayIndex(currentIndex)
        }

        let timeoutId: NodeJS.Timeout

        if (currentIndex === 0) {
            timeoutId = setTimeout(() => {
                setCurrentIndex(extendedImages.length - 2)
                setTransition(false)
            }, 500)
        } else if (currentIndex === extendedImages.length - 1) {
            timeoutId = setTimeout(() => {
                setCurrentIndex(1)
                setTransition(false)
            }, 500)
        }

        return () => {
            clearTimeout(timeoutId)
        }
    }, [currentIndex, extendedImages.length])

    return (
        <div className="mb-8">
            <div className="relative">
                <ImageSlide transition={transition} currentIndex={currentIndex} extendedImages={extendedImages} />
                <SlideButton changeSlide={changeSlide} isBtnDisabled={isBtnDisabled} direction="prev" />
                <SlideButton changeSlide={changeSlide} isBtnDisabled={isBtnDisabled} direction="next" />
            </div>
            <SlideIndicator images={images} displayIndex={displayIndex} goToSlide={goToSlide} />
        </div>
    )
}
