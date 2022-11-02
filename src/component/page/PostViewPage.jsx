import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import "../../font/AppFont.css";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Noto Serif KR';
    padding: 20px;
    height: 100%;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
`;

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
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
    margin: 8px 0 20px 0;
`;

const CommentLabel = styled.p`
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-self: flex-start;
    margin-bottom: 10px;
`;

const ButtonContain = styled.div`
    display: flex;
    flex-flow: row;
    align-self: flex-start;
    margin-bottom: 10px;
`

const CommentDiv = styled.div`
    display: flex;
    width: 60%;
    justify-content: center;
    flex-direction: column;
`

const CommentDate = styled.span`
    display: flex;
    align-self: flex-end;
    margin-top: 15px;
    padding-right: 5px;
`

const CommentBtn = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledTextarea = styled.textarea`
    display: flex;
    padding: 16px;
    font-size: 14px;
    line-height: 20px;
    resize: none;
    border: 1px solid grey;
    margin-bottom: 15px;
`;

function PostViewPage(props) {
    const navigate = useNavigate();

    const { postId } = useParams();

    let postIdToDB = postId - "1";

    const [comment, setComment] = useState("");

    const commentHandler = (event) => {
        event.preventDefault()
        
        let object = {  
            postId : postIdToDB,
            commentId : Math.random(),
            commentDate: "2022년 10월 31일",
            comment : comment

        }   
        props.onCommentHandler(object);  
    }

    return (
        <Wrapper>
            <PostContainer>
                <ButtonContain>
                    <Button
                        title="뒤로 가기"
                        onClick={() => {
                            navigate("/main-pages");
                        }}
                    />
                </ButtonContain>

                <TitleText>{props.posts[postIdToDB].title}</TitleText>
                <CommentDate>{props.posts[postIdToDB].date}</CommentDate>
                <ContentText>{props.posts[postIdToDB].contents}</ContentText>
            </PostContainer>

            <CommentDiv>
                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={props.posts[postIdToDB].comments} />
                
                <form onSubmit={commentHandler}>
                <StyledTextarea
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <CommentBtn>
                <Button
                    title="댓글 작성하기"
                />
                </CommentBtn>
                </form>
            </CommentDiv>
        </Wrapper>
    );
}

export default PostViewPage;