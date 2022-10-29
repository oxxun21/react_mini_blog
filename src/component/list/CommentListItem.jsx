import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`  
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid gray;
    cursor: pointer;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
`;

const ContentText = styled.p`
    font-size: 14px;
    padding: 14px;
`;

function CommentListItem(props) {
    const { comment } = props;
    
    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;