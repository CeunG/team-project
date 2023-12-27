import React from 'react';
import { Link } from 'react-router-dom';
import { LuGoal } from "react-icons/lu";
import { BsPencilSquare, BsArrowLeftCircleFill, BsImage } from "react-icons/bs";
import Buttons from './Buttons';


function Popslide() {
  return (
    <div id="pop-slide">
      <div className="pop-slide-mates ">
        <button type="button" class="btn-close-box-wrap">
          <BsArrowLeftCircleFill class="btn-close-box">닫기</BsArrowLeftCircleFill>
        </button>

        <div className='numof-mates-wrap'>
          <p>내 메이트들</p>
          <span className="numof-mates">
            총<span>23</span>명
          </span>
          <button type="button" className="icon-modify">
            수정<BsPencilSquare />
          </button>
        </div>


        <ul className="record-list-mini">

          <li>
            <div className="checkbox-wrap">
              <label for="check-target-1"></label>
              <input type="checkbox" id="check-target-1" value="checkbox" />
            </div>
            <div className="mate-pf-img">
              <BsImage class="icon-pic">프로필 이미지</BsImage>
            </div>
            <p className="nickname">갓생도전인</p>
            <div className="wrap-hash">
              <Link to="#" className="list-hash"><span>#갓생</span></Link>
              <Link to="#" className="list-hash"><span>#입시</span></Link>
              <Link to="#" className="list-hash"><span>#다이어트</span></Link>
            </div>

            <div className='record-wrap'>
              <p className="record-list">
                목표
                <span>5개</span>
              </p>
              <p className="record-list">
                기록
                <span>120개</span>
              </p>
            </div>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>

            <Buttons size="small" className="in-unfllow-btn" >unfollow</Buttons>
          </li>


          <li>
            <div className="checkbox-wrap">
              <label for="check-target-1"></label>
              <input type="checkbox" id="check-target-1" value="checkbox" />
            </div>
            <div className="mate-pf-img">
              <BsImage class="icon-pic">프로필 이미지</BsImage>
            </div>
            <p className="nickname">갓생도전인</p>
            <div className="wrap-hash">
              <Link to="#" className="list-hash"><span>#갓생</span></Link>
              <Link to="#" className="list-hash"><span>#입시</span></Link>
              <Link to="#" className="list-hash"><span>#다이어트</span></Link>
            </div>

            <div className='record-wrap'>
              <p className="record-list">
                목표
                <span>5개</span>
              </p>
              <p className="record-list">
                기록
                <span>120개</span>
              </p>
            </div>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>

            <Buttons size="small" className="in-unfllow-btn" >unfollow</Buttons>
          </li>


          <li>
            <div className="checkbox-wrap">
              <label for="check-target-1"></label>
              <input type="checkbox" id="check-target-1" value="checkbox" />
            </div>
            <div className="mate-pf-img">
              <BsImage class="icon-pic">프로필 이미지</BsImage>
            </div>
            <p className="nickname">갓생도전인</p>
            <div className="wrap-hash">
              <Link to="#" className="list-hash"><span>#갓생</span></Link>
              <Link to="#" className="list-hash"><span>#입시</span></Link>
              <Link to="#" className="list-hash"><span>#다이어트</span></Link>
            </div>

            <div className='record-wrap'>
              <p className="record-list">
                목표
                <span>5개</span>
              </p>
              <p className="record-list">
                기록
                <span>120개</span>
              </p>
            </div>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>

            <Buttons size="small" className="in-unfllow-btn" >unfollow</Buttons>
          </li>



          <li>
            <div className="checkbox-wrap">
              <label for="check-target-1"></label>
              <input type="checkbox" id="check-target-1" value="checkbox" />
            </div>
            <div className="mate-pf-img">
              <BsImage class="icon-pic">프로필 이미지</BsImage>
            </div>
            <p className="nickname">갓생도전인</p>
            <div className="wrap-hash">
              <Link to="#" className="list-hash"><span>#갓생</span></Link>
              <Link to="#" className="list-hash"><span>#입시</span></Link>
              <Link to="#" className="list-hash"><span>#다이어트</span></Link>
            </div>

            <div className='record-wrap'>
              <p className="record-list">
                목표
                <span>5개</span>
              </p>
              <p className="record-list">
                기록
                <span>120개</span>
              </p>
            </div>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>

            <Buttons size="small" className="in-unfllow-btn" >unfollow</Buttons>
          </li>


          <li>
            <div className="checkbox-wrap">
              <label for="check-target-1"></label>
              <input type="checkbox" id="check-target-1" value="checkbox" />
            </div>
            <div className="mate-pf-img">
              <BsImage class="icon-pic">프로필 이미지</BsImage>
            </div>
            <p className="nickname">갓생도전인</p>
            <div className="wrap-hash">
              <Link to="#" className="list-hash"><span>#갓생</span></Link>
              <Link to="#" className="list-hash"><span>#입시</span></Link>
              <Link to="#" className="list-hash"><span>#다이어트</span></Link>
            </div>

            <div className='record-wrap'>
              <p className="record-list">
                목표
                <span>5개</span>
              </p>
              <p className="record-list">
                기록
                <span>120개</span>
              </p>
            </div>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>

            <Buttons size="small" className="in-unfllow-btn" >unfollow</Buttons>
          </li>

        </ul>
      </div>


      <div className="pop-slide-recomm">
        <button type="button" class="btn-close-box-wrap">
          <BsArrowLeftCircleFill class="btn-close-box">닫기</BsArrowLeftCircleFill>
        </button>

        <div class="mypf-wrap">
          <div class="mypf-pic"><BsImage class="icon-pic">프로필 이미지</BsImage></div>
          <p className="nickname">갓생도전인</p>
          <div className="wrap-hash">
            <Link to="#" className="list-hash"><span>#갓생</span></Link>
            <Link to="#" className="list-hash"><span>#입시</span></Link>
            <Link to="#" className="list-hash"><span>#다이어트</span></Link>
          </div>
        </div>

        <p class="sub-tit">목표</p>
        <ul className="goal-list-mini">
          <li>
            <p className="goal-list-tit">
              <LuGoal className="icon-goal" />
              단기간 체지방률 줄이기!
            </p>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>

          </li>

          <li>
            <p className="goal-list-tit">
              <LuGoal className="icon-goal" />
              단기간 체지방률 줄이기!
            </p>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>
          </li>

          <li>
            <p className="goal-list-tit">
              <LuGoal className="icon-goal" />
              단기간 체지방률 줄이기!
            </p>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>
          </li>

          <li>
            <p className="goal-list-tit">
              <LuGoal className="icon-goal" />
              단기간 체지방률 줄이기!
            </p>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>
          </li>

          <li>
            <p className="goal-list-tit">
              <LuGoal className="icon-goal" />
              단기간 체지방률 줄이기!
            </p>

            <div class="numof-wrap">
              <span className="numof-like">
                좋아요<span>8</span>
              </span>
              <span className="numof-commt">
                댓글<span>10</span>
              </span>
            </div>
          </li>

        </ul>

        <Buttons size="small" className="in-fllow-btn" >팔로우</Buttons>
        <Buttons size="small" className="in-message-btn" >메세지</Buttons>
      </div>

    </div>
  )
}

export default Popslide;