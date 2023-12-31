import React, { useState } from "react";
import "../assets/chatbotstyle.scss";
import Bot from "../assets/images/free-icon-robot-6214180.png";
import User from "../assets/images/free-icon-freelancer-5024561.png";

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const apiKey = "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";
  const apiEndpoint = "https://api.openai.com/v1/chat/completions";

  const addMessage = (sender, message) => {
    setMessages((prevMessages) => [{ sender, message }, ...prevMessages]);
  };

  const renderMessages = () => {
    return messages
      .slice(0)
      .reverse()
      .map((message, index) => (
        <div key={index} className={`${message.sender}-message-block`}>
          {message.sender === "bot" && (
            <div className='bot-icon'>
              <img src={Bot} alt='bot' className='bot-icon' />
            </div>
          )}
          <div className={`${message.sender}-message-text`}>{message.message}</div>
          {message.sender === "user" && (
            <div className='user-icon'>
              <img src={User} alt='user' className='user-icon' />
            </div>
          )}
        </div>
      ));
  };

  const fetchAIResponse = async (prompt) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
        stop: ["Human"],
      }),
    };

    try {
      const response = await fetch(apiEndpoint, requestOptions);
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("OpenAI API 호출 중 오류 발생:", error);
      return "OpenAI API 호출 중 오류 발생";
    }
  };

  const handleSendClick = async () => {
    if (userInput.trim().length === 0) return;
    addMessage("user", userInput);
    setUserInput("");
    const aiResponse = await fetchAIResponse(userInput);
    addMessage("bot", aiResponse);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div className='chatbot-body'>
      <div className='chat-left-panel'>
        <button className='recent-chat-list'>+ New Chat</button>
        <h5 className='chat-h5'>최근 대화목록</h5>
        <button className='recent-chat-list2'> 🗒 내 정보를 바탕으로 식단을 추천해줘 </button>
        <button className='recent-chat-list2'>🗒 주변에 가까운 이비인후과를 검색해서 알려...</button>
      </div>

      <div className='chat-right-panel'>
        <div className='chat-header'>
          <div className='aichatbot'>&nbsp;&nbsp;&nbsp;&nbsp;AI Chat Bot</div>
        </div>
        <div className='chat-body'>
          {renderMessages()} {/* 여기에서 메시지를 렌더링 */}
        </div>
        <div id='chat-container-ldj'>
          <div id='user-input-chat'>
            <input
              type='text'
              placeholder='  질문내용을 적어주세요...'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown} // Enter 키 이벤트 처리
              className='chat-textbox'
            />
            <button>Send&nbsp;&nbsp;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
