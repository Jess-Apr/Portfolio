import EmailIcon from "@assets/icons/ic_email.svg"
import GithubIcon from "@assets/icons/ic_github.svg"
import VelogIcon from "@assets/icons/ic_velog.svg"

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
                    className="hover:opacity-80 transition-opacity"
                >
                    <GithubIcon />
                </a>

                <a
                    href="https://velog.io/@jess_apr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                >
                    <VelogIcon />
                </a>
            </div>
        </div>
    )
}
