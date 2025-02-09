export type TaskType = {
    title: string
    subtasks?: TaskType[]
}

export type ProjectDetail = {
    title: string
    info: {
        desc: string
        period: string
        participants: string
        role: string
    }
    techStack: string[]
    tasks: TaskType[]
    improvements?: TaskType[]
    troubleShooting?: TaskType[]
}

export const lingpick: ProjectDetail = {
    title: "Lingpick",
    info: {
        desc: "여러 웹사이트와 앱의 링크를 모아서 저장/관리할 수 있고, 인공지능이 저장된 링크를 분석하여 관련 상품을 추천해주는 모바일 앱",
        period: "2024.08 - 2025.01",
        participants: "프론트엔드 1인, 백엔드 1인",
        role: "프론트엔드 개발",
    },
    techStack: ["TypeScript", "React Native", "Recoil", "TanStack Query"],
    tasks: [
        {
            title: "기존에 만들어진 어플리케이션의 퍼포먼스 개선, 기능 추가, 어플리케이션의 UI를 변경하는 고도화 작업 진행",
        },
        {
            title: "Android 개발 환경 설정 및 빌드 환경 분리",
        },
        {
            title: "카카오톡, 네이버, 구글, 메타, 애플 소셜 로그인 기능 구현",
        },
        {
            title: "S3 이미지 업로드 로직 구현",
            subtasks: [
                {
                    title: "서버에서 S3 업로드 URL을 받아 이미지를 업로드한 뒤, 성공 시 S3로부터 받은 이미지 ID를 서버로 전송",
                },
            ],
        },
        {
            title: "웹 크롤링 기능 구현",
            subtasks: [
                {
                    title: "Swift, Kotlin 코드로 구현되어있던 크롤링 기능을타입스크립트 코드로 통합하여 유지보수성 높임",
                },
                {
                    title: "Cheerio 라이브러리를 사용하여 링크 데이터(제목, 내용, 위치, 이미지, 카테고리) 크롤링",
                },
            ],
        },
        {
            title: "링크 공유 기능 구현 (Android)",
            subtasks: [
                {
                    title: "앱 전환 없이 링크 저장 UI를 호출할 수 있도록 별도의 Activity를 Kotlin으로 구현",
                },
                {
                    title: "React Native의 Native Module 기능을 활용, 네이티브 코드에서 받은 데이터를 React Native로 전송하여 타입스크립트 기뱐의 웹 크롤링 로직을 거칠 수 있도록 함",
                },
                {
                    title: "링크 저장 페이지는 바텀시트 UI 스타일로 설계하여 사용자가 익숙하고 자연스러운 경험을 느낄 수 있도록 디자인",
                },
                {
                    title: "사용자가 외부 어플리케이션의 링크를 저장하려 할 때, Lingpick 앱으로 이동하지 않고 바로 저장 할 수 있도록 하여 사용자의 작업 흐름을 방해하지 않으면서도 직관적이고 원활한 앱 사용 경험 제공",
                },
            ],
        },
    ],
    improvements: [
        {
            title: "사용자 인터렉션 최적화",
            subtasks: [
                {
                    title: "문제: 좋아요 버튼 클릭 시, 좋아요 수를 업데이트 하기 위해 무한 스크롤의 모든 링크를 다시 불러오는 과정에서 딜레이 발생",
                },
                {
                    title: "해결: 실시간 데이터 반영보다는 빠른 피드백이 중요하다고 판단하여 Tanstack Query의 Optimistic Updates 기능을 사용해 좋아요가 눌린 링크의 숫자만 변경",
                },
                {
                    title: "성과:",
                    subtasks: [
                        {
                            title: "피드에서 좋아요 클릭 후 사용자 액션이 반응되기까지 기존 1070ms에서 36ms로 개선",
                        },
                        {
                            title: "사용자 액션에 대한 요청을 서버에 보내지 않고 클라이언트에서 즉각적으로 처리하여 서버 부하를 줄이고 리소스 소비 최적화",
                        },
                    ],
                },
            ],
        },
        {
            title: "무한스크롤 렌더링 최적화",
            subtasks: [
                {
                    title: "문제: 스크롤 시 리스트의 모든 아이템이 재렌더링되어 성능 저하 발생",
                },
                {
                    title: "해결:",
                    subtasks: [
                        {
                            title: "TanStack Query의 useInfiniteQuery를 활용해 데이터를 캐싱하고, 페이지 단위로 추가 데이터를 병합하여 기존 데이터 참조 유지",
                        },
                        {
                            title: "FlatList의 keyExtractor로 고유키를 설정하여 리스트 내 변화가 있는 부분만 렌더링",
                        },
                        {
                            title: "renderItem을 useCallback으로 감싸 부모 컴포넌트 리렌더링 시 함수 참조를 유지해 하위 컴포넌트의 불필요한 렌더링 방지",
                        },
                        {
                            title: "리스트 항목 컴포넌트를 React.memo로 감싸 props 데이터 변경이 없는 경우 리렌더링을 방지",
                        },
                    ],
                },
                {
                    title: "성과: 추가된 아이템만 렌더링하도록 최적화해 무한스크롤 성능 개선",
                },
            ],
        },
        {
            title: "검색 페이지 무한 로딩 문제 해결",
            subtasks: [
                {
                    title: "문제: 검색 키워드 입력 후 스크롤 시 Masonry List의 커스텀 태그에서 API 요청 스크롤 이벤트가 중복 발생하여 무한 로딩 현상 발생",
                },
                {
                    title: "원인: Masonry List 구조는 열 높이가 달라 onEndReached가 각 열의 끝을 계산하는 과정에서 스크롤 이벤트가 반복적으로 트리거될 수 있음",
                },
                {
                    title: "해결:",
                    subtasks: [
                        {
                            title: "Debouncing 함수를 구현하여 마지막 스크롤 이벤트 발생 후 200ms가 지나야 API 요청을 보내도록 설정",
                        },
                        {
                            title: "useInfiniteQuery의 isLoading 상태를 감지하여 로딩 중에는 추가 API 요청을 차단",
                        },
                    ],
                },
                {
                    title: "성과: 중복 API 요청을 방지하고 무한 로딩 문제를 해결해 검색 페이지의 안정성과 성능 개선",
                },
            ],
        },
    ],
}
