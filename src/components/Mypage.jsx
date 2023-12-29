import React, { useState } from 'react';
import '../assets/Mypage.scss';

const Mypage = () => {
  const [username, setUsername] = useState('사용자이름');
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [idchangeModalVisible, setIdchangeModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [mateModalVisible, setMateModalVisible] = useState(false); 
  const [exerciseGoal, setExerciseGoal] = useState('');
  const [dietGoal, setDietGoal] = useState('');

  const openProfileModal = () => {
    setProfileModalVisible(true);
  };

  const closeProfileModal = () => {
    setProfileModalVisible(false);
  };

  const closeIdchangeModal = () => {
    setIdchangeModalVisible(false);
  };

  const saveProfileChanges = (newUsername) => {
    setUsername(newUsername);
    closeProfileModal();
  };

  const saveIdChanges = () => {
    // 아이디 변경 저장 로직
    setIdchangeModalVisible(false);
  };

  const openIdchangeModal = () => {
    setIdchangeModalVisible(true);
  };

  const openPasswordModal = () => {
    setPasswordModalVisible(true);
  };

  const closePasswordModal = () => {
    setPasswordModalVisible(false);
  };

  const savePasswordChanges = () => {
    setPasswordModalVisible(false);
  };

  const openMateModal = () => {
    setMateModalVisible(true);
  };
  
  const closeMateModal = () => {
    setMateModalVisible(false);
  };

  const [mateList, setMateList] = useState([
    { id: 1, name: '메이트1' },
    { id: 2, name: '메이트2' },
    { id: 3, name: '메이트3' },
    { id: 4, name: '메이트4' },
  ]);

  const [selectedMate, setSelectedMate] = useState(null);

  const selectMate = (mate) => {
    setSelectedMate(mate);
  };

  const deleteMate = () => {
    if (selectedMate) {
      setMateList((prevMateList) => prevMateList.filter((mate) => mate.id !== selectedMate.id));
      setSelectedMate(null);
    }
  };

  const [goalModalVisible, setGoalModalVisible] = useState(false);
  const [goal, setGoal] = useState('');

  const openGoalModal = () => {
    setGoalModalVisible(true);
  };

  const closeGoalModal = () => {
    setGoalModalVisible(false);
  };

  const mateImages = {
    1: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-female-icon.png',
    2: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-female-icon.png',
    3: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-female-icon.png',
    4: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-female-icon.png',
  };

  const saveDeletedMateList = () => {
    console.log("Saving deleted mate list");
  };

  const saveGoalChanges = () => {
    console.log('운동 목표:', exerciseGoal);
    console.log('식단 목표:', dietGoal);
  };



  return (
    <main className="main-content" >
      <div className="middle">
        <div className="middle-banner">
          <p style={{ fontWeight: 'bold', fontSize: '3rem' }}>MY PAGE</p>
          <p style={{ fontSize: '1.4rem' }}>환영합니다! <span className="username" style={{ fontWeight: 'bold' }}>{username}</span>님!</p>
        </div>
        <div className="cards-container">
          <div className="card1">
            <h2>계정설정</h2>
            <p>연동된 이메일</p>
            <input className="email" type="text" placeholder="abcabc123@email.net" />
            <p>댓글 알림 받기</p>
            <div className="check-wrap">
              <label className="switch">
                <input type="checkbox" className="reply-alarm" />
                <span className="slider"></span>
              </label>
            </div>
            <p>팔로잉 알림 받기</p>
            <div className="check-wrap">
              <label className="switch">
                <input type="checkbox" className="follow-alarm" />
                <span className="slider"></span>
              </label>
            </div>
            <hr />
            <p>아이디</p>
            <button onClick={openIdchangeModal}>아이디 변경하기</button>
            <p>비밀번호 재설정</p>
            <button onClick={openPasswordModal}>비밀번호 변경하기</button>
            <button>계정삭제</button>
          </div>
          <div className="card2">
            <h2 className="">나의 정보 수정</h2>
            <p>프로필</p>
            <button onClick={openProfileModal}>프로필 변경하기</button>
            <p>나의 메이트들</p>
            <button onClick={openMateModal}>메이트 수정</button>
            <p>나의 목표</p>
            <button onClick={openGoalModal}>목표 수정</button>
          </div>
        </div>
      </div>

      {/* Profile Change Popup */}
      <div id="profileModal" className="modal" style={{ display: profileModalVisible ? 'block' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={closeProfileModal}>&times;</span>
          <img width="80" height="80" src="https://img.icons8.com/color/48/test-account.png" alt="test-account" />
          <h1>프로필</h1>
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="자기소개" />
          <button>Reset</button>
          <button onClick={saveProfileChanges}>저장</button>
        </div>
      </div>

      {/* Id Change Popup */}
      <div id="idchangeModal" className="modal" style={{ display: idchangeModalVisible ? 'block' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={closeIdchangeModal}>&times;</span>
          <input type="text" placeholder="기존아이디" />
          <input type="text" placeholder="새로운아이디" />
          <input type="text" placeholder="새로운아이디 확인" />
          <button>Reset</button>
          <button onClick={saveIdChanges}>저장</button>
        </div>
      </div>
        
      {/* Password Change Popup */}
    <div id="passwordModal" className="modal" style={{ display: passwordModalVisible ? 'block' : 'none' }}>
    <div className="modal-content">
      <span className="close" onClick={closePasswordModal}>&times;</span>
      <input type="password" placeholder="현재 비밀번호" />
      <input type="password" placeholder="새로운 비밀번호" />
      <input type="password" placeholder="새로운 비밀번호 확인" />
      <button>Reset</button>
      <button onClick={savePasswordChanges}>저장</button>
      </div>
      </div>

    {/* Mate Edit Popup */}
    <div id="mateModal" className="modal" style={{ display: mateModalVisible ? 'block' : 'none' }}>
  <div className="modal-content text-center">
    <span className="close" onClick={closeMateModal}>&times;</span>
    <h1>메이트 수정</h1>
    <p>현재 메이트 목록:</p>
    <ul className='matelist'>
      {mateList.map((mate) => (
        <li key={mate.id} onClick={() => selectMate(mate)} className={`mate-item ${selectedMate && selectedMate.id === mate.id ? 'selected-mate' : ''}`}>
          <img src={mateImages[mate.id]} alt={`mate-${mate.id}`} className="mate-profile-img" />
          <span className="mate-name">{mate.name}</span>
          {selectedMate && selectedMate.id === mate.id && <span className="selected"></span>}
        </li>
      ))}
    </ul>
    {selectedMate && (
      <div>
        <p style={{padding:'10px 0'}}>선택된 메이트: {selectedMate.name} 를 삭제하시겠습니까?</p>
        <button onClick={deleteMate}>삭제</button>
      </div>
    )}
    <div>
      <button className="save-button" onClick={saveDeletedMateList}>저장</button>
    </div>
  </div>
</div>

 {/* Goal Edit Popup */}
 <div id="goalModal" className="modal" style={{ display: goalModalVisible ? 'block' : 'none' }}>
  <div className="modal-content">
    <span className="close" onClick={closeGoalModal}>&times;</span>
    <h1>목표 수정</h1>
    <label htmlFor="weightGoal" style={{ fontSize: '16px', fontWeight: 'bold', color: '#40ad8e' }}>목표 체중:</label>
    <input
      id="weightGoal"
      type="text"
      placeholder="몸무게 목표를 입력하세요"
    />
    <label htmlFor="exerciseGoal" style={{ fontSize: '16px', fontWeight: 'bold', color: '#40ad8e' }}>운동 목표:</label>
    <input
      id="exerciseGoal"
      type="text"
      placeholder="운동 목표를 입력하세요"
    />
    <label htmlFor="dietGoal" style={{ fontSize: '16px', fontWeight: 'bold', color: '#40ad8e' }}>식단 목표:</label>
    <input
      id="dietGoal"
      type="text"
      placeholder="식단 목표를 입력하세요"
    />
    <button onClick={saveGoalChanges}>저장</button>
  </div>
</div>
    </main>
  );
};

export default Mypage;
