"use client"

import { useRouter } from "next/navigation"
import BackArrowIcon from "@public/assets/icons/ic_project-detail_back-arrow.svg"

export default function BackButton() {
    const router = useRouter()

    const goToList = () => {
        if (window.history.length > 1) {
            router.back()
        } else {
            router.push("/projects")
        }
    }

    return (
        <button
            onClick={goToList}
            className="w-fit flex items-center gap-2 mb-4 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
        >
            <BackArrowIcon />
            목록으로
        </button>
    )
}
