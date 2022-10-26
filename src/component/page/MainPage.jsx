import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from '../../data.json';

const Wrapper = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    border-bottom: 1px solid #77A1D3;
    padding: 16px;
`;

const Hello = styled.p`
    font-size: 16px;
    margin-top: 20px;
`;

const ButtonContain = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
`

function MainPage({ userName }) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Hello>{userName} 님, 안녕하세요.</Hello>
                <MainTitleText>째잉이 미니 블로그</MainTitleText>
                <ButtonContain>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />
                </ButtonContain>

                <PostList
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;