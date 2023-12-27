import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import { SlPicture } from "react-icons/sl";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import Popslide from './Popslide';
import Popform from './Popform';


function Main() {

  return (

    <main>
      <h2 className="cate-tit radius-15">Mates</h2>

      <div className="grid-wrap">
        <section className="sec-left radius-25">
          <div className="mates-list-wrap">
            <p className="sub-tit">내 메이트들</p>
            <div className="mates-list">
              <ul>
                <li className="mates mates1">
                  <span>친구1사진</span>
                </li>
                <li className="mates mates2">
                  <span>친구2사진</span>
                </li>
                <li className="mates mates3">
                  <span>친구3사진</span>
                </li>
                <li className="mates mates4">
                  <span>친구4사진</span>
                </li>
                <li className="mates mates3">
                  <span>친구3사진</span>
                </li>
                <li className="mates mates1">
                  <span>친구4사진</span>
                </li>
              </ul>
            </div>

            <p className="mates-list-total">
              + <span>4</span>
            </p>

            <button className="btn-new-circle" type="button">추가</button>
          </div>

          <div className="form-search">
            <form>
              <label className="txt-light" for="search">find new mates</label>
              <input className="in-search-bar" type="text" id="search" name="search" placeholder="search" />
              <Buttons size="small" className="in-search-btn" >Enter</Buttons>
              <span className="txt-light">나의 같은 관심사를 가진 메이트들을 찾아보세요!</span>
            </form>
          </div>

          <div className="mates-recomm">
            <p className="sub-tit">추천 메이트</p>
            <div className="lists-wrap">
              <ul>
                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate"></span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                        <li><Link to="#">#주3회</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>

                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                        <li><Link to="#">#탄탄지</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>

                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>


                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>


                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>


                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>

                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>

                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>

                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>

                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>

                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>


                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>


                <li className='radius-500'>
                  <div className="in-list">
                    <span className="pic-rmm-mate">

                    </span>
                    <div className="wrap-hash">
                      <p className="bold-tit">Fnickname</p>
                      <ul className="hash-list">
                        <li><Link to="#">#diet</Link></li>
                        <li><Link to="#">#건강하기</Link></li>
                        <li><Link to="#">#같이할사람</Link></li>
                      </ul>
                    </div>
                    <div className="input-date">12.00 ~</div>
                    <div className="btn-area">
                      <Buttons size="small" className="in-follow-btn" >Follow</Buttons>
                    </div>
                  </div>
                </li>


              </ul>
            </div>
          </div>



          <Popslide />

        </section>


        <section className='sec-my radius-25'>
          <div className="record-info-box">
            <p className="sub-tit">나의 기록</p>
            <div className="info-box-txt">
              <p>목표 설정학고 기록하기</p>
              <ul className="count-list">
                <li>올린 피드<span class="point-tit">1개</span></li>
                <li>나의 목표 지금까지<span class="point-tit">6개</span></li>
              </ul>
            </div>

            <div className="pic-concept">
              <SlPicture class="icon-file">
                <span>프로필 이미지...아니면 기록 카테고리 전용 자극짤</span>
              </SlPicture>
            </div>

            <div className="btn-graph">
              <Link to="#" className='btn-graph-link'>
                내가 이룬 목표들
                <BsFileEarmarkBarGraph />
              </Link>
            </div>
          </div>
        </section>

        <section className="sec-right radius-25">
          <div className="record-forms">
            <div className="sec-calendar">
              달력 넣기(라이브러리)
            </div>

            <section className="sec-goal">

              <div className="sec-top">
                <p className="sub-tit">목표</p>

                <div className="sec-ctrl">
                  <div className="selectbox-sort">
                    <form>
                      <select>
                        <option value="sort-regi">등록순</option>
                        <option value="sort-target">미완료 목표들</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>


              <div className="form-goal chkform">
                <form>
                  <fieldset>
                    <legend>목표</legend>

                    <div className="goal-list-wrap chkform-list-wrap">
                      <ul className="goal-list chkform-list">
                        <li>
                          <div className="input-wrap">
                            <input type="checkbox" id="goal-list-1" value="목표1" />
                            <label for="goal-list-1">1월까지 체중감량 3kg</label>
                          </div>
                          <p className="input-data">2023.12.30</p>
                          <button className="btn-delte" type="button">
                            삭제
                          </button>
                        </li>

                        <li>
                          <div className="input-wrap">
                            <input type="checkbox" id="goal-list-2" value="목표1" />
                            <label for="goal-list-2">1월까지 체중감량 3kg</label>
                          </div>
                          <p className="input-data">2023.12.30</p>
                          <button className="btn-delte" type="button">
                            삭제
                          </button>
                        </li>

                        <li>
                          <div className="input-wrap">
                            <input type="checkbox" id="goal-list-3" value="목표1" />
                            <label for="goal-list-3">1월까지 체중감량 3kg</label>
                          </div>
                          <p className="input-data">2023.12.30</p>
                          <button className="btn-delte" type="button">
                            삭제
                          </button>
                        </li>
                      </ul>

                      <div className="input-addlist">
                        <button className="btn-plus" type="button">ADD</button>
                        <div className='new-input-warp'>
                          <label for="new-list"></label>
                          <input type="text" id="new-list" placeholder="새로운 목표를 입력해주세요" />
                        </div>
                        <button className="btn-submit" type="submit">Enter</button>
                      </div>

                    </div>
                  </fieldset>
                </form>
              </div>
            </section>


            <section className="sec-record">

              <div className="sec-top">
                <p className="sub-tit">기록</p>

                <div className="date-btns">
                  <span className="date-today">today</span>

                  <div className="btns">
                    <span className="btn-prev">prev</span>
                    <span className="btn-next">next</span>
                  </div>
                </div>

                <div className="sec-ctrl">
                  <div className="selectbox-sort">
                    <form>
                      <select>
                        <option value="sort-regi">등록순</option>
                        <option value="sort-target">미완료 목표들</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>


              <div className="form-goal chkform">
                <form>
                  <fieldset>
                    <legend>기록</legend>

                    <div className="regi-list-wrap chkform-list-wrap">
                      <ul className="regi-list chkform-list">
                        <li>
                          <div className="input-wrap">
                            <input type="checkbox" id="record-list-1" value="기록1" />
                            <label for="record-list-1">물 섭취 1.5L </label>
                          </div>
                          <button className="btn-delte" type="button">
                            삭제
                          </button>
                        </li>

                        <li>
                          <div className="input-wrap">
                            <input type="checkbox" id="record-list-1" value="기록1" />
                            <label for="record-list-1">물 섭취 1.5L </label>
                          </div>
                          <button className="btn-delte" type="button">
                            삭제
                          </button>
                        </li>

                        <li>
                          <div className="input-wrap">
                            <input type="checkbox" id="record-list-1" value="기록1" />
                            <label for="record-list-1">물 섭취 1.5L </label>
                          </div>
                          <button className="btn-delte" type="button">
                            삭제
                          </button>
                        </li>
                      </ul>

                      <div className="input-addlist">
                        <button className="btn-plus" type="button">ADD</button>
                        <div className='new-input-warp'>
                          <label for="new-list"></label>
                          <input type="text" id="new-list" placeholder="오늘을 기록 해주세요" />
                        </div>
                        <button className="btn-submit" type="submit">Enter</button>
                      </div>
                    </div>
                  </fieldset>

                </form>
              </div>

            </section>


            <section className="sec-diary">
              <div className="sec-top">
                <p className="sub-tit">
                  일기<span>소소한 이야기</span>
                </p>

                <div className="btns">
                  <span className="btn-prev">prev</span>
                  <span className="btn-next">next</span>
                </div>
              </div>

              <div className='diary-all-wrap'>
                <div className="diary-list-wrap">

                  <div className="btn-add-wrap">
                    <button className="btn-plus" type="button">ADD</button>
                  </div>

                  <div className='content-diary'>
                    <div className="input-date">12.00 일요일 </div>
                    <div className="pic-area">
                      <SlPicture className='icon-file' />
                    </div>
                    <p className="sub-tit">food!</p>
                    <p className="content-txt">Some quick example text to build
                      on the card title and content.</p>
                    <button className="btn-delte" type="button">삭제</button>
                  </div>

                  <div className='content-diary'>
                    <div className="input-date">12.00 월요일</div>
                    <div className="pic-area">
                      <SlPicture className='icon-file' />
                    </div>
                    <p className="sub-tit">ate something at starbucks</p>
                    <p className="content-txt">Some quick example text to build on the card title and make up the
                      bulk of the card’s content.</p>
                    <button className="btn-delte" type="button">삭제</button>
                  </div>

                </div>
              </div>
            </section>
          </div>

          <Popform />

        </section>

      </div>
    </main>
  )
}

export default Main