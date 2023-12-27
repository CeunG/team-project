import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === '아이디' && password === '비밀번호') {
      console.log('로그인 성공');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleSNSLogin = (snsProvider) => {
    console.log(`${snsProvider}로 로그인 버튼 클릭`);
  };

  return (
    <main className="loginpage-content" style={{ height: '99%', width: '100%', backgroundColor: '#ECF1F4' }}>
        <div className="login-container">
        <div className="login">
          <h2>로그인</h2>
            <label htmlFor="username">아이디</label>
              <input type="text" id="username" placeholder="아이디를 입력하세요" value={username}
                onChange={(e) => setUsername(e.target.value)}/>
  <label htmlFor="password">비밀번호</label>
  <input
    type="password"
    id="password"
    placeholder="비밀번호를 입력하세요"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  {error && <p className="error">{error}</p>}
  <button onClick={handleLogin} >로그인</button>
  <Link to="/sign"><button className="sign">회원가입</button></Link>
  <button onClick={() => handleSNSLogin('Kakao')} className="kakao">카카오로 로그인</button>

</div>
      </div>
    </main>
  );
};

export default Login;
