import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, atom } from 'recoil';
import axios from 'axios';
import {
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
  ThemeProvider,
  createTheme,
} from '@mui/material';
const label = { 'aria-label': '알림 받기 설정' };

const profileDataAtom = atom({
  key: 'profileData',
  default: { username: '사용자명', name: '이름', bio: '자기소개', weight: 0, height: 0, email: 'abcabc123@email.net' },
});

const usernameChangeAtom = atom({
  key: 'usernameChange',
  default: { currentUsername: '', newUsername: '' },
});

const passwordChangeAtom = atom({
  key: 'passwordChange',
  default: { currentPassword: '', newPassword: '', confirmNewPassword: '' },
});

const mateListAtom = atom({
  key: 'mateList',
  default: [
    { id: 1, name: '메이트1' },
    { id: 2, name: '메이트2' },
    { id: 3, name: '메이트3' },
    { id: 4, name: '메이트4' },
  ],
});

const goalChangeAtom = atom({
  key: 'goalChange',
  default: { weightGoal: 0, exerciseGoal: '', dietGoal: '' },
});

const updateProfile = async (profileData) => {
  try {
    const response = await axios.post('/api/profile/update', profileData);
    console.log(response.data.message);
  } catch (error) {
    console.error('프로필 업데이트 실패:', error);
  }
};

const changeUsername = async ({ currentUsername, newUsername }) => {
  console.log('아이디 변경:', currentUsername, newUsername);
  try {
    await axios.post('아이디_변경_API_엔드포인트', { currentUsername, newUsername });
  } catch (error) {
    console.error('아이디 변경 실패:', error);
  }
};

const changePassword = async ({ currentPassword, newPassword, confirmNewPassword }) => {
  console.log('비밀번호 변경:', currentPassword, newPassword, confirmNewPassword);
  try {
    await axios.post('비밀번호_변경_API_엔드포인트', { currentPassword, newPassword, confirmNewPassword });
  } catch (error) {
    console.error('비밀번호 변경 실패:', error);
  }
};

const updateGoals = async ({ weightGoal, exerciseGoal, dietGoal }) => {
  try {
    const response = await axios.post('/api/user/goals/update', {
      weightGoal,
      exerciseGoal,
      dietGoal,
    });
    console.log(response.data.message);
  } catch (error) {
    console.error('목표 수정 실패:', error);
  }
};

const mateImages = {
  1: 'path/to/mate1-image.jpg',
  2: 'path/to/mate2-image.jpg',
  3: 'path/to/mate3-image.jpg',
  4: 'path/to/mate4-image.jpg',
};

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#232227', 
        },
      },
    },
  },
});

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
    border: 1px solid #959595;
    border-radius: 15px;
    background-color: #232227;
    margin: 20px;
    padding: 30px 0;

      & > * {
        margin-bottom: 10px;
      }
  }

  .card1 p, .card2 p {
    @include semi-txt;
    color: #959595;
  }

  .card1 h2, .card2 h2 {
    @include bold-txt;
    color: #40ad8e;
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
    background-color: #232227;
    border: 1px solid #959595;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      display: block;
      text-align: center;
      color: #40ad8e;

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
  background-color: #40ad8e;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    background-color: #232227;
    color: #ffffff;
    .MuiInputBase-input {
      color: #ffffff !important;
    }
  }
`;

const StyledInput = styled.input`
  display: block;
  margin: 20px auto;
  max-width: 300px;
  box-sizing: border-box;
  background-color: #232227;
  color: #ffffff;
  padding: 10px; 
  border: none; 
  border-radius: 5px; 
`;

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: #232227;
    color: #ffffff;
    padding: 20px;

    .modal-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ffffff;

      img {
        width: 80px;
        height: 80px;
      }

      h1 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #40ad8e;
      }

      .MuiTextField-root {
        width: 100%;
        text-align: center;
        color: #fff;

        .MuiInputBase-input {
          color: #fff !important;
          margin-bottom: 10px;
        }

        input {
          color: #fff !important;
          margin-bottom: 10px;
        }
      }

      button {
        margin-top: 15px;
        padding: 10px 20px;
        font-size: 1rem;
        border: none;
        border-radius: 25px;
        background-color: #40ad8e;
        color: white;
        cursor: pointer;

        &:hover {
          background-color: #007bff;
        }
      }
    }
  }
`;


const Mypage = () => {
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [idChangeModalVisible, setIdChangeModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [mateModalVisible, setMateModalVisible] = useState(false);
  const [mateList, setMateList] = useState([
    { id: 1, name: '메이트1' },
    { id: 2, name: '메이트2' },
    { id: 3, name: '메이트3' },
    { id: 4, name: '메이트4' },
  ]);
  const [selectedMate, setSelectedMate] = useState(mateList[0]);
  const [goalModalVisible, setGoalModalVisible] = useState(false);

const [profileData, setProfileData] = useRecoilState(profileDataAtom);
const [usernameChange, setUsernameChange] = useRecoilState(usernameChangeAtom);
const [passwordChange, setPasswordChange] = useRecoilState(passwordChangeAtom);

  // 모달 
  const closeModal = (setter) => setter(false);
  const openModal = (setter) => setter(true);

  // 메이트
  const selectMate = (mate) => setSelectedMate(mate);
  const deleteMate = () => {
    if (selectedMate) {
      setMateList((prevMateList) => prevMateList.filter((mate) => mate.id !== selectedMate.id));
      setSelectedMate(null);
    }
  };

  // 프로필 
  const openProfileModal = () => openModal(setProfileModalVisible);
  const closeProfileModal = () => closeModal(setProfileModalVisible);

  // 아이디 변경 
  const openIdChangeModal = () => openModal(setIdChangeModalVisible);
  const closeIdChangeModal = () => closeModal(setIdChangeModalVisible);

  // 비밀번호 변경
  const openPasswordModal = () => openModal(setPasswordModalVisible);
  const closePasswordModal = () => closeModal(setPasswordModalVisible);

  // 메이트 수정 
  const openMateModal = () => openModal(setMateModalVisible);
  const closeMateModal = () => closeModal(setMateModalVisible);

  // 목표 수정 
  const openGoalModal = () => openModal(setGoalModalVisible);
  const closeGoalModal = () => closeModal(setGoalModalVisible);

  const saveProfileChanges = (newUsername) => {
    const newProfileData = { ...profileData, username: newUsername, name: '새로운 이름', bio: '새로운 자기소개' };
    updateProfile(newProfileData)
      .then(() => setProfileData(newProfileData))
      .then(() => closeProfileModal())
      .catch((error) => console.error('프로필 변경 실패:', error));
  };
  
  const saveIdChanges = () => {
    const { currentUsername, newUsername } = usernameChange;
    changeUsername({ currentUsername, newUsername })
      .then(() => closeIdChangeModal())
      .catch((error) => console.error('아이디 변경 실패:', error));  
  };
  
  const savePasswordChanges = () => {
    const { currentPassword, newPassword, confirmNewPassword } = passwordChange;
    changePassword({ currentPassword, newPassword, confirmNewPassword })
      .then(() => closePasswordModal())
      .catch((error) => console.error('비밀번호 변경 실패:', error));  
  };
  
  const saveDeletedMateList = (mateId) => {
    deleteMate(mateId)
      .then(() => console.log('메이트 삭제 성공'))
      .catch((error) => console.error('메이트 삭제 실패:', error));  
  };
  
  const saveGoalChanges = (weightGoal, exerciseGoal, dietGoal) => {
    updateGoals({ weightGoal, exerciseGoal, dietGoal })
      .then(() => console.log('목표 수정 성공'))
      .catch((error) => console.error('목표 수정 실패:', error));  
  };


  return (
    <ThemeProvider theme={theme}>
    <StyledMain className="main-content">
      <div className="middle">
        <div className="middle-banner">
          <p style={{ fontWeight: 'bold', fontSize: '22px' }}>MY PAGE</p>
          <p style={{ fontSize: '1rem' }}>
            환영합니다! 
          </p>
        </div>
        <div className="cards-container">
          <div className="card1">
            <h2>계정설정</h2>
            <p>연동된 이메일</p>
            <p style={{ color: '#ffffff' }}>{profileData.email}</p>
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
            <StyledButton onClick={openIdChangeModal}>아이디 변경하기</StyledButton>
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
      <StyledDialog open={profileModalVisible} onClose={closeProfileModal}>
        <DialogTitle>프로필</DialogTitle>
        <DialogContent className="modal-content">
          <img width="80" height="80" src="https://img.icons8.com/color/48/test-account.png" alt="test-account" />
          <h1>프로필</h1>
          <StyledTextField type="text" placeholder="이름"  />
          <StyledTextField type="text" placeholder="자기소개" />
          <StyledTextField type="text" placeholder="키" />
          <StyledTextField type="text" placeholder="몸무게" />
          <Button onClick={closeProfileModal}>Reset</Button>
          <Button onClick={() => saveProfileChanges('새로운 사용자명')}>저장</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeProfileModal}>닫기</Button>
        </DialogActions>
        </StyledDialog>

      {/* 아이디 변경 모달 */}
      <StyledDialog open={idChangeModalVisible} onClose={closeIdChangeModal}>
      <Dialog open={idChangeModalVisible} onClose={closeIdChangeModal}>
        <DialogTitle>아이디 변경</DialogTitle>
        <DialogContent className="modal-content">
          <StyledTextField
          type="text"
          placeholder="기존아이디"
          value={usernameChange.currentUsername}
          onChange={(e) => setUsernameChange((prev) => ({ ...prev, currentUsername: e.target.value }))}/>
          <StyledTextField
          type="text"
          placeholder="새로운아이디"
          value={usernameChange.newUsername}
          onChange={(e) => setUsernameChange((prev) => ({ ...prev, newUsername: e.target.value }))}/>
          <StyledTextField type="text" placeholder="새로운아이디 확인" />
          <Button onClick={closeIdChangeModal}>Reset</Button>
          <Button onClick={saveIdChanges}>저장</Button>
        </DialogContent>
        <DialogActions>
        <Button onClick={closeIdChangeModal}>닫기</Button>
      </DialogActions>
      </Dialog>
      </StyledDialog>

      {/* 비밀번호 변경 모달 */}
      <StyledDialog open={passwordModalVisible} onClose={closePasswordModal}>
      <Dialog open={passwordModalVisible} onClose={closePasswordModal}>
        <DialogTitle>비밀번호 변경</DialogTitle>
        <DialogContent className="modal-content">
          <StyledTextField
          type="password"
          placeholder="현재 비밀번호"
          value={passwordChange.currentPassword}
          onChange={(e) => setPasswordChange((prev) => ({ ...prev, currentPassword: e.target.value }))}/>
          <StyledTextField
          type="password"
          placeholder="새로운 비밀번호"
          value={passwordChange.newPassword}
          onChange={(e) => setPasswordChange((prev) => ({ ...prev, newPassword: e.target.value }))}/>
          <StyledTextField
          type="password"
          placeholder="새로운 비밀번호 확인"
          value={passwordChange.confirmNewPassword}
          onChange={(e) => setPasswordChange((prev) => ({ ...prev, confirmNewPassword: e.target.value }))}/>
          <Button onClick={closePasswordModal}>Reset</Button>
          <Button onClick={savePasswordChanges}>저장</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePasswordModal}>닫기</Button>
        </DialogActions>
      </Dialog>
      </StyledDialog>

      {/* 메이트 수정 모달 */}
      <StyledDialog open={mateModalVisible} onClose={closeMateModal}>
      <Dialog open={mateModalVisible} onClose={closeMateModal}>
        <DialogTitle>메이트 수정</DialogTitle>
        <DialogContent className="modal-content text-center">
          <h1>메이트 수정</h1>
          <p>현재 메이트 목록:</p>
        <List>
      {mateList.map((mate) => (
        <ListItem
          key={mate.id}
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
</StyledDialog>

      {/* 목표 수정 모달 */}
      <StyledDialog open={goalModalVisible} onClose={closeGoalModal}>
      <Dialog open={goalModalVisible} onClose={closeGoalModal}>
        <DialogTitle>목표 수정</DialogTitle>
        <DialogContent className="modal-content">
          <label htmlFor="weightGoal" style={{ fontSize: '16px', fontWeight: 'bold', color: '#40ad8e' }}>
            목표 체중:
          </label>
          <StyledTextField id="weightGoal" type="text" placeholder="몸무게 목표를 입력하세요" fullWidth />
          <label htmlFor="exerciseGoal" style={{ fontSize: '16px', fontWeight: 'bold', color: '#40ad8e' }}>
            운동 목표:
          </label>
          <StyledTextField id="exerciseGoal" type="text" placeholder="운동 목표를 입력하세요" fullWidth />
          <label htmlFor="dietGoal" style={{ fontSize: '16px', fontWeight: 'bold', color: '#40ad8e' }}>
            식단 목표:
          </label>
          <StyledTextField id="dietGoal" type="text" placeholder="식단 목표를 입력하세요" fullWidth />
          <Button onClick={saveGoalChanges}>저장</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeGoalModal}>닫기</Button>
        </DialogActions>
      </Dialog>
      </StyledDialog>

    </StyledMain>
    </ThemeProvider>
  );
};

export default Mypage;

