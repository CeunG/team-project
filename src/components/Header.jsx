import React from "react";
import "../assets/css/style.css";

function Header() {
  return (
    /* ------- header start ------- */
    <div
      className='header'
      style={{ boxShadow: "0 0 20px rgba(0,0,0,0.3)", backgroundColor: "#fff" }}
    >
      <header className='header'>
        <button className='logo'>
          <span>LOGO</span>
        </button>
        <div className='search-bar'>
          <input type='search' placeholder='   Search...' />
          &nbsp;&nbsp;
          <button>Search</button>
        </div>
        <div className='userbellicon'>
          <button>
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
          <button>
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
        </div>
      </header>
    </div>
    /* ------- header end ------- */
  );
}

export default Header;
