import localFont from "next/font/local"
import Header from "@components/common/header"
import "@styles/global.css"

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
                <div className="w-full min-h-full flex justify-center items-center pt-[108px] pb-10 px-6 sm:px-12">
                    {children}
                </div>
            </body>
        </html>
    )
}
