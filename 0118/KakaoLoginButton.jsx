import React from 'react';
import KakaoLogin from 'react-kakao-login';

const KakaoLoginButton = ({ handleSNSLogin }) => {
  const responseKaKao = (response) => {
    console.log(response);
    handleSNSLogin('Kakao');
  };

  return (
    <KakaoLogin
      token={`${process.env.REACT_APP_KAKAO_API_KEY}`}
      onSuccess={responseKaKao}
      onFail={(error) => console.log(error)}
      onLogout={() => console.log('logout')}
      className="kakao"
      style={{
        backgroundColor: '#ffe051',
        color: '#553830',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '10px',
        padding: ' 16px',
        fontSize: '14px',
        '&:hover': {
        backgroundColor: '#ffca1a',
        },
      }}
    >
      카카오로 로그인
    </KakaoLogin>
  );
};

export default KakaoLoginButton;
