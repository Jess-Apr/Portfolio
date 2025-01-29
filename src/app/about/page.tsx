import Image from "next/image"
import AboutTitle from "./AboutTitle"
import ProfileImage from "@assets/images/profile_image.png"
import Introduction from "./Introduction"
import PersonalInfo from "./PersonalInfo"

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full min-h-full justify-center items-center pt-[108px] pb-10 px-12 md:px-28 lg:px-40 xl:px-64">
            <div className="flex justify-center items-center gap-10">
                <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-lg">
                    <Image
                        src={ProfileImage}
                        alt="아이디어를 떠올린 모습의 아바타"
                        className="absolute w-60 h-60 object-none"
                        style={{ top: "-8px", left: "-10px" }}
                    />
                </div>
                <AboutTitle />
            </div>
            <Introduction />
            <PersonalInfo />
        </div>
    )
}
