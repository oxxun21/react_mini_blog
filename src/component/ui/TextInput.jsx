import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    padding: 16px;
    font-size: 14px;
    line-height: 20px;
    width: 100%;
    height: 6.25em;
    border: none;
    resize: none;
    border: 1px solid grey;
`;

function TextInput(props) {
    const { height, value, onChange } = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;