import "@styles/global.css"
import Header from "@components/common/Header"
import localFont from "next/font/local"

const pretendard = localFont({
    src: "../../public/fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "45 920",
    variable: "--font-pretendard",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${pretendard.variable}`}>
            <body className={pretendard.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
