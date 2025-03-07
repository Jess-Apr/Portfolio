import GithubIcon from "@assets/icons/ic_project-detail_github.svg"
import LinkIcon from "@assets/icons/ic_project-detail_link.svg"

interface ProjectLinkProps {
    links?: {
        iconType: string
        name: string
        path: string
    }[]
}

export default async function ProjectLink({ links }: ProjectLinkProps) {
    if (!links) return null

    return (
        <div className="flex items-center gap-2">
            {links.map((link) => (
                <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-600 hover:underline"
                >
                    {link.iconType === "github" ? <GithubIcon /> : <LinkIcon />}
                    {link.name}
                </a>
            ))}
        </div>
    )
}
