import React , { useState , useEffect } from "react";
import styled from "styled-components";
import MainPage from "./MainPage";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.p `
    display: flex;
    font-size: 35px;
    font-weight: bold;
`

const ClockText = styled.p `
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

const Input = styled.input`
    width: 200px;
    height: 40px;
    border: 1px solid black;
    margin-right: 20px;
`

const LogInButton = styled.button`
    width: 100px;
    height: 40px;
    border: 1px solid black;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`

// const LoginFormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

// const LoginTitle = styled.h1`
//   font-size: 32px;
//   color: beige;
//   margin-top: 20px;
// `;

// const StyledForm = styled.form`
//   margin-top: 20px;
// `;

// const StyledInput = styled.input`
//   width: 400px;
//   height: 30px;
//   font-size: 20px;
//   margin-right: 20px;
// `;

// const StyledButton = styled.button`
//   width: 100px;
//   height: 30px;
//   background-color: aliceblue;
// `;

const ErrorMessage = styled.span`
  font-size: 16px;
  color: #ff577f;
  margin-top: 20px;
`;



function LogIn(props) {
    const [clock, setClock] = useState(0);

    useEffect(() => {
        const showClock = setInterval(() => {
           setClock(new Date().toLocaleTimeString())
        },1000);
        return () => clearInterval(showClock);
    }, []);

    const onSubmit = (e) => {
      if (userName.length < 2) {
        setMessage(true);
        e.preventDefault();
      } else {
        setIsLogin(true);
        e.preventDefault();
      }
    };
  
    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState(false);
  
    return (
      <>
        {isLogin ? (
          <MainPage userName={userName} />
        ) : (
          <Wrapper>
            <Title>Mini Blog Project</Title>
            <ClockText>{clock}</ClockText>
            <StyledForm onSubmit={onSubmit}>
              <Input
                placeholder="write your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <LogInButton>Log In</LogInButton>
            </StyledForm>{" "}
            {message ? (
              <ErrorMessage>닉네임을 입력해 주세요!</ErrorMessage>
            ) : null}
          </Wrapper>
        )}
      </>
    );
}
export default LogIn;