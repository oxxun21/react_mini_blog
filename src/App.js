import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import LogIn from "./component/page/LogIn";
import { ThemeProvider } from "styled-components";
import Button from "./component/ui/Button";

const defalutTheme = {
    bgColor: "#FFECEF",
    textColor: "black",
    BtnColor: "#372948"
}

const darkMode = {
    bgColor: "#251B37",
    textColor: "#FFECEF",
    BtnColor: "#FFCACA"
}

function App(props) {
    const [ isDark, setIsDark ] = useState(false)

    return (
        <BrowserRouter>
            <ThemeProvider theme={isDark ? darkMode : defalutTheme}>
            <Button onClick={() => setIsDark((prev) => !prev)} />

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