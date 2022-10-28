import React from "react";
import styled from "styled-components";
import "../../font/AppFont.css";

const StyleButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
    :hover {
        background: #77A1D3;
        color: white;
    }
    font-family: 'Noto Serif KR';
`

function Button(props) {
    const { title, onClick } = props;

    return <StyleButton onClick={onClick}>{title || "button"}</StyleButton>;
}

export default Button;