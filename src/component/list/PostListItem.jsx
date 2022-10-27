import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid grey;
    width: 100%;
    cursor: pointer;
    background: white;
    :hover {
        border-bottom: 3px solid grey;
    }
`;

const TitleText = styled.p`
    font-size: 16px;
    font-weight: 500;
    width: 100%;
`;

const Date = styled.span`
    font-size: 14px;
`

function PostListItem(props) {
    const { post, onClick } = props;

    // let time = new Date().getHours();
    // let minute = new Date().getMinutes();
    // let seconds = new Date().getSeconds();
    // let day = String(time) + ":" + String(minute) + ":" + String(seconds);

    // console.log(day);

    // let [now, setNow] = useState("");

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;