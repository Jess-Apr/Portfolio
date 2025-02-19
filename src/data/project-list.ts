type projectListType = { title: string; desc: string; image: string; path: string }

export const projectList: projectListType[] = [
    {
        title: "Site Scoop",
        desc: "사용자가 지정한 웹 페이지의 테이블을 감지하여 동적 크롤링 후, 데이터를 엑셀 파일로 다운로드할 수 있게 해주는 크롬 확장 프로그램",
        image: "/images/sitescoop_logo.svg",
        path: "/projects/sitescoop",
    },
    {
        title: "Lingpick",
        desc: "여러 웹사이트와 앱의 링크를 모아서 저장/관리할 수 있고, 인공지능이 저장된 링크를 분석하여 관련 상품을 추천해주는 모바일 앱",
        image: "/images/lingpick_logo.png",
        path: "/projects/lingpick",
    },
    {
        title: "PinnFlag",
        desc: "외국인들에게 한국 현지 가이드의 여행상품을 판매하고, 여행 정보를 공유할 수 있는 커뮤니티를 제공해주는 플랫폼",
        image: "/images/pinnflag_logo.png",
        path: "/projects/pinnflag",
    },
    {
        title: "DayGrid",
        desc: "달력에 일정을 남기거나 디데이 설정을 하여 일정 관리를 할 수 있고, 원하는 날짜에 다이어리를 작성하여 기록할 수 있는 캘린더 웹 어플리케이션",
        image: "/images/daygrid_logo.svg",
        path: "/projects/daygrid",
    },
]
