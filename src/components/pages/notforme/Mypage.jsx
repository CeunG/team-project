import React, { useState } from "react";

// import "./Mypage.css";

function App() {
  const [isAlarmMenuVisible, setAlarmMenuVisibility] = useState(false);
  const [isMyMenuVisible, setMyMenuVisibility] = useState(false);
  const [isSideMenuActive, setSideMenuActive] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const toggleAlarmMenu = () => {
    setAlarmMenuVisibility(!isAlarmMenuVisible);
    setMyMenuVisibility(false);
  };

  const toggleMyMenu = () => {
    setMyMenuVisibility(!isMyMenuVisible);
    setAlarmMenuVisibility(false);
  };

  const toggleSideMenu = () => {
    setSideMenuActive(!isSideMenuActive);
  };

  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };

  // Other JavaScript functions...

  return (
    <div className='container' style={{ backgroundColor: "#fff" }}>
      {/* Header */}
      <header className='header'>
        <button className='logo'>
          <span>LOGO</span>
        </button>
        <button
          className='hamburger'
          style={{ border: "none", backgroundColor: "#fff" }}
          onClick={toggleSideMenu}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            className='bi bi-list'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
            />
          </svg>
        </button>
        <div className='search-bar'>
          <input type='search' placeholder='Search...' />
          <button>Search</button>
        </div>
        <div className='user-controls'>
          <button onClick={toggleAlarmMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='currentColor'
              className='bi bi-bell-fill'
              viewBox='0 0 16 16'
            >
              <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z' />
            </svg>
          </button>
          {isAlarmMenuVisible && (
            <div className='alarm-menu'>
              <a href='#'>일정알림</a>
              <a href='#'>댓글알림</a>
            </div>
          )}
          <button onClick={toggleMyMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              className='bi bi-person-fill'
              viewBox='0 0 16 16'
            >
              <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
            </svg>
          </button>
          {isMyMenuVisible && (
            <div className='my-menu'>
              <a href='#'>로그인</a>
              <a href='#'>회원가입</a>
              <a href='#'>로그아웃</a>
            </div>
          )}
        </div>
      </header>

      {/* Left Menu */}
      <div className='d-flex'>
        <div className='left-menu'>
          <div class='left-profile'>
            <img
              width='40'
              height='40'
              src='https://img.icons8.com/color/48/test-account.png'
              alt='test-account'
            />
            <h1>닉네임</h1>
          </div>
          <ul className='left-icon'>
            <li>
              <a href='#'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-house-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z' />
                  <path d='m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z' />
                </svg>
              </a>
            </li>
            <li>
              <a href='#'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-robot'
                  viewBox='0 0 16 16'
                >
                  <path d='M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z' />
                  <path d='M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z' />
                </svg>
              </a>
            </li>
            <li>
              <a href='#'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-calendar-day'
                  viewBox='0 0 16 16'
                >
                  <path d='M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z' />
                  <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
                </svg>
              </a>
            </li>
            <li>
              <a href='#'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-geo-alt-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                </svg>
              </a>
            </li>
            <li>
              <a href='#'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-person-vcard'
                  viewBox='0 0 16 16'
                >
                  <path d='M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z' />
                  <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z' />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className='side'>
          <div className='side-profile'>
            <img
              width='48'
              height='48'
              src='https://img.icons8.com/color/48/test-account.png'
              alt='test-account'
            />
            <h1>Nickname</h1>
            <p>Body 2</p>
          </div>
          <hr />
          <div className='side-menu'>
            <ul>
              <li>
                <a href='#'>
                  <span className=''>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      fill='currentColor'
                      class='bi bi-house-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z' />
                      <path d='m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z' />
                    </svg>
                  </span>
                  <span>HOME</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  {" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      fill='currentColor'
                      class='bi bi-robot'
                      viewBox='0 0 16 16'
                    >
                      <path d='M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z' />
                      <path d='M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z' />
                    </svg>
                  </span>
                  <span>기록</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      fill='currentColor'
                      class='bi bi-calendar-day'
                      viewBox='0 0 16 16'
                    >
                      <path d='M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z' />
                      <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
                    </svg>
                  </span>
                  <span>챗봇</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  {" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      fill='currentColor'
                      className='bi bi-geo-alt-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                    </svg>
                  </span>
                  <span>지도</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  {" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      fill='currentColor'
                      className='bi bi-person-vcard'
                      viewBox='0 0 16 16'
                    >
                      <path d='M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z' />
                      <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z' />
                    </svg>
                  </span>
                  <span>마이페이지</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <main
          className='main-content'
          style={{ height: "99%", width: "90%", backgroundColor: "#ECF1F4" }}
        >
          <div>
            <div className='middle'>
              <div className='middle-banner'>
                <p style={{ fontWeight: "bold", fontSize: "3rem" }}>MY PAGE</p>
                <p style={{ fontSize: "1.4rem" }}>
                  환영합니다!{" "}
                  <span className='username' style={{ fontWeight: "bold" }}>
                    username
                  </span>
                  님!
                </p>
              </div>
              <div className='cards-container'>
                <div className='card'>
                  <h2>계정설정</h2>
                  <p>연동된 이메일</p>
                  <input className='email' type='text' placeholder='abcabc123@email.net' />
                  <p>댓글 알림 받기</p>
                  <div className='check-wrap'>
                    <label className='switch'>
                      <input type='checkbox' className='reply-alarm' />
                      <span className='slider'></span>
                    </label>
                  </div>
                  <p>팔로잉 알림 받기</p>
                  <div className='check-wrap'>
                    <label className='switch'>
                      <input type='checkbox' className='follow-alarm' />
                      <span className='slider'></span>
                    </label>
                  </div>
                  <p>아이디</p>
                  <button>아이디 변경하기</button>
                  <p>비밀번호 재설정</p>
                  <button>비밀번호 변경하기</button>
                  <button>계정삭제</button>
                </div>
                <div className='card2'>
                  <h2>나의 정보 수정</h2>
                  <p>프로필</p>
                  <button onClick={openProfileModal}>프로필 변경하기</button>
                  <p>나의 메이트들</p>
                  <button>메이트 수정</button>
                  <p>나의 목표</p>
                  <button>목표 수정</button>
                </div>
              </div>
            </div>

            {/* Profile Change Popup */}
            <div id='profileModal' className='modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeProfileModal}>
                  &times;
                </span>
                <img
                  width='80'
                  height='80'
                  src='https://img.icons8.com/color/48/test-account.png'
                  alt='test-account'
                />
                <h1>프로필</h1>
                <input type='text' placeholder='이름' />
                <input type='text' placeholder='자기소개' />
                <button>Reset</button>
                <button>저장</button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className='container' style={{ backgroundColor: "#fff" }}>
        <p>Copyright © 2023. Premium</p>
      </footer>
    </div>
  );
}

export default App;
