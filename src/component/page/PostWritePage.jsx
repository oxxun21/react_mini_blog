import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import "../../font/AppFont.css";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 50%;
    margin-top: 30px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const Title = styled.input`
    border: none;
    border-bottom: 1px solid #82afe6;
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    font-size: 30px;
    font-family: 'Noto Serif KR';
    padding: 20px;
`

const Content = styled.input`
    border: 1px solid grey;
    width: 100%;
    font-size: 18px;
    font-family: 'Noto Serif KR';
    padding: 20px;
`


function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
 
    return (
        <Wrapper>
            <Container>
                <Title
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }} 
                    placeholder="Title"
                />

                <Content
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }} 
                    placeholder="Contents"
                />

                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/main-pages")
                    }}
                />
            </Container>
        </Wrapper>
    )
}

export default PostWritePage;

