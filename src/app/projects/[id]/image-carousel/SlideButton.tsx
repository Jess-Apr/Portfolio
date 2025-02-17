import LeftChevronIcon from "@assets/icons/ic_project-detail_chevron_left.svg"
import RightChevronIcon from "@assets/icons/ic_project-detail_chevron_right.svg"

interface SlideButtonProps {
    changeSlide: (direction: "prev" | "next") => void
    isBtnDisabled: boolean
    direction: "prev" | "next"
}

export default function SlideButton({ changeSlide, isBtnDisabled, direction }: SlideButtonProps) {
    return (
        <button
            type="button"
            className={`absolute top-1/2 py-6 px-2 bg-gray-700 opacity-80 rounded-full hover:bg-gray-600 transition-colors duration-100 transform -translate-y-1/2 ${direction === "prev" ? "left-3" : "right-3"}`}
            onClick={() => changeSlide(direction)}
            disabled={isBtnDisabled}
        >
            {direction === "prev" ? <LeftChevronIcon /> : <RightChevronIcon />}
        </button>
    )
}
