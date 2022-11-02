import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from '../../data.json';
import "../../font/AppFont.css";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Noto Serif KR';
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
`;

const Container = styled.div`
    width: 100%;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const TitleContain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background: ${(props) => props.theme.MainColor};
`

const MainTitleText = styled.p`
    display: flex;
    align-items: flex-start;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    padding: 30px 120px;
    color: white;
    margin-top: 20px;
    text-shadow: 0 0 5px rgba(35, 35, 35, 0.7);
`;

const Hello = styled.p`
    font-size: 20px;
    color: white;
    padding: 30px 120px;
    margin-bottom: 10px;
`;

const ButtonContain = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    margin: 20px;
`

const PostContain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

function MainPage({userName, posts, dummyPost}) {
    const navigate = useNavigate();
    //const userName = useState(() => {JSON.stringify(window.localStorage.getItem("userName"))});

const onClickLink = (item) => {
  navigate(`/post/${item.id}`);
}

    return (
        <Wrapper>
            <Container>
                <TitleContain>
                    {dummyPost}
                    <MainTitleText>째잉이 미니 블로그</MainTitleText>
                    <Hello>{userName}님, 안녕하세요.</Hello>
                </TitleContain>

                <ButtonContain>
                    <Button
                        title="글 작성하기"
                        onClick={() => {
                            navigate("/post-write");
                        }}
                    />
                </ButtonContain>
                
                <PostContain>
                    <PostList
                        posts={posts}
                        onClickItem={onClickLink}
                    />
                </PostContain>
            </Container>
        </Wrapper>
    );
}

export default MainPage;