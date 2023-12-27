import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

function Sidebar() {
  return (
    <div className=''>
      {/* ------- sidebar start ------- */}
      <aside className='sidebar'>
        <div className=''>
          <aside className=''>
            <button className='sidebarbtn-2' style={{ backgroundColor: "white" }}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  fill='currentColor'
                  className='bi bi-person-circle'
                  viewBox='0 0 16 16'
                >
                  <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                  <path
                    fillRule='evenodd'
                    d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
                  />
                </svg>
              </span>
              <div style={{ height: "20px" }}></div>
              <span>nickname</span>
            </button>
            <div className='box'></div>
            <button className='sidebarbtn' style={{ backgroundColor: "white" }}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-house-fill'
                  viewBox='0 0 16 16'
                  style={{ position: "relative", top: "-2px" }}
                >
                  <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z' />
                  <path d='m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z' />
                </svg>
              </span>
              &nbsp;&nbsp;
              <Link to='/'>Home</Link>
            </button>
            <button className='sidebarbtn' style={{ backgroundColor: "white" }}>
              <span className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-robot'
                  viewBox='0 0 16 16'
                  style={{ position: "relative", top: "-2px" }}
                >
                  <path d='M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z' />
                  <path d='M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z' />
                </svg>
              </span>
              &nbsp;&nbsp;
              <Link to='/chatbot'>Chatbot</Link>
            </button>
            <button className='sidebarbtn' style={{ backgroundColor: "white" }}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-calendar-day'
                  viewBox='0 0 16 16'
                  style={{ position: "relative", top: "-2px" }}
                >
                  <path d='M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z' />
                  <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
                </svg>
              </span>
              &nbsp;&nbsp;
              <Link to='/calendar'>Calendar</Link>
            </button>
            <button className='sidebarbtn' style={{ backgroundColor: "white" }}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-geo-alt-fill'
                  viewBox='0 0 16 16'
                  style={{ position: "relative", top: "-2px" }}
                >
                  <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                </svg>
              </span>
              &nbsp;&nbsp;
              <Link to='/map'>Map</Link>
            </button>
            <button className='sidebarbtn' style={{ backgroundColor: "white" }}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  fill='currentColor'
                  className='bi bi-person-vcard'
                  viewBox='0 0 16 16'
                  style={{ position: "relative", top: "-2px" }}
                >
                  <path d='M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z' />
                  <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z' />
                </svg>
              </span>
              &nbsp;&nbsp;
              <Link to='/mypage'>My Page</Link>
            </button>
          </aside>
        </div>
      </aside>
      {/* ------- sidebar end ------- */}
    </div>
  );
}

export default Sidebar;
