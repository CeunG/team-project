import React from "react";
import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa6";
import { BsHouseDoorFill, BsCalendarMonthFill, BsMapFill, BsEmojiWinkFill } from "react-icons/bs";

function Category() {
  return (
    <div id='cate' className='category '>
      {/* active */}

      <div className='section-me'>
        <div className='pic-profile'>
          <Link to='#'>
            <span>my profile</span>
          </Link>
        </div>
        <p className='nickname-me'>내닉네임</p>
      </div>

      <nav className='category--lists'>
        <ul className='category--lists-ul'>
          <li className='category--lists-li'>
            <Link to='/home'>
              <BsHouseDoorFill className='icon-cate' />
              <span className='category--lists-txt'>HOME</span>
            </Link>
          </li>
          <li className='category--lists-li'>
            <Link to='/record'>
              <BsCalendarMonthFill className='icon-cate' />
              <span className='category--lists-txt'>기록</span>
            </Link>
          </li>
          <li className='category--lists-li'>
            <Link to='/chatbot'>
              <FaRobot className='icon-cate' />
              <span className='category--lists-txt'>챗봇</span>
            </Link>
          </li>
          <li className='category--lists-li'>
            <Link to='/map'>
              <BsMapFill className='icon-cate' />
              <span className='category--lists-txt'>지도</span>
            </Link>
          </li>
          <li className='category--lists-li'>
            <Link to='/mypage'>
              <BsEmojiWinkFill className='icon-cate' />
              <span className='category--lists-txt'>마이페이지</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Category;
