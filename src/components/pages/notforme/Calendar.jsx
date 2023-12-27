import React from "react";
// import "./record.css";
// import "./icons.css";
// import "./header.css";
// import "./comm.css";
// import other necessary assets and components

function Project() {
  return (
    <div id='wrap'>
      <header>
        <div id='header-top'>
          <div>
            <h1 id='logo'>
              <a href='#'>logo</a>
            </h1>
            <div className='form-search'>
              <form>
                <label htmlFor='search'></label>
                <input
                  className='search-bar'
                  type='text'
                  id='search'
                  name='search'
                  placeholder='검색어를 입력해주세요'
                />
                <button
                  className='search-button'
                  type='button'
                  id='search-btn'
                  name='searchBtn'
                  value='ENTER'
                >
                  search
                </button>
              </form>
            </div>
            <ul className='dropdown'>
              <li className='notice'>
                <i className='bi bi-bell'></i>
                <div className='dropdown-box off'>
                  <p className='dropdown-label txt-light'>알림</p>
                  <ul className='dropdown-list'>
                    <li>
                      <a href=''>일정 알림</a>
                    </li>
                    <li>
                      <a href=''>댓글 알림</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='me'>
                <i className='bi bi-person'></i>
                <div className='dropdown-box off'>
                  <p className='dropdown-label txt-light'>마이페이지</p>
                  <ul className='dropdown-list'>
                    <li>
                      <a href=''>로그인</a>
                    </li>
                    <li>
                      <a href=''>회원가입</a>
                    </li>
                    <li>
                      <a href=''>로그아웃</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class='category-trigger'>
          <i class='bi bi-list'></i>
        </div>

        <div id='category' class=''>
          <div class='section-me'>
            <div class='pic-profile'>
              <a href='#'>
                <img src='./images/pic-porofile.png' alt='내 프로필 사진' />
              </a>
            </div>
            <p class='nickname-me f-w-medium'>내닉네임</p>
          </div>

          <nav>
            <ul>
              <li>
                <a href='/index.html'>
                  <i class='bi bi-house-door-fill'></i>
                  <span>HOME</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i class='bi bi-calendar-day-fill'></i>
                  <span>기록</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i class='bi bi-chat-quote-fill'></i>
                  <span>챗봇</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i class='bi bi-geo-alt-fill'></i>
                  <span>지도</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i class='bi bi-person-lines-fill'></i>
                  <span>마이페이지</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <h2 class='cate-tit'>Mates</h2>

        <div class='grid-wrap'>
          <section class='sec-left'>
            <div class='mates-list-wrap'>
              <p class='sub-tit'>내 메이트들</p>
              <div class='mates-list'>
                <ul>
                  <li class='mates mates1'>
                    <span>친구1사진</span>
                  </li>
                  <li class='mates mates2'>
                    <span>친구2사진</span>
                  </li>
                  <li class='mates mates3'>
                    <span>친구3사진</span>
                  </li>
                  <li class='mates mates4'>
                    <span>친구4사진</span>
                  </li>
                </ul>
              </div>

              <p class='mates-list-total'>
                + <span>4</span>
              </p>
              <button class='btn-new-circle' type='button'>
                추가
              </button>
            </div>

            <div class='form-search in-form-search'>
              <form>
                <label class='txt-light' for='search'>
                  find new mates
                </label>
                <input
                  class='in-search-bar'
                  type='text'
                  id='search'
                  name='search'
                  placeholder='search'
                />

                <button
                  class='in-search-button'
                  type='button'
                  id='search-btn'
                  name='searchBtn'
                  value='ENTER'
                >
                  검색
                </button>
                <span class='txt-light'>나의 같은 관심사를 가진 메이트들을 찾아보세요!</span>
              </form>
            </div>

            <div class='mates-recomm'>
              <p class='sub-tit'>추천 메이트</p>
              <div class='lists-wrap'>
                <ul>
                  <li>
                    <div class='in-list'>
                      <span class='pic-rmm-mate'>
                        <img src='./images/pic-mate-1@2x.png' alt='추천 친구 이미지' />
                      </span>
                      <div class='wrap-hash'>
                        <p class='sub-tit'>Fnickname</p>
                        <ul class='hash-list'>
                          <li>
                            <a href='#'>#diet</a>
                          </li>
                          <li>
                            <a href='#'>#건강하기</a>
                          </li>
                          <li>
                            <a href='#'>#같이할사람</a>
                          </li>
                          <li>
                            <a href='#'>#주3회</a>
                          </li>
                        </ul>
                      </div>
                      <div class='input-date'>12.00 ~</div>
                      <div class='btn-area'>
                        <button class='btn-fllw' type='button'>
                          팔로우
                        </button>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class='in-list'>
                      <span class='pic-rmm-mate'>
                        <img src='./images/pic-mate-2@2x.png' alt='추천 친구 이미지' />
                      </span>
                      <div class='wrap-hash'>
                        <p class='sub-tit'>Fnickname</p>
                        <ul class='hash-list'>
                          <li>
                            <a href='#'>#diet</a>
                          </li>
                          <li>
                            <a href='#'>#건강하기</a>
                          </li>
                          <li>
                            <a href='#'>#같이할사람</a>
                          </li>
                          <li>
                            <a href='#'>#탄탄지</a>
                          </li>
                        </ul>
                      </div>
                      <div class='input-date'>12.00 ~</div>
                      <div class='btn-area'>
                        <button class='btn-fllw' type='button'>
                          팔로우
                        </button>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class='in-list'>
                      <span class='pic-rmm-mate'>
                        <img src='./images/pic-mate-3@2x.png' alt='추천 친구 이미지' />
                      </span>
                      <div class='wrap-hash'>
                        <p class='sub-tit'>Fnickname</p>
                        <ul class='hash-list'>
                          <li>
                            <a href='#'>#diet</a>
                          </li>
                          <li>
                            <a href='#'>#건강하기</a>
                          </li>
                          <li>
                            <a href='#'>#같이할사람</a>
                          </li>
                        </ul>
                      </div>
                      <div class='input-date'>12.00 ~</div>
                      <div class='btn-area'>
                        <button class='btn-fllw' type='button'>
                          팔로우
                        </button>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class='in-list'>
                      <span class='pic-rmm-mate'>
                        <img src='./images/pic-mate-4@2x.png' alt='추천 친구 이미지' />
                      </span>
                      <div class='wrap-hash'>
                        <p class='sub-tit'>Fnickname</p>
                        <ul class='hash-list'>
                          <li>
                            <a href='#'>#diet</a>
                          </li>
                          <li>
                            <a href='#'>#건강하기</a>
                          </li>
                          <li>
                            <a href='#'>#같이할사람</a>
                          </li>
                        </ul>
                      </div>
                      <div class='input-date'>12.00 ~</div>
                      <div class='btn-area'>
                        <button class='btn-fllw' type='button'>
                          팔로우
                        </button>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class='in-list'>
                      <span class='pic-rmm-mate'>
                        <img src='./images/pic-mate-5@2x.png' alt='추천 친구 이미지' />
                      </span>
                      <div class='wrap-hash'>
                        <p class='sub-tit'>Fnickname</p>
                        <ul class='hash-list'>
                          <li>
                            <a href='#'>#diet</a>
                          </li>
                          <li>
                            <a href='#'>#건강하기</a>
                          </li>
                          <li>
                            <a href='#'>#같이할사람</a>
                          </li>
                        </ul>
                      </div>
                      <div class='input-date'>12.00 ~</div>
                      <div class='btn-area'>
                        <button class='btn-fllw' type='button'>
                          팔로우
                        </button>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class='in-list'>
                      <span class='pic-rmm-mate'>
                        <img src='./images/pic-mate-6@2x.png' alt='추천 친구 이미지' />
                      </span>
                      <div class='wrap-hash'>
                        <p class='sub-tit'>Fnickname</p>
                        <ul class='hash-list'>
                          <li>
                            <a href='#'>#diet</a>
                          </li>
                          <li>
                            <a href='#'>#건강하기</a>
                          </li>
                          <li>
                            <a href='#'>#같이할사람</a>
                          </li>
                        </ul>
                      </div>
                      <div class='input-date'>12.00 ~</div>
                      <div class='btn-area'>
                        <button class='btn-fllw' type='button'>
                          팔로우
                        </button>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class='in-list'>
                      <span class='pic-rmm-mate'>
                        <img src='./images/pic-mate-7@2x.png' alt='추천 친구 이미지' />
                      </span>
                      <div class='wrap-hash'>
                        <p class='sub-tit'>Fnickname</p>
                        <ul class='hash-list'>
                          <li>
                            <a href='#'>#diet</a>
                          </li>
                          <li>
                            <a href='#'>#건강하기</a>
                          </li>
                          <li>
                            <a href='#'>#같이할사람</a>
                          </li>
                        </ul>
                      </div>
                      <div class='input-date'>12.00 ~</div>
                      <div class='btn-area'>
                        <button class='btn-fllw' type='button'>
                          팔로우
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div id='pop-slide'>
              <div class='pop-slide-mates'>
                <button type='button'>닫기</button>

                <div>
                  <p>내 메이트들</p>
                  <span class='numof-mates'>
                    {" "}
                    총<span>23</span>명{" "}
                  </span>
                  <button type='button'>수정</button>
                </div>

                <ul class='record-list-mini'>
                  <li>
                    <div>
                      <label for='check-target-1'></label>
                      <input type='checkbox' id='check-target-1' value='checkbox' />
                    </div>

                    <div>프로필 이미지</div>
                    <p class='nickname'>갓생도전인</p>
                    <div class='wrap-hash'>
                      <a href='#'>
                        <span>#갓생</span>
                      </a>
                      <a href='#'>
                        <span>#입시</span>
                      </a>
                      <a href='#'>
                        <span>#다이어트</span>
                      </a>
                    </div>

                    <div>
                      <p class='record-list'>
                        목표
                        <span>5개</span>
                      </p>
                      <p class='record-list'>
                        기록
                        <span>120개</span>
                      </p>
                    </div>

                    <span class='numof-like'>
                      {" "}
                      좋아요<span>8</span>{" "}
                    </span>
                    <span class='numof-commt'>
                      {" "}
                      댓글<span>10</span>{" "}
                    </span>

                    <button type='button'>언팔로우</button>
                  </li>

                  <li>
                    <div>
                      <label for='check-target-1'></label>
                      <input type='checkbox' id='check-target-1' value='checkbox' />
                    </div>

                    <div>프로필 이미지</div>
                    <p class='nickname'>갓생도전인</p>
                    <div class='wrap-hash'>
                      <a href='#'>
                        <span>#갓생</span>
                      </a>
                      <a href='#'>
                        <span>#입시</span>
                      </a>
                      <a href='#'>
                        <span>#다이어트</span>
                      </a>
                    </div>

                    <div>
                      <p class='record-list'>
                        목표
                        <span>5개</span>
                      </p>
                      <p class='record-list'>
                        기록
                        <span>120개</span>
                      </p>
                    </div>

                    <span class='numof-like'>
                      {" "}
                      좋아요<span>8</span>{" "}
                    </span>
                    <span class='numof-commt'>
                      {" "}
                      댓글<span>10</span>{" "}
                    </span>

                    <button type='button'>언팔로우</button>
                  </li>

                  <li>
                    <div>
                      <label for='check-target-1'></label>
                      <input type='checkbox' id='check-target-1' value='checkbox' />
                    </div>

                    <div>프로필 이미지</div>
                    <p class='nickname'>갓생도전인</p>
                    <div class='wrap-hash'>
                      <a href='#'>
                        <span>#갓생</span>
                      </a>
                      <a href='#'>
                        <span>#입시</span>
                      </a>
                      <a href='#'>
                        <span>#다이어트</span>
                      </a>
                    </div>

                    <div>
                      <p class='record-list'>
                        목표
                        <span>5개</span>
                      </p>
                      <p class='record-list'>
                        기록
                        <span>120개</span>
                      </p>
                    </div>

                    <span class='numof-like'>
                      {" "}
                      좋아요<span>8</span>{" "}
                    </span>
                    <span class='numof-commt'>
                      {" "}
                      댓글<span>10</span>{" "}
                    </span>

                    <button type='button'>언팔로우</button>
                  </li>

                  <li>
                    <div>
                      <label for='check-target-1'></label>
                      <input type='checkbox' id='check-target-1' value='checkbox' />
                    </div>

                    <div>프로필 이미지</div>
                    <p class='nickname'>갓생도전인</p>
                    <div class='wrap-hash'>
                      <a href='#'>
                        <span>#갓생</span>
                      </a>
                      <a href='#'>
                        <span>#입시</span>
                      </a>
                      <a href='#'>
                        <span>#다이어트</span>
                      </a>
                    </div>

                    <div>
                      <p class='record-list'>
                        목표
                        <span>5개</span>
                      </p>
                      <p class='record-list'>
                        기록
                        <span>120개</span>
                      </p>
                    </div>

                    <span class='numof-like'>
                      {" "}
                      좋아요<span>8</span>{" "}
                    </span>
                    <span class='numof-commt'>
                      {" "}
                      댓글<span>10</span>{" "}
                    </span>

                    <button type='button'>언팔로우</button>
                  </li>
                </ul>
              </div>

              <div class='pop-slide-recomm'>
                <button type='button'>닫기</button>
                <div>
                  <div>프로필 이미지</div>
                  <p class='nickname'>갓생도전인</p>
                  <div class='wrap-hash'>
                    <a href='#'>
                      <span>#diet</span>
                    </a>
                    <a href='#'>
                      <span>#건강하기</span>
                    </a>
                    <a href='#'>
                      <span>#같이해요</span>
                    </a>
                  </div>
                </div>

                <p>목표</p>
                <ul class='goal-list-mini'>
                  <li>
                    <p class='goal-list-1'>단기간 체지방률 줄이기!</p>

                    <div>
                      <span class='numof-like'>
                        {" "}
                        좋아요<span>10</span>{" "}
                      </span>
                      <span class='numof-commt'>
                        {" "}
                        댓글<span>10</span>{" "}
                      </span>
                    </div>
                  </li>

                  <li>
                    <p class='goal-list-1'>단기간 체지방률 줄이기!</p>

                    <div>
                      <span class='numof-like'>
                        {" "}
                        좋아요<span>10</span>{" "}
                      </span>
                      <span class='numof-commt'>
                        {" "}
                        댓글<span>10</span>{" "}
                      </span>
                    </div>
                  </li>

                  <li>
                    <p class='goal-list-1'>단기간 체지방률 줄이기!</p>

                    <div>
                      <span class='numof-like'>
                        {" "}
                        좋아요<span>10</span>{" "}
                      </span>
                      <span class='numof-commt'>
                        {" "}
                        댓글<span>10</span>{" "}
                      </span>
                    </div>
                  </li>

                  <li>
                    <p class='goal-list-1'>단기간 체지방률 줄이기!</p>

                    <div>
                      <span class='numof-like'>
                        {" "}
                        좋아요<span>10</span>{" "}
                      </span>
                      <span class='numof-commt'>
                        {" "}
                        댓글<span>10</span>{" "}
                      </span>
                    </div>
                  </li>

                  <li>
                    <p class='goal-list-1'>단기간 체지방률 줄이기!</p>

                    <div>
                      <span class='numof-like'>
                        {" "}
                        좋아요<span>10</span>{" "}
                      </span>
                      <span class='numof-commt'>
                        {" "}
                        댓글<span>10</span>{" "}
                      </span>
                    </div>
                  </li>
                </ul>

                <button type='button'>팔로우 요청</button>
                <button type='button'>메세지 보내기</button>
              </div>
            </div>
          </section>

          <section class='sec-right'>
            <div class='record-info-box'>
              <p class='sub-tit'>나의 기록</p>
              <div class='info-box-txt'>
                <p>목표 설정학고 기록하기</p>
                <ul class='count-list'>
                  <li>
                    올린 피드<span>1개</span>
                  </li>
                  <li>
                    나의 목표 지금까지<span>6개</span>
                  </li>
                  <li></li>
                </ul>
                <div class='btn-graph'>
                  <a href='#'>
                    내가 이룬 목표들
                    <i class='bi bi-clipboard-data'></i>
                  </a>
                </div>
              </div>

              <div class='pic-concept'>
                <span>프로필 이미지...아니면 기록 카테고리 전용 자극짤</span>
              </div>
            </div>

            <div class='record-forms'>
              <div class='sec-calendar'>달력 넣기(라이브러리)</div>

              <section class='sec-goal sec-g-r-wrap'>
                <div class='sec-top'>
                  <p class='sub-tit-bottom8'>목표</p>

                  <div class='sec-ctrl'>
                    <div class='selectbox-sort'>
                      <form>
                        <select>
                          <option value='sort-regi'>등록순</option>
                          <option value='sort-target'>미완료 목표들</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>

                <div class='form-goal chkform'>
                  <form>
                    <fieldset>
                      <legend>목표</legend>

                      <div class='goal-list-wrap chkform-list-wrap'>
                        <ul class='goal-list chkform-list'>
                          <li>
                            <div class='input-wrap'>
                              <input type='checkbox' id='goal-list-1' value='목표1' />
                              <label for='goal-list-1'>1월까지 체중감량 3kg</label>
                            </div>
                            <p class='goal-txt active'>내년 목표 중 하나 체중 감량 3kg하기!</p>
                            <p class='input-data'>2023.12.30</p>
                            <button class='btn-delt' type='button'>
                              삭제
                            </button>
                          </li>

                          <li>
                            <div class='input-wrap'>
                              <input type='checkbox' id='goal-list-2' value='목표1' />
                              <label for='goal-list-2'>1월까지 체중감량 3kg</label>
                            </div>
                            <p class='input-data'>2023.12.30</p>
                            <button class='btn-delt' type='button'>
                              삭제
                            </button>
                          </li>

                          <li>
                            <div class='input-wrap'>
                              <input type='checkbox' id='goal-list-3' value='목표1' />
                              <label for='goal-list-3'>1월까지 체중감량 3kg</label>
                            </div>
                            <p class='input-data'>2023.12.30</p>
                            <button class='btn-delt' type='button'>
                              삭제
                            </button>
                          </li>
                        </ul>

                        <div class='input-addlist'>
                          <button class='btn-plus' type='button'>
                            ADD
                          </button>
                          <div>
                            <label for='new-list'></label>
                            <input
                              type='text'
                              id='new-list'
                              placeholder='새로운 목표를 입력해주세요'
                            />
                          </div>
                          <button class='btn-submit' type='submit'>
                            Enter
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </section>

              <section class='sec-record sec-g-r-wrap'>
                <div class='sec-top'>
                  <p class='sub-tit-bottom8'>기록</p>

                  <div class='sec-ctrl'>
                    <div class='date-btns'>
                      <span class='date-today'>today</span>

                      <div class='btns'>
                        <span class='btn-prev'>prev</span>
                        <span class='btn-next'>next</span>
                      </div>
                    </div>

                    <div class='selectbox-sort'>
                      <form>
                        <select>
                          <option value='sort-regi'>등록순</option>
                          <option value='sort-target'>미완료 목표들</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>

                <div class='form-goal chkform'>
                  <form>
                    <fieldset>
                      <legend>기록</legend>

                      <div class='regi-list-wrap chkform-list-wrap'>
                        <ul class='regi-list chkform-list'>
                          <li>
                            <div class='input-wrap'>
                              <input type='checkbox' id='record-list-1' value='기록1' />
                              <label for='record-list-1'>물 섭취 1.5L </label>
                            </div>
                            <button class='btn-delt' type='button'>
                              삭제
                            </button>
                          </li>

                          <li>
                            <div class='input-wrap'>
                              <input type='checkbox' id='record-list-1' value='기록1' />
                              <label for='record-list-1'>물 섭취 1.5L </label>
                            </div>
                            <button class='btn-delt' type='button'>
                              삭제
                            </button>
                          </li>

                          <li>
                            <div class='input-wrap'>
                              <input type='checkbox' id='record-list-1' value='기록1' />
                              <label for='record-list-1'>물 섭취 1.5L </label>
                            </div>
                            <button class='btn-delt' type='button'>
                              삭제
                            </button>
                          </li>
                        </ul>

                        <div class='input-addlist'>
                          <button class='btn-plus' type='button'>
                            ADD
                          </button>
                          <div>
                            <label for='new-list'></label>
                            <input type='text' id='new-list' placeholder='오늘을 기록 해주세요' />
                          </div>
                          <button class='btn-submit' type='submit'>
                            Enter
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </section>

              <section class='sec-diary'>
                <div class='sec-top'>
                  <p class='sub-tit-bottom8'>
                    일기<span>소소한 이야기</span>
                  </p>

                  <div class='btns'>
                    <span class='btn-prev'>prev</span>
                    <span class='btn-next'>next</span>
                  </div>
                </div>

                <div class='diary-list-wrap'>
                  <div class='btn-add-wrap'>
                    <button class='btn-plus' type='button'>
                      ADD
                    </button>
                  </div>

                  <ul class='diary-list'>
                    <li>
                      <div class='input-date'>12.00 일요일</div>
                      <div class='pic-area off'>이미지(없는 경우 노출 안되도록)</div>
                      <p class='sub-tit'>ate something at starbucks</p>
                      <p class='content-txt'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card’s content.
                      </p>
                      <button class='btn-delt' type='button'>
                        삭제
                      </button>
                    </li>

                    <li>
                      <div class='input-date'>12.00 월요일</div>
                      <div class='pic-area'>
                        <img src='./images/pic-diet.png' alt='일기 첨부 사진' width='500px' />
                      </div>
                      <p class='sub-tit'>ate something at starbucks</p>
                      <p class='content-txt'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card’s content.
                      </p>
                      <button class='btn-delt' type='button'>
                        삭제
                      </button>
                    </li>

                    <li>
                      <div class='input-date'>12.00 수요일</div>
                      <div class='pic-area off'>이미지(없는 경우 노출 안되도록)</div>
                      <p class='sub-tit'>ate something at starbucks</p>
                      <p class='content-txt'>Some quick example text to build on the card title.</p>
                      <button class='btn-delt' type='button'>
                        삭제
                      </button>
                    </li>

                    <li>
                      <div class='input-date'>12.00 수요일</div>
                      <div class='pic-area off'>이미지(없는 경우 노출 안되도록)</div>
                      <p class='sub-tit'>ate something at starbucks</p>
                      <p class='content-txt'>Some quick example text to build on the card title.</p>
                      <button class='btn-delt' type='button'>
                        삭제
                      </button>
                    </li>
                  </ul>
                </div>

                <div id='pop-form'>
                  <button type='button'>닫기</button>

                  <form>
                    <fieldset>
                      <legend>일기</legend>
                      <p>남기고 싶은 이야기를 자유럽게 작성해주세요 (일상, 운동, 건강, 목표)</p>

                      <div>
                        <input type='file' id='input-file' />
                        <label for='input-file'>사진등록 최대 1장</label>

                        <label for='input-tit'>제목</label>
                        <input id='input-tit' type='text' value='제목' />

                        <label for='input-textarea'></label>
                        <textarea
                          id='input-textarea'
                          rows='7'
                          placeholder='내용을 입력해주세요'
                          autofocus
                        ></textarea>
                      </div>

                      <button type='submit'>입력하기</button>
                    </fieldset>
                  </form>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>

      <footer className='screen-out'>page information</footer>
    </div>
  );
}

export default Project;
