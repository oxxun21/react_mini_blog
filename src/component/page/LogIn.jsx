import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
`

const Title = styled.p`
    display: flex;
    font-size: 35px;
    font-weight: bold;
`

const Clock = styled.p`
    display: flex;
    font-size: 20px;
    margin-top: 20px;
`

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    margin-top: 30px;
`

const FormInput = styled.input`
    width: 200px;
    height: 40px;
    border: 1px solid black;
    margin-right: 20px;
    padding: 0 10px;
`

const FormBtn = styled.button`
    width: 100px;
    height: 40px;
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    :hover {
        background: ${(props) => props.theme.MainColor};
        color: ${(props) => props.theme.textColor};
    }
`

const ErrorMessage = styled.span`
  font-size: 16px;
  color: white;
  margin-top: 20px;
`;

function LogIn(props) {
  const [clock, setClock] = useState(0);

  useEffect(() => {
    const showClock = setInterval(() => {
      setClock(new Date().toLocaleTimeString())
    }, 1000);
    return () => clearInterval(showClock);
  }, []);

  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    if (userName.length < 2) {
      setMessage(true);
      e.preventDefault();
    } else {
      navigate("/main-pages", { state: { userName: userName } })
      e.preventDefault();
    }
  };

  return (
    <>
      <Wrapper>
        <Title>Welcome, My mini Blog</Title>
        <Clock>{clock}</Clock>
        <StyledForm onSubmit={onSubmit}>
          <FormInput
            placeholder="What's your name?"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FormBtn>Log In</FormBtn>
        </StyledForm>
        {message ? (<ErrorMessage>닉네임을 입력해주세요!</ErrorMessage>
        ) : null}
      </Wrapper>
    </>
  )
}

export default LogIn;