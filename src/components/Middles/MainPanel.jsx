import React from "react";
import "../../assets/css/style.css";

function MainPanel() {
  return (
    <div className=''>
      {/* ------- middle start ------- */}
      <main
        className='main-middle'
        style={{ height: "99%", width: "90%", backgroundColor: "#fff" }}
      >
        <div className='middle-image'>
          <img src='./image/middle.png' alt='middle' className='responsive-img' />
        </div>
        {/* To do list and calendar */}
        <div className='middle'>
          {/* To do list */}
          <div className='card'>
            <h2>To do list</h2>
            <ul className='listStyle'>
              <li>
                <input type='checkbox' />
                <span> List Item</span>
              </li>
              <li>
                <input type='checkbox' />
                <span> List Item</span>
              </li>
              <li>
                <input type='checkbox' />
                <span> List Item</span>
              </li>
              <li>
                <input type='checkbox' />
                <span> List Item</span>
              </li>
              <li>
                <input type='checkbox' />
                <span> List Item</span>
              </li>
            </ul>
            <div className='toDolist'>
              <input type='text' placeholder='   Add new task...' className='' />
              &nbsp;
              <button style={{ color: "#00A4FF" }}>Enter</button>
            </div>
          </div>
          {/* Calendar */}
          <div className='card'>
            <h2>Calendar</h2>
            <div>
              <img
                src='./image/Calendar.png'
                alt='Calendar'
                className='w-24 h-24 object-cover rounded-full'
                style={{ position: "relative", top: "10px", left: "100px", width: "200px" }}
              />
            </div>
          </div>
        </div>
        {/* Notes and map */}
        <div className='middle'>
          {/* Notes */}
          <div className='card'>
            <h2>Chat bot</h2>
            <textarea></textarea>
            <div className='chatbot'>
              <input type='text' placeholder='   Add new task...' className='' />
              &nbsp;
              <button style={{ color: "#00A4FF" }}>Enter</button>
            </div>
          </div>
          {/* Map */}
          <div className='card'>
            <h2>Map</h2>
            <div>
              <img
                src='./image/map.png'
                alt='Map'
                className='w-24 h-24 object-cover rounded-full'
                style={{ position: "relative", left: "120px", width: "150px" }}
              />
            </div>
          </div>
        </div>
      </main>
      {/* ------- middle end ------- */}
    </div>
  );
}

export default MainPanel;
