import { Routes, Route } from "react-router-dom";

import Layout from "@components/Layout";
import Home from "@components/Home";
import Main from "@pages/Main";
import Mypage from "@pages/Mypage";
import Chatbot from "@pages/Chatbot";
import Map from "@pages/Map";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/record' element={<Main />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/map' element={<Map />} />
        <Route path='/mypage' element={<Mypage />} />
      </Route>
    </Routes>
  );
}

export default App;
