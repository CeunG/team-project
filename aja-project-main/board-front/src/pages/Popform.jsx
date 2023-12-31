import React from 'react';

function PopForm() {
  return (
    <div id="pop-form">
      <button type="button">닫기</button>

      <form>
        <fieldset>
          <legend>일기</legend>
          <p>남기고 싶은 이야기를 자유럽게 작성해주세요 (일상, 운동, 건강, 목표)</p>

          <div>
            <input type="file" id="input-file" />
            <label for="input-file">사진등록 최대 1장</label>

            <label for="input-tit">제목</label>
            <input id="input-tit" type="text" value="제목" />

            <label for="input-textarea"></label>
            <textarea id="input-textarea" rows="7" placeholder="내용을 입력해주세요" autofocus></textarea>
          </div>

          <button type="submit">입력하기</button>
        </fieldset>
      </form>
    </div>
  )
}

export default PopForm;