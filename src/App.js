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

  
    const [postItems, setPostItems] = useState([
        {
          id : "1",
          title: "10월 26일 일기",
          date: "2022년 10월 26일",
          contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"빡빡이",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"빡빡2",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이3",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이4",
          }
          ]
        },
        {
            id : "2",
          title: "10월 21일 일기",
          date: "2022년 10월 21일",
          contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"빡빡이",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"빡빡2",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이3",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이4",
          }
          ]
        },
        {
            id : "3",
          title: "10월 25일 일기",
          date: "2022년 10월 25일",
          contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"빡빡이",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"빡빡2",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이3",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이4",
          }
          ]
        },
        {
            id : "4",
          title: "10월 24일 일기",
          date: "2022년 10월 24일",
          contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"빡빡이",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"빡빡2",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이3",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이4",
          }
          ]
        },
        {
            id : "5",
          title: "10월 23일 일기",
          date: "2022년 10월 23일",
          contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"빡빡이",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"빡빡2",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이3",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"빡빡이4",
          }
          ]
        },
      ]);

      const commentUpdate = (object) =>{
      
        let newCommnet ={
          commentId : object.commentId,
          commentDate: object.commentDate,
          comment: object.comment
        }

      let oldData = [...postItems];

     oldData[object.postId].comments = oldData[object.postId].comments.concat(newCommnet)
              
    setPostItems(oldData);
        
    }
    
    return (
        <BrowserRouter>
            <ThemeProvider theme={isDark ? darkMode : defalutTheme}>
            <></><Button title="테마 변경" onClick={() => setIsDark((prev) => !prev)} />

            <Routes>
                <Route index element={<LogIn />} />
                <Route path="main-pages" element={<MainPage posts={postItems} />} />
                <Route path="post-write" element={<PostWritePage />} />
             
                <Route path="post/:postId" element={<PostViewPage posts={postItems} onCommentHandler={commentUpdate} />} />
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