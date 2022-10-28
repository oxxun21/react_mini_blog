import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 14px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    border-bottom: 1px solid grey;
    width: 100%;
    cursor: pointer;

`;

const TitleText = styled.p`
    font-size: 16px;
    font-weight: 500;
    display: flex;
`;

const Date = styled.span`
    font-size: 14px;
    display: flex;
`

function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
            <Date>{post.date}</Date>
        </Wrapper>
    );
}

export default PostListItem;