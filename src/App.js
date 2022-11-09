import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import LogIn from "./component/page/LogIn";
import Button from "./component/ui/Button";

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

const BtnContain = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 10px;
`

function App(props) {
    const [ isDark, setIsDark ] = useState(false)

    const [postItems, setPostItems] = useState([
        {
          id : "1",
          title: "블로그를 만들면서 느낀점",
          date: "2022월 10월 28일",
          contents: "다른 컴포넌트에서 뭘 가져오고 그런게에 대한 이해가 하나도 안됐다. 자바스크립트 공부 다시해야될 듯\n그냥 기본 개념 공부를 다 다시해야될 것 같다. 할 일 짱 많아 강의 보면서 다시 초심찾을게여. 나도 잘하고 싶다 리엑트 흑흑 ",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"실제로 개발하다보면 map함수를 진짜 많이 쓰는 것 같아요😄",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"적용해보니 코드가 정말 간결해지네요ㅎㅎ",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"key를 꼭 넣어줘야 하는군요",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"생산성이 확 올라가는 느낌입니다ㅋㅋ",
          }
          ]
        },
        {
            id : "2",
          title: "조건부 렌더링이란?",
          date: "2022년 10월 21일",
          contents: "조건부 렌더링은 말 그대로 조건에 따라서 렌더링을 다르게 한다는 의미\n▪️ Truthy : True는 아니지만 True로 여겨지는 값\n→ { }, [ ], number(not zero), string(not empty)\n▪️Falsy : False는 아니지만 False로 여겨지는 값\n→ 0, -0, 0n(bigInt zero), empty string, null, undefined, NaN\n\n❓ Element Variables : 리액트 element를 변수처럼 다룰 수 있는 것\n\n❓ Inline Condition : 조건문을 코드 안에 집어넣는 것\n\nInline if ) if는 && 연산자로 표현\nInline if else ) if else는 ? 삼항 연산자로 표현\ncomponent 렌더링을 막고 싶다면 null를 리턴시킨다.\n→ 클래스 컴포넌트 렌더 함수에서 null를 리턴하는 것은 컴포넌트 생명주기에 영향을 미치지 않는다.",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"이렇게 사용하는 방법이 있었군요!",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"좋은 글 감사합니다ㅎㅎ",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"항상 ?만 사용했었는데, 이제 &&도 사용해봐야 겠네요.",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"쉬운 설명 감사드립니다😁",
          }
          ]
        },
        {
            id : "3",
          title: "HOOK HOOK",
          date: "2022월 10월 10일",
          contents: "Hook은 리액트의 함수 컴포넌트의 흐름에 끼어들어서 다양한 작업들을 처리하기 위해서 사용\n함수 컴포넌트에서 state, lifecycle, 최적화와 관련된 함수들이다.\nHook은 모두 use로 시작한다. ",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"뭔가 어려운 개념이었는데, 글을 읽고 조금 정리가 된 것 같습니다.",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"Hook이 뭔가 했더니 이런거였군요. 알려주셔서 감사합니다ㅎㅎ",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"처음에 훅을 접했을 때 너무 어려웠는데 감사합니다!👍",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"이름부터 너무 어려운 훅...🥲",
          }
          ]
        },
        {
            id : "4",
          title: "Component : prop 속성에 맞춰 화면에 나타낼 element를 만듬!",
          date: "2022월 10월 1일",
          contents: "Component 이름은 항상 대문자로 시작해야 한다.\n❓ Prop : 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터이다.\n▪️ Props는 다양한 정보를 담고 있는 자바스크립트 객체\n▪️ 모든 리액트 컴포넌트는 Props를 직접 바꿀 수 없고, 같은 Props에 대해서는 항상 같은 결과(element)를 보여주어야 한다.",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"헷갈렸던 개념을 확실히 이해할 수 있어서 좋네요ㅋㅋ",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"컴포넌트에 대한 쉬운 설명 감사드려요👏",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"컴포넌트를 제대로 이해하지 않은 상태로 사용하기만 했는데 확실히 개념을 잡을 수 있어서 좋습니다!👍",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"리액트는 컴포넌트 기반이라서 재사용성도 높고 정말 좋은것 같아요",
          }
          ]
        },
        {
            id : "5",
          title: "리액트가 뭘까?",
          date: "2022월 9월 25일",
          contents: "사용자 인터페이스를 위한 자바스크립트 라이브러리\n❓ 라이브러리 : 자주 사용되는 기능들을 모아두는 것\n❓ 사용자 인터페이스 (User Interface, UI) : 사용자와 프로그램 간의 상호작용, 중간에서 입출력을 제어화면을 만들기 위한 기능들을 모아둔 것\n✔️ 프레임워크와 라이브러리의 차이\n프레임워크는 제어권한이 프레임워크에게 있지만, 라이브러리는 제어권한이 개발자에게 있다.\n대표적인 프레임워크는 앵귤러, Vue.js가 있고 라이브러리는 리액트이다.\n리액트는 SPA를 만들어 주는 도구\n❓ SPA : 싱글페이지 애플리케이션 : 하나의 페이지만 존재\n✔️ 장점\n빠른 업데이트와 렌더링 속도 : Virtual DOM(가상의 돔)을 사용\n재사용성 : 모듈 간의 의존성이 낮음, 개발 기간의 단축, 유지보수의 용이\nReact Native : 모바일 환경 개발에 용이",
          comments: [{
            commentId : "1",
            commentDate: "2022년 10월 31일",
            comment:"강의 너무 좋아요~!",
          },{
           commentId : "2",
            commentDate: "2022년 11월 31일",
            comment:"초보자도 쉽게 이해할 수 있어서 좋습니다😃",
          },{
            commentId: "3",
            commentDate: "2022년 12월 31일",
            comment:"실습도 따라하면서 하는데 좋아요",
          },{
            commentId : "4",
            commentDate: "2022년 12월 31일",
            comment:"리액트 너무 어려워요ㅠㅠ😂",
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
            <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
              <BtnContain>
                <Button title="테마 변경" onClick={() => setIsDark((prev) => !prev)} />
              </BtnContain>
            
            <Routes>
                <Route index element={<LogIn posts={postItems} />} />
                <Route path="/main-pages" element={<MainPage posts={postItems} />} />
                <Route path="/post-write" element={<PostWritePage />} />
             
                <Route path="post/:postId" element={<PostViewPage posts={postItems} onCommentHandler={commentUpdate} />} />
            </Routes>
            </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;