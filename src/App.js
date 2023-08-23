import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard/dashboard";
import Home from './pages/Home'
import Error from './pages/Error'
import Dashboard2 from "./Dashboard2/dashboard2";
import Dashboard3 from "./Dashboard3/dashboard3";
import Dashboard4 from "./Dashboard4/dashboard4";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Dashboard2" element={<Dashboard2 />} />
        <Route exact path="/Dashboard3" element={<Dashboard3 />} />
        <Route exact path="/Dashboard4" element={<Dashboard4 />} />
      </Routes>
    </>
  );
}

export default App;
