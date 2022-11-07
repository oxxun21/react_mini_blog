import React , { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./MainPage";

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
    padding: 0 10px;
`

const LogInButton = styled.button`
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
        },1000);
        return () => clearInterval(showClock);
    }, []);

    const onSubmit = (e) => {
      if (userName.length < 2) {
        setMessage(true);
        e.preventDefault();
      } else {
        navigate("/main-pages", {state:{userName : userName }})
        e.preventDefault();
      }
    };

    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState("");

    // useEffect(() => {
    //   window.localStorage.setItem("userName", JSON.stringify(userName));
    // }, [userName]);

    const navigate = useNavigate()

    const [message, setMessage] = useState(false);
  
    return (
      <> 
          <Wrapper>    
            <Title>Mini Blog Project</Title>
            <ClockText>{clock}</ClockText>
            <StyledForm onSubmit={onSubmit}>
              <Input
                placeholder="What's your name?"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <LogInButton>Log In</LogInButton>
            </StyledForm>
            {message ? (
              <ErrorMessage>닉네임을 입력해 주세요!</ErrorMessage>
            ) : null}
          </Wrapper>
       
      </>
    );
}
export default LogIn;