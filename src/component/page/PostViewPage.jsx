import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

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

const PostContainer = styled.div`
    width: 100%;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
    border-bottom: 1px solid grey;
    padding: 16px;
    ${(props) => props.height && `height: ${props.height}px`}
`;

const ContentText = styled.p`
    width: 100%;
    font-size: 16px;
    line-height: 32px;
    white-space: pre-wrap;
    margin-top: 8px;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

const ButtonContain = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
`

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find((item) => {
        return item.id == postId;   // ts때문에 === 써서 페이지 안보였었음 ㅡㅡ 바꾸지마
    });

    const [comment, setComment] = useState("");

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/main-pages");
                    }}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <ButtonContain>
                <Button
                    title="댓글 작성하기"
                    onClick={() => {
                        navigate("/main-pages");
                    }}
                />
                </ButtonContain>
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;