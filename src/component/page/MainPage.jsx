import React, { usestate } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from '../../data.json';
import "../../font/AppFont.css";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Noto Serif KR';
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
    background: #82afe6;
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
    justify-content: space-around;
    margin: 20px;
`

const PostContain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`


function MainPage(props) {
    const navigate = useNavigate();
    //const userName = useState(() => {JSON.stringify(window.localStorage.getItem("userName"))});

    return (
        <Wrapper>
            <Container>
                <TitleContain>
                    <MainTitleText>째잉이 미니 블로그</MainTitleText>
                    <Hello>{props.userName}님, 안녕하세요.</Hello>
                </TitleContain>

                <ButtonContain>
                    <Button
                        title="글 작성하기"
                        onClick={() => {
                            navigate("/post-write");
                        }}
                    />
                    <Button
                        title="테마 변경"
                        onClick={() => {}}
                    />
                </ButtonContain>
                
                <PostContain>
                    <PostList
                        posts={data}
                        onClickItem={(item) => {
                            navigate(`/post/${item.id}`);
                        }}
                    />
                </PostContain>
            </Container>
        </Wrapper>
    );
}

export default MainPage;