import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Category from './Category';


import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
//logo용으로 그냥함
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';



function Header() {
  return (
    <header>

      <div id="header-intro">
        <div class="header-intro-wrap">
          <h1 id="logo" className="logo">
            <IconButton aria-label="logo" color="primary">
              <TravelExploreOutlinedIcon />
            </IconButton>
          </h1>


          <div className="form-search ">
            <form>
              <label for="search"></label>
              <input className="search-bar" type="text" id="search" name="search" placeholder="검색어를 입력해주세요" />

              <IconButton aria-label="search" disabled color="primary">
                <SearchOutlinedIcon className='icon-search' />
              </IconButton>
            </form>
          </div>

          <ul className="dropdown ">
            <li className="notice">
              <Button variant="text" endIcon={<NotificationsActiveOutlinedIcon />} href="#">
                notice
              </Button>
              <div className="dropdown-box off">
                <p className="dropdown-label">알림</p>
                <ul className="dropdown-list">
                  <li><Link to="#">일정 알림</Link></li>
                  <li><Link to="#">댓글 알림</Link></li>
                </ul>
              </div>
            </li>

            <li className="me">
              <Button variant="text" endIcon={<InsertEmoticonOutlinedIcon />} href="#">
                mypage
              </Button>
              <div className="dropdown-box off">
                <p className="dropdown-label txt-light">마이페이지</p>
                <ul className="dropdown-list">
                  <li><Link to="#">로그인</Link></li>
                  <li><Link to="#">회원가입</Link></li>
                  <li><Link to="#">로그아웃</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="category-trigger">
          {/* <button type="button" class="btn-menu"><BsFillGrid3X3GapFill className="icon-menu" /></button> */}
          <IconButton className='icon-menutrigger' aria-label="add to shopping cart">
            <MenuOpenOutlinedIcon />
          </IconButton>
        </div>

      </div>


      <Category />

    </header>
  )
}

export default Header