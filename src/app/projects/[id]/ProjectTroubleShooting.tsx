export default function ProjectTroubleShooting() {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">트러블 슈팅 경험</h2>
            <div className="space-y-6">
                <div className="p-4 border border-gray-300 rounded-lg">
                    <h3 className="text-lg font-medium">💡 문제: API 응답 속도가 느림</h3>
                    <p className="mt-2 text-gray-700">서버에서 데이터를 가져오는 속도가 느려, 로딩 지연이 발생...</p>
                </div>
                <div className="p-4 border border-gray-300 rounded-lg">
                    <h3 className="text-lg font-medium">💡 문제: 모바일에서 레이아웃 깨짐</h3>
                    <p className="mt-2 text-gray-700">미디어 쿼리를 추가하고, flex 기반으로 레이아웃을 수정...</p>
                </div>
            </div>
        </section>
    )
}
