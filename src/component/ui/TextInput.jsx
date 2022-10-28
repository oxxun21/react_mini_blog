import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    padding: 16px;
    font-size: 14px;
    line-height: 20px;
    resize: none;
    border: 1px solid black;
`;

function TextInput(props) {
    const { height, value, onChange } = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;