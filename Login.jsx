import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import KakaoLoginButton from './KakaoLoginButton';

const LoginPageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const LoginWrapper = styled.div`
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  label {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    min-width: 100%;
    padding: 10px 50px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: inline-block;
    box-sizing: border-box;
    justify-content: center;
    color: #fff;
  }

  .error {
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin: 16px 0;
    box-sizing: border-box;
    background-color: #40ad8e;

    &:hover {
      background-color: #232227;
    }
  }

  button + button {
    margin-top: 10px;
  }

  button.kakao {
    background-color: #ffe051;
    color: #553830;

    &:hover {
      background-color: #ffca1a;
    }
  }
`;

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username,
        password,
      });

      if (response.data.success) {
        console.log('로그인 성공');
        document.cookie = `token=${response.data.token}; path=/`;
        history.push('/home');
      } else {
        setError('아이디 또는 비밀번호가 올바르지 않습니다.');
      } 
    } catch (error) {
      console.error('로그인 요청 에러:', error);
    }
  };

  const handleSNSLogin = (snsProvider) => {
    console.log(`${snsProvider}로 로그인 버튼 클릭`);
  };

  return (
    <LoginPageContent className="loginpage-content">
      <LoginContainer className="login-container">
        <LoginWrapper className="login">
          <h2>로그인</h2>
          <label htmlFor="username">아이디</label>
          <TextField
            type="text"
            id="username"
            placeholder="아이디를 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">비밀번호</label>
          <TextField
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <Button onClick={handleLogin}>로그인</Button>
          <Button className="sign">회원가입</Button>
          <KakaoLoginButton handleSNSLogin={handleSNSLogin} />
        </LoginWrapper>
      </LoginContainer>
    </LoginPageContent>
  );
};

export default Login;
