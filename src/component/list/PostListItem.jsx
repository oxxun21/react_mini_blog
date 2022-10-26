import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid grey;
    cursor: pointer;
    background: white;
    :hover {
        border-bottom: 3px solid grey;
    }
`;

const TitleText = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;