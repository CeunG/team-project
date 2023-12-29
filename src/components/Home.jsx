import React from 'react';
import '../assets/Home.scss';
import mainBanner from '../assets/images/main-banner.png';
import subBannerimg from '../assets/images/sample.png';


const Home = () => {
  return (
    <div className='home-wrap'>
      <div className="main-banner">

        <img src={mainBanner} alt="Main Banner" />
      </div>

      <div className="sub-container">
        <div className="sub-banner1">
        <h1>내 건강 상태 다이어리에 기록하기</h1>            
            <img src={subBannerimg} alt="Sub Banner 1" />
            <p>하루하루 목표와 일지 기록으로 건강 루틴 파악</p>
        </div>

        <div className="sub-banner2">
        <h1>마음 맞는 친구와 기록 공유</h1>
          <img src={subBannerimg} alt="Sub Banner 2" />
          <p>내가 추가한 친구와 기록을 공유하고 반응하기</p>
        </div>

        <div className="sub-banner3">
        <h1>챗봇으로 나에게 맞는 운동/식단 추천</h1>
          <img src={subBannerimg} alt="Sub Banner 3" />
            <p>챗봇을 통해 나에게 맞는 운동/식단을 추천받기</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
