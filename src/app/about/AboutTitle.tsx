import Image from "next/image"
import ProfileImage from "@public/assets/images/profile_image.png"

export default function AboutTitle() {
    return (
        <div className="flex justify-center items-center gap-10">
            <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-lg hidden lg:block">
                <Image
                    src={ProfileImage}
                    alt="아이디어를 떠올린 모습의 아바타"
                    className="absolute w-60 h-60 object-none"
                    style={{ top: "-8px", left: "-10px" }}
                />
            </div>
            <h1 className="flex flex-col flex-1 items-start text-4xl md:text-5xl font-extralight leading-tight">
                <span>안녕하세요,</span>
                <span>
                    프론트엔드 개발자 <span className="font-medium">한재연</span>입니다.
                </span>
            </h1>
        </div>
    )
}
