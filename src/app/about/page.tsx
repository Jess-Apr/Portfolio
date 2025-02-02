import AboutTitle from "./AboutTitle"
import Introduction from "./Introduction"
import PersonalInfo from "./PersonalInfo"

export default function AboutPage() {
    return (
        <div className="max-w-4xl flex flex-col item-center">
            <AboutTitle />
            <Introduction />
            <PersonalInfo />
        </div>
    )
}
