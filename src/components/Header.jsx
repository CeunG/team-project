import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Buttons from './Buttons';
import Category from './Category';
import '../assets/PJTstyle.scss';

import { BsBellFill, BsFillPersonFill, BsFillGrid3X3GapFill } from 'react-icons/bs';


function Header() {
  return (
    <header>

      <div id="header-intro">
        <div class="header-intro-wrap">
          <h1 id="logo" className="">
            {/* <Link to="#">logo</Link> */}
            logo
          </h1>

          <div className="form-search ">
            <form>
              <label for="search"></label>
              <input className="search-bar" type="text" id="search" name="search" placeholder="검색어를 입력해주세요" />

              <Buttons size="small">search</Buttons>
            </form>
          </div>

          <ul className="dropdown ">
            <li className="notice">
              <p class="icon-dropmenu"><BsBellFill size="20" color="#444" />알림</p>
              <div className="dropdown-box off">
                <p className="dropdown-label">알림</p>
                <ul className="dropdown-list">
                  <li><Link to="#">일정 알림</Link></li>
                  <li><Link to="#">댓글 알림</Link></li>
                </ul>
              </div>
            </li>

            <li className="me">
              <p class="icon-dropmenu"><BsFillPersonFill size="20" color="#444" />마이페이지</p>
              <div className="dropdown-box off">
                <p className="dropdown-label txt-light">마이페이지</p>
                <ul className="dropdown-list">
                  <li><Link to="login">로그인</Link></li>
                  <li><Link to="sign">회원가입</Link></li>
                  <li><Link to="#">로그아웃</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="category-trigger">
          <button type="button" class="btn-menu"><BsFillGrid3X3GapFill className="icon-menu" /></button>
        </div>

      </div>

      <Category />

    </header>
  )
}

export default Header