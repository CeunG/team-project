import React, { useState } from "react";
import "./chatbotstyle.css";
import Bot from "../image/free-icon-robot-6214180.png";
import User from "../image/free-icon-freelancer-5024561.png";

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
        <div key={index} className={`${message.sender}-message`}>
          {message.sender === "bot" && (
            <img
              src={Bot}
              alt='bot'
              className='bot-icon'
              style={{ height: "1em", marginRight: "10px" }}
            />
          )}
          {message.message}
          {message.sender === "user" && (
            <img
              src={User}
              alt='user'
              className='user-icon'
              style={{ height: "1em", marginLeft: "10px" }}
            />
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
    <div className='chatbotbody'>
      <div className='left-panel'>
        <button className='newchat'>+ New Chat</button>
        <h5>최근 대화목록</h5>
        <ul className='list-group'>{/* Recent chats will be listed here */}</ul>
      </div>

      <div className='right-panel'>
        <div className='chat-header'>
          <h4>&nbsp;&nbsp;&nbsp;&nbsp;AI Chat Bot</h4>
        </div>
        <div className='chat-body'>
          {renderMessages()} {/* 여기에서 메시지를 렌더링 */}
        </div>
        <div id='chat-container'>
          <div className='input-group'>
            <div id='chat-messages'></div>
            <div id='user-input'>
              <input
                type='text'
                placeholder='  질문내용을 적어주세요...'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown} // Enter 키 이벤트 처리
              />
              <button>Send&nbsp;&nbsp;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
