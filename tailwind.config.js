/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // 기본 색상
                primary: "#1671A2", //  주로 UI의 주요 요소에 사용되며, 버튼, 텍스트, 아이콘과 같은 중요한 요소에 적용됩니다.
                secondary: "#202937",

                // 배경 색상
                background: {
                    default: "#f6f8fa", // 밝은 회색 계열, 기본 배경
                    dark: "#1c1e21", // 어두운 회색 계열, 다크 모드 배경
                },

                // 텍스트 색상
                text: {
                    primary: "#333", // 진한 회색, 기본 텍스트
                    secondary: "#586069", // 밝은 회색, 보조 텍스트
                    dark: "#adbac7", // 다크 모드 텍스트 색상
                },

                // 액센트 색상
                accent: {
                    blue: "#0366d6", // 링크 및 강조 텍스트
                    green: "#28a745", // 성공 메시지 또는 확인 버튼
                    red: "#d73a49", // 오류 메시지 또는 경고 버튼
                },
            },
        },
    },

    plugins: [],
};
