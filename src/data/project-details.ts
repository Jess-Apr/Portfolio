export type TaskType = {
    title: string
    subtasks?: TaskType[]
}

export type ProjectDetail = {
    title: string
    type: string
    links?: {
        iconType: string
        name: string
        path: string
    }[]
    info: {
        desc: string
        period: string
        participants: string
        role: string
    }
    techStacks: string[]
    tasks: TaskType[]
    improvements?: TaskType[]
    images: string[]
}

export const sitescoop: ProjectDetail = {
    title: "Site Scoop",
    type: "회사 프로젝트",
    info: {
        desc: "사용자가 지정한 웹 페이지의 테이블을 감지하여 동적 크롤링 후, 데이터를 엑셀 파일로 다운로드할 수 있게 해주는 크롬 확장 프로그램",
        period: "2025.01 ~ 진행중",
        participants: "프론트엔드 1인, 백엔드 1인",
        role: "프론트엔드 개발",
    },
    techStacks: ["TypeScript", "React", "Jotai", "Tailwind CSS", "Jest"],
    tasks: [
        {
            title: "<strong>종단간 암호화(E2EE)</strong> 구현",
            subtasks: [
                {
                    title: "개인정보가 포함된 데이터를 <strong>AES 알고리즘</strong>으로 암호화한 후, <strong>AES 키</strong>는 서버의 <strong>RSA Public Key</strong>로 암호화하여 전달",
                },
                {
                    title: "응답 데이터 암호화가 필요한 경우, 클라이언트에서 <strong>RSA 키를 생성</strong>하고 요청 헤더에 <strong>Public Key</strong>를 포함하여 전송",
                },
                {
                    title: "암·복호화 로직을 Axios Interceptor에 구현하여 모든 요청과 응답에서 자동으로 암·복호화가 수행되도록 설정",
                },
            ],
        },
        {
            title: "브라우저 동작 제어 로직 구현",
            subtasks: [
                {
                    title: "Chrome Extension의 Content Script를 활용하여 사용자가 크롤링할 테이블을 직접 선택할 수 있도록 기능 제공",
                },
            ],
        },
        {
            title: "웹 크롤링 기능 개발",
            subtasks: [
                {
                    title: "다양한 웹사이트의 테이블 패턴을 분석하여 최대한 많은 페이지에서 크롤링이 가능하도록 구현",
                },
                {
                    title: "페이지네이션 버튼을 감지하여 자동으로 페이지를 이동하며 여러 페이지를 크롤링할 수 있도록 개발",
                },
            ],
        },
        {
            title: "데이터 필터링 기능 개발",
            subtasks: [
                {
                    title: "사용자가 원하는 키워드를 기준으로 <strong>포함(AND), 선택(OR), 제외(NOT)</strong> 조건을 설정할 수 있는 필터링 로직 구현",
                },
            ],
        },
        {
            title: "핵심 로직의 <strong>단위 테스트</strong> 수행",
            subtasks: [
                {
                    title: "암·복호화 로직 모듈화 및 테스트",
                    subtasks: [
                        {
                            title: "단위 테스트가 가능하도록 암·복호화 로직을 <strong>독립적인 모듈<strong>로 분리",
                        },
                        {
                            title: "다양한 데이터 구조를 테스트하여 <strong>중첩된 구조<strong>의 데이터도 정상적으로 암·복호화되는지 검증",
                        },
                    ],
                },
                {
                    title: "데이터 필터링 로직 테스트",
                    subtasks: [
                        {
                            title: "다양한 필터링 조건 조합에서도 필터링이 정상적으로 적용되는지 단위 테스트 수행",
                        },
                    ],
                },
            ],
        },
    ],
    images: [
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/sitescoop1.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/sitescoop2.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/sitescoop3.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/sitescoop4.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/sitescoop5.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/sitescoop6.png`,
    ],
}

export const lingpick: ProjectDetail = {
    title: "Lingpick",
    type: "회사 프로젝트",
    links: [
        {
            iconType: "link",
            name: "App Store",
            path: "https://apps.apple.com/kr/app/%EB%A7%81%ED%94%BD/id6739575926",
        },
    ],
    info: {
        desc: "여러 웹사이트와 앱의 링크를 모아서 저장/관리할 수 있고, 인공지능이 저장된 링크를 분석하여 관련 상품을 추천해주는 모바일 앱",
        period: "2024.08 ~ 2025.01",
        participants: "프론트엔드 1인, 백엔드 1인",
        role: "프론트엔드 개발",
    },
    techStacks: ["TypeScript", "React Native", "Recoil", "TanStack Query"],
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
            title: "웹 크롤링 기능 개선",
            subtasks: [
                {
                    title: "Swift, Kotlin 코드로 구현되어있던 크롤링 기능을 <strong>타입스크립트 코드로 통합하여 유지보수성 높임</strong>",
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
                    title: "React Native의 <strong>Native Module</strong> 기능을 활용, 네이티브 코드에서 받은 데이터를 React Native로 전송하여 타입스크립트 기뱐의 웹 크롤링 로직을 거칠 수 있도록 함",
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
                    title: "<strong>문제:</strong> 좋아요 버튼 클릭 시, 좋아요 수를 업데이트 하기 위해 무한 스크롤의 모든 링크를 다시 불러오는 과정에서 딜레이 발생",
                },
                {
                    title: "<strong>해결:</strong> 실시간 데이터 반영보다는 빠른 피드백이 중요하다고 판단. Tanstack Query의 Optimistic Updates 기능을 사용해 좋아요가 눌린 링크의 숫자만 변경.",
                },
                {
                    title: "<strong>성과:</strong>",
                    subtasks: [
                        {
                            title: "피드에서 좋아요 클릭 후 사용자 액션이 반응되기까지 <strong>기존 1070ms에서 36ms</strong>로 개선",
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
                    title: "<strong>문제:</strong> 스크롤 시 리스트의 모든 아이템이 재렌더링되어 성능 저하 발생",
                },
                {
                    title: "<strong>해결:</strong>",
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
                    title: "<strong>성과:</strong> 추가된 아이템만 렌더링하도록 최적화해 무한스크롤 성능 개선",
                },
            ],
        },
        {
            title: "검색 페이지 무한 로딩 문제 해결",
            subtasks: [
                {
                    title: "<strong>문제:</strong> 검색 키워드 입력 후 스크롤 시 Masonry List의 커스텀 태그에서 API 요청 스크롤 이벤트가 중복 발생하여 무한 로딩 현상 발생",
                },
                {
                    title: "<strong>원인:</strong> Masonry List 구조는 열 높이가 달라 onEndReached가 각 열의 끝을 계산하는 과정에서 스크롤 이벤트가 반복적으로 트리거될 수 있음",
                },
                {
                    title: "<strong>해결:</strong>",
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
                    title: "<strong>성과:</strong> 중복 API 요청을 방지하고 무한 로딩 문제를 해결해 검색 페이지의 안정성과 성능 개선",
                },
            ],
        },
    ],
    images: [
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/lingpick1.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/lingpick2.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/lingpick3.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/lingpick4.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/lingpick5.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/lingpick6.png`,
    ],
}

export const pinnflag: ProjectDetail = {
    title: "PinnFlag",
    type: "회사 프로젝트",
    info: {
        desc: "외국인들에게 한국 현지 가이드의 여행상품을 판매하고, 여행 정보를 공유할 수 있는 커뮤니티를 제공해주는 플랫폼",
        period: "2024.03 ~ 진행중",
        participants: "프론트엔드 1인, 백엔드 1인",
        role: "프론트엔드 개발",
    },
    techStacks: ["TypeScript", "React", "Recoil", "Styled-components", "Jest"],
    tasks: [
        {
            title: "<strong>프론트엔드 개발 전반을 주도</strong>하며 작업을 수행",
            subtasks: [
                {
                    title: "커뮤니티 게시판, 여행상품 판매 페이지, 관리자 페이지 등 약 30여 개의 화면을 설계 및 구현",
                },
                {
                    title: "회원가입/로그인, 게시글 및 댓글 CRUD, 카테고리 조회 등 주요 기능에 대한 백엔드 API 연동 작업 진행",
                },
                {
                    title: "클라이언트와 직접 소통하며 요구 사항을 반영하고, UI/UX 개선을 제안 및 적용하여 사용자 경험 최적화",
                },
            ],
        },
        {
            title: "<strong>관심사 분리 원칙</strong>을 고려한 구조적 설계",
            subtasks: [
                {
                    title: "MVVM 패턴을 적용하여 뷰 로직과 비즈니스 로직을 분리",
                    subtasks: [
                        {
                            title: "Model: 데이터를 가공하는 비즈니스 로직 처리",
                        },
                        {
                            title: "ViewModel: Model에서 가공된 데이터를 View에 전달하고, API 호출과 상태 관리 수행",
                        },
                        {
                            title: "View: UI를 구성하고 ViewModel로부터 받은 데이터를 표시하며, 사용자의 입력을 ViewModel로 전달",
                        },
                    ],
                },
                {
                    title: "각 파일은 300줄 이하, 함수는 20줄 이하로 제한하여 코드 가독성을 높이고, 책임 분리를 명시적으로 적용",
                },
            ],
        },
        {
            title: "Jest를 사용하여 ViewModel과 Model 레이어의 <strong>단위 테스트 수행</strong>",
        },
        {
            title: "i18next 라이브러리를 사용하여 <strong>다국어 지원 기능 제공</strong>",
            subtasks: [
                {
                    title: "각 언어에 대응하는 키-언어 쌍을 가진 JSON 번역 파일을 기반으로 동적으로 콘텐츠를 렌더링할 수 있도록 설계",
                },
                {
                    title: "언어 전환 시에도 일관된 UI/UX를 제공하여 글로벌 사용자 경험 최적화",
                },
            ],
        },
        {
            title: "개발자가 아닌 클라이언트와의 <strong>원활한 소통을 위한 시각적 자료 제작</strong>",
            subtasks: [
                {
                    title: "UI 수정을 제안할 때 Figma로 수정 사항이 적용된 화면을 그린 후 제안 사항과 함께 전달",
                },
                {
                    title: "복잡한 코드의 흐름을 플로우 차트로 제작하여 코드를 더욱 쉽게 이해할 수 있도록 함",
                },
            ],
        },
        {
            title: "효율적인 협업을 위한 <strong>작업 우선순위 문서화 도입 및 적용</strong>",
            subtasks: [
                {
                    title: "클라이언트, 프론트엔드, 백엔드 간 우선순위 불일치로 인한 작업 지연 문제를 해결하기 위해 문서화 프로세스 제안 및 실행",
                },
                {
                    title: "Google Docs를 활용해 구성원들이 각자의 작업 우선순위를 공유하고, 주간 미팅에서 이를 기반으로 작업 순서 조정 및 진행 상황 점검",
                },
                {
                    title: "클라이언트와 약속된 기능의 누락을 줄이고, 개발 진행 속도를 향상시켜 마일스톤 목표를 안정적으로 달성",
                },
            ],
        },
    ],
    images: [
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/pinnflag1.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/pinnflag2.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/pinnflag3.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/pinnflag4.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/pinnflag5.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/pinnflag6.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/pinnflag7.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/pinnflag8.png`,
    ],
}

export const daygrid: ProjectDetail = {
    title: "DayGrid",
    type: "팀 프로젝트",
    links: [
        {
            iconType: "github",
            name: "Github",
            path: "https://github.com/Jess-Apr/DayGrid",
        },
    ],
    info: {
        desc: "달력에 일정을 남기거나 디데이 설정을 하여 일정 관리를 할 수 있고, 원하는 날짜에 다이어리를 작성하여 기록할 수 있는 캘린더 웹 어플리케이션",
        period: "2023.10 ~ 2023.11",
        participants: "풀스택 개발 2인",
        role: "프론트엔드 개발, 백엔드 개발, 프로젝트 기획 및 디자인",
    },
    techStacks: ["TypeScript", "React", "Redux Toolkit", "Tanstack Query", "Node.js", "Express", "MySQL"],
    tasks: [
        {
            title: "<strong>Access token</strong>과 <strong>Refresh token<strong>을 활용한 유저 인증 로직 구현",
            subtasks: [
                {
                    title: "Axios 인터셉터를 이용하여 각 요청마다 Access token을 자동 삽입하며, 토큰 만료 시 Refresh token으로 토큰 재발급을 받을 수 있도록 설정",
                },
                {
                    title: "보안 강화를 위한 토큰 설정",
                    subtasks: [
                        {
                            title: "Access token은 외부 접근이 어려운 로컬 변수에, Refresh token은 브라우저에서 접근이 불가능한 HTTP Only Cookies에 저장",
                        },
                        {
                            title: "Access token의 유효기간을 1시간으로 짧게 설정하여, 토큰이 악용될 가능성을 최소화",
                        },
                        {
                            title: "Refresh token은 Access token 만료 시에만 서버로 전송하여 토큰 탈취 위험을 줄임",
                        },
                    ],
                },
            ],
        },
        {
            title: "외부 라이브러리를 사용하지 않고 달력 기능 구현",
            subtasks: [
                {
                    title: "월간 달력은 grid, 주간 달력은 flex를 활용하여 구현",
                },
            ],
        },
        {
            title: "TanStack Query를 사용하여 마이페이지의 서버 데이터를 효율적으로 관리",
            subtasks: [
                {
                    title: "쉽게 변하지 않는 유저 정보는 시간 제한 없이 캐싱하여 불필요한 fetching을 방지",
                },
                {
                    title: "사용자 정보가 수정되었을 경우, useMutation을 통해 서버 데이터를 업데이트하고, 캐시 데이터를 무효화하여 서버로부터 최신 데이터를 새로 가져오도록 설정",
                },
            ],
        },
        {
            title: "일정을 날짜별로 파악할 수 있는 일정 관리 기능 구현",
            subtasks: [
                {
                    title: "일정을 생성할 경우, 각 일정의 날짜와 시간에 맞추어 달력에 일정 표시가 생성될 수 있도록 설계",
                },
                {
                    title: "일정 표시의 position을 absolute로 설정하고, 날짜와 시간에 따라 left와 top 속성을 조정하여 표시",
                },
            ],
        },
        {
            title: "<strong>서버 구축, 데이터베이스 연동 및 API 작성</strong>",
            subtasks: [
                {
                    title: "API 작성 시에는 자원과 행위를 명확하게 표현한 <strong>RESTful API</strong>로 작성",
                },
            ],
        },
        {
            title: "CRA를 사용하지 않고, <strong>Webpack과 Babel을 설정</strong>하여 프론트엔드 개발 환경 세팅",
        },
    ],
    improvements: [
        {
            title: "달력 일정 카드 UI 개선",
            subtasks: [
                {
                    title: "<strong>문제:</strong> 같은 날짜에 일정을 여러개 등록할 경우, 달력에 생성된 일정 카드가 다른 일정 카드를 가리는 현상 발생",
                },
                {
                    title: "<strong>해결:</strong>",
                    subtasks: [
                        {
                            title: "각 일정 카드의 z-index 값을 시간이 길수록 낮게, 짧을수록 높게 주어 시간이 긴 일정일수록 뒤로 배치",
                        },
                        {
                            title: "일정 시작 시간이 같은 일정이 여러개일 경우, '1/일정갯수'의 길이로 일정 카드 너비 축소",
                        },
                    ],
                },
            ],
        },
        {
            title: "CORS 에러 해결",
            subtasks: [
                {
                    title: "<strong>원인:</strong> CORS 에러는 브라우저의 동일 출처 정책으로 인해 발생. 서버와 브라우저의 출처가 달라 접근이 제한되었음.",
                },
                {
                    title: "<strong>해결:</strong>",
                    subtasks: [
                        {
                            title: "Access-Control-Allow-Origin에 브라우저의 출처를 명시하여 브라우저의 접근을 허용하도록 설정",
                        },
                        {
                            title: "답 헤더의 Access-Control-Allow-Credentials 옵션을 true로 설정하여, 브라우저가 응답에 접근 가능하도록 하였음",
                        },
                        {
                            title: "Access-Controls-Allow-Methods에 브라우저에서 자원을 접근할 때 사용하는 모든 메서드를 명시하여, HTTP 메서드에 상관 없이 접근을 허용",
                        },
                    ],
                },
            ],
        },
        {
            title: "검색 페이지 무한 로딩 문제 해결",
            subtasks: [
                {
                    title: "<strong>문제:</strong> 검색 키워드 입력 후 스크롤 시 Masonry List의 커스텀 태그에서 API 요청 스크롤 이벤트가 중복 발생하여 무한 로딩 현상 발생",
                },
                {
                    title: "<strong>원인:</strong> Masonry List 구조는 열 높이가 달라 onEndReached가 각 열의 끝을 계산하는 과정에서 스크롤 이벤트가 반복적으로 트리거될 수 있음",
                },
                {
                    title: "<strong>해결:</strong>",
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
                    title: "<strong>성과:</strong> 중복 API 요청을 방지하고 무한 로딩 문제를 해결해 검색 페이지의 안정성과 성능 개선",
                },
            ],
        },
    ],
    images: [
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/daygrid1.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/daygrid2.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/daygrid3.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/daygrid4.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/daygrid5.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/daygrid6.png`,
        `${process.env.NEXT_PUBLIC_BASE_PATH}/images/daygrid7.png`,
    ],
}
