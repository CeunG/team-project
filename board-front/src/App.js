import { Routes, Route } from "react-router-dom";

import Layout from "@components/Layout";
import Home from '@components/Home'
import Main from "@components/Main";
import Mypage from '@components/Mypage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/record" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Route>
    </Routes>
  );
}

export default App;
