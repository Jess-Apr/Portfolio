"use client"

import { useEffect, useState } from "react"
import SlideIndicator from "./SlideIndicator"
import SlideButton from "./SlideButton"
import ImageSlide from "./ImageSlide"

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [displayIndex, setDisplayIndex] = useState(1)
    const [transition, setTransition] = useState(true)
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)
    const items = ["1", "2", "3"]
    const extendedItems = [items[items.length - 1], ...items, items[0]]

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
            setDisplayIndex(items.length)
        } else if (currentIndex === extendedItems.length - 1) {
            setDisplayIndex(1)
        } else {
            setDisplayIndex(currentIndex)
        }

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
                <ImageSlide transition={transition} currentIndex={currentIndex} extendedItems={extendedItems} />
                <SlideButton changeSlide={changeSlide} isBtnDisabled={isBtnDisabled} direction="prev" />
                <SlideButton changeSlide={changeSlide} isBtnDisabled={isBtnDisabled} direction="next" />
            </div>
            <SlideIndicator items={items} displayIndex={displayIndex} goToSlide={goToSlide} />
        </div>
    )
}
