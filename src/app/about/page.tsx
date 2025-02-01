import AboutTitle from "./AboutTitle"
import Introduction from "./Introduction"
import PersonalInfo from "./PersonalInfo"

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full min-h-full justify-center items-center pt-[108px] pb-10 px-12 md:px-28 lg:px-40 xl:px-64">
            <AboutTitle />
            <Introduction />
            <PersonalInfo />
        </div>
    )
}
