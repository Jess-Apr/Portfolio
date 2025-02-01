import AboutTitle from "./AboutTitle"
import Introduction from "./Introduction"
import PersonalInfo from "./PersonalInfo"

export default function AboutPage() {
    return (
        <div className="w-full min-h-full flex justify-center items-center pt-[108px] pb-10 px-6 sm:px-12">
            <div className="max-w-4xl flex flex-col item-center">
                <AboutTitle />
                <Introduction />
                <PersonalInfo />
            </div>
        </div>
    )
}
