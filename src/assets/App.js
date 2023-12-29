import { Routes, Route } from "react-router-dom";

import Layout from "@components/Layout";
import Main from "@components/Main";
import Mypage from "@components/Mypage";
import Login from "@components/Login";
import Sign from "@components/Sign";
import Home from "@components/Home";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} /> 
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/home" element={<Home />} />


      </Route>
    </Routes>
  );
}

export default App;
