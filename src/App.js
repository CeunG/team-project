import { Route, Routes } from "react-router-dom";

import Layout from "@components/Layout";
import MainPanel from "@components/Middles/MainPanel";
import Chatbot from "@pages/Chatbot";
// import Calendar from "@pages/Calendar";
import Map from "@pages/Map";
// import Mypage from "@pages/Mypage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<MainPanel />} />
        <Route path='/chatbot' element={<Chatbot />} />
        {/* <Route path='/calendar' element={<Calendar />} /> */}
        <Route path='/map' element={<Map />} />
        {/* <Route path='/mypage' element={<Mypage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
