import EmailIcon from "@assets/icons/ic_about_email.svg"
import GithubIcon from "@assets/icons/ic_about_github.svg"
import VelogIcon from "@assets/icons/ic_about_velog.svg"

export default function PersonalInfo() {
    return (
        <div className="flex flex-col items-center gap-2 mt-10">
            <div className="flex items-center gap-2 text-lg font-light">
                <EmailIcon />
                <span>jessie1944@naver.com</span>
            </div>
            <div className="flex items-center gap-4">
                <a
                    href="https://github.com/Jess-Apr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity duration-300"
                >
                    <GithubIcon />
                </a>

                <a
                    href="https://velog.io/@jess_apr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity duration-300"
                >
                    <VelogIcon />
                </a>
            </div>
        </div>
    )
}
