import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Typography,
  Switch,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';

const label = { 'aria-label': '알림 받기 설정' };

const StyledMain = styled.main`
  overflow: hidden;
  margin-left: 10%;
  margin-top: 30px;

  .cards-container {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .card1, .card2 {
    text-align: center;
    box-sizing: border-box;
    border: 1px solid $gray;
    border-radius: 15px;
    background-color: $black;
    margin: 20px;
    padding: 30px 0;

      & > * {
        margin-bottom: 10px;
      }
  }

  .card1 p, .card2 p {
    @include semi-txt;
    color: $gray;
  }

  .card1 h2, .card2 h2 {
    @include bold-txt;
    color: $green;
    font-size: 1.5rem;
  }

  .middle {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .middle-banner {
    width: 80%;
    padding: 5% 0;
    background-color: $black;
    border: 1px solid $gray;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      display: block;
      text-align: center;
      color: $green;

      &:first-child {
        @include bold-txt;
        margin-bottom: 10px;
      }

      &:last-child {
        @include normal-txt;
      }
    }
    
    .modal-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;

const StyledButton = styled.button`
  margin-top: 30px;
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 20px;
  @include normal-txt;
  border: none;
  border-radius: 25px;
  background-color: $green;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
  }
`;

const StyledInput = styled.input`
  display: block;
  margin: 0 auto;
  margin: 20px auto;
  max-width: 300px;
  box-sizing: border-box;
`;

const StyledModal = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $black;
  border: 1px solid $gray;
  width: 80%;
  max-width: 600px;
  text-align: center;
  border-radius: 15px;
  padding: 30px 0;
  z-index: 1;
`;

const Mypage = () => {
  const [username, setUsername] = useState('사용자이름');
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [idChangeModalVisible, setIdChangeModalVisible] = useState(false);
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

  const closeIdChangeModal = () => {
    setIdChangeModalVisible(false);
  };

  const saveProfileChanges = (newUsername) => {
    setUsername(newUsername);
    closeProfileModal();
  };

  const saveIdChanges = () => {
    setIdChangeModalVisible(false);
  };
  
  const openIdchangeModal = () => {
    setIdChangeModalVisible(true);
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
    console.log('Saving deleted mate list');
  };

  const saveGoalChanges = () => {
    console.log('운동 목표:', exerciseGoal);
    console.log('식단 목표:', dietGoal);
  };

  return (
    <StyledMain className="main-content">
      <div className="middle">
        <div className="middle-banner">
          <p style={{ fontWeight: 'bold', fontSize: '22px' }}>MY PAGE</p>
          <p style={{ fontSize: '1rem' }}>
            환영합니다! <span className="username" style={{ fontWeight: 'bold' }}>{username}</span>님!
          </p>
        </div>
        <div className="cards-container">
          <div className="card1">
            <h2>계정설정</h2>
            <p>연동된 이메일</p>
            <StyledInput className="email" type="text" placeholder="abcabc123@email.net" />
            <p>댓글 알림 받기</p>
            <div className="check-wrap">
              <Switch {...label} className="reply-alarm"/>
            </div>
            <p>팔로잉 알림 받기</p>
            <div className="check-wrap">
              <Switch {...label} className="reply-alarm"/>
            </div>
            <hr />
            <p>아이디</p>
            <StyledButton onClick={openIdchangeModal}>아이디 변경하기</StyledButton>
            <p>비밀번호 재설정</p>
            <StyledButton onClick={openPasswordModal}>비밀번호 변경하기</StyledButton>
            <StyledButton>계정삭제</StyledButton>
          </div>
          <div className="card2">
            <h2 className="">나의 정보 수정</h2>
            <p>프로필</p>
            <StyledButton onClick={openProfileModal}>프로필 변경하기</StyledButton>
            <p>나의 메이트들</p>
            <StyledButton onClick={openMateModal}>메이트 수정</StyledButton>
            <p>나의 목표</p>
            <StyledButton onClick={openGoalModal}>목표 수정</StyledButton>
          </div>
        </div>
      </div>

      {/* 프로필 변경 모달 */}
      <Dialog open={profileModalVisible} onClose={closeProfileModal}>
        <DialogTitle>프로필</DialogTitle>
        <DialogContent className="modal-content">
          <img width="80" height="80" src="https://img.icons8.com/color/48/test-account.png" alt="test-account" />
          <h1>프로필</h1>
          <TextField type="text" placeholder="이름" />
          <TextField type="text" placeholder="자기소개" />
          <Button onClick={closeProfileModal}>Reset</Button>
          <Button onClick={() => saveProfileChanges('새로운 사용자명')}>저장</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeProfileModal}>닫기</Button>
        </DialogActions>
      </Dialog>

      {/* 아이디 변경 모달 */}
      <Dialog open={idChangeModalVisible} onClose={closeIdChangeModal}>
        <DialogTitle>아이디 변경</DialogTitle>
        <DialogContent className="modal-content">
          <TextField type="text" placeholder="기존아이디" />
          <TextField type="text" placeholder="새로운아이디" />
          <TextField type="text" placeholder="새로운아이디 확인" />
          <Button onClick={closeIdChangeModal}>Reset</Button>
          <Button onClick={saveIdChanges}>저장</Button>
        </DialogContent>
        <DialogActions>
        <Button onClick={closeIdChangeModal}>닫기</Button>
      </DialogActions>
      </Dialog>

      {/* 비밀번호 변경 모달 */}
      <Dialog open={passwordModalVisible} onClose={closePasswordModal}>
        <DialogTitle>비밀번호 변경</DialogTitle>
        <DialogContent className="modal-content">
          <TextField type="password" placeholder="현재 비밀번호" />
          <TextField type="password" placeholder="새로운 비밀번호" />
          <TextField type="password" placeholder="새로운 비밀번호 확인" />
          <Button onClick={closePasswordModal}>Reset</Button>
          <Button onClick={savePasswordChanges}>저장</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePasswordModal}>닫기</Button>
        </DialogActions>
      </Dialog>

      {/* 메이트 수정 모달 */}
      <Dialog open={mateModalVisible} onClose={closeMateModal}>
        <DialogTitle>메이트 수정</DialogTitle>
        <DialogContent className="modal-content text-center">
          <span className="close" onClick={closeMateModal}>&times;</span>
          <h1>메이트 수정</h1>
          <p>현재 메이트 목록:</p>
        <List>
      {mateList.map((mate) => (
        <ListItem
          key={mate.id}
          button
          onClick={() => selectMate(mate)}
          selected={selectedMate && selectedMate.id === mate.id}
        >
          <ListItemAvatar>
            <Avatar alt={`mate-${mate.id}`} src={mateImages[mate.id]} />
          </ListItemAvatar>
          <ListItemText primary={mate.name} />
          {selectedMate && selectedMate.id === mate.id && <span className="selected">&times;</span>}
        </ListItem>
      ))}
        </List>
    {selectedMate && (
      <div>
        <Typography style={{ padding: '10px 0' }}>
          선택된 메이트: {selectedMate.name} 를 삭제하시겠습니까?
        </Typography>
        <Button onClick={deleteMate}>삭제</Button>
      </div>
    )}
    <div>
      <Button className="save-button" onClick={saveDeletedMateList}>저장</Button>
    </div>
  </DialogContent>
  <DialogActions>
    <Button onClick={closeMateModal}>닫기</Button>
  </DialogActions>
</Dialog>

      {/* 목표 수정 모달 */}
      <Dialog open={goalModalVisible} onClose={closeGoalModal}>
        <DialogTitle>목표 수정</DialogTitle>
        <DialogContent className="modal-content">
          <span className="close" onClick={closeGoalModal}>&times;</span>
          <h1>목표 수정</h1>
          <label htmlFor="weightGoal" style={{ fontSize: '16px', fontWeight: 'bold', color: '#40ad8e' }}>
            목표 체중:
          </label>
          <TextField id="weightGoal" type="text" placeholder="몸무게 목표를 입력하세요" fullWidth />
          <label htmlFor="exerciseGoal" style={{ fontSize: '16px', fontWeight: 'bold', color: '#40ad8e' }}>
            운동 목표:
          </label>
          <TextField id="exerciseGoal" type="text" placeholder="운동 목표를 입력하세요" fullWidth />
          <label htmlFor="dietGoal" style={{ fontSize: '16px', fontWeight: 'bold', color: '#40ad8e' }}>
            식단 목표:
          </label>
          <TextField id="dietGoal" type="text" placeholder="식단 목표를 입력하세요" fullWidth />
          <Button onClick={saveGoalChanges}>저장</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeGoalModal}>닫기</Button>
        </DialogActions>
      </Dialog>
    </StyledMain>
  );
};

export default Mypage;

