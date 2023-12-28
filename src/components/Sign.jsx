import React, { useState } from 'react';
import styled from 'styled-components';
import '../assets/Sign.scss';

const Sign = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSign = () => {
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
    } else {
      console.log('회원가입 성공');
    }
  };

  return (
    <main className="sign-content" style={{ height: '99%', width: '100%' }}>
      <div className="sign-container">
        <div className="sign">
          <h2>회원가입</h2>
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            placeholder="아이디를 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="비밀번호를 확인하세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button onClick={handleSign}>회원가입</button>
        </div>
      </div>
    </main>
  );
};

export default Sign;
