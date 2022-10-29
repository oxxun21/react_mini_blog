import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";

// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import LogIn from "./component/page/LogIn";
import { ThemeProvider } from "styled-components";
import Button from "./component/ui/Button";

// const BtnContain = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     margin: 20px 40px;
// `

const defalutTheme = {
    bgColor: "white",
    textColor: "black",
    BtnColor: "#bbdefb",
    MainColor: "#82afe6",
    borderColor: "#82afe6",
}

const darkMode = {
    bgColor: "#484848",
    textColor: "#fefefe",
    BtnColor: "#212121",
    MainColor: "#212121",
    borderColor: "white",
}

function App(props) {
    const [ isDark, setIsDark ] = useState(false)

    return (
        <BrowserRouter>
            <ThemeProvider theme={isDark ? darkMode : defalutTheme}>
            <></><Button title="테마 변경" onClick={() => setIsDark((prev) => !prev)} />

            <Routes>
                <Route index element={<LogIn />} />
                <Route path="main-pages" element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>

            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;

// 테마 컴포넌트 화면 안에 같이 넣기
// 테마 완성
// 추가, 삭제 > 할 수 있으면 하고 싶다
// 사용자 이름 로컬스토리지 저장, 기억