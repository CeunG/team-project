import { Routes, Route } from "react-router-dom";

import Layout from "@components/Layout";
import Main from "@components/Main";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
