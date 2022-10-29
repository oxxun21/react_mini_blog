import React from "react";
import styled from "styled-components";
import "../../font/AppFont.css";

const StyleButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme.BtnColor};
    color: ${(props) => props.theme.textColor};

    cursor: pointer;
    font-family: 'Noto Serif KR';
`

function Button(props) {
    const { title, onClick } = props;

    return <StyleButton onClick={onClick}>{title || "button"}</StyleButton>;
}

export default Button;