import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Event from "./pages/Event.jsx";
import Karir from "./pages/Karir.jsx";
import Promo from "./pages/Promo.jsx";
import Tentangkami from "./pages/Tentangkami.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Karir" element={<Karir />} />
        <Route path="/Tentangkami" element={<Tentangkami />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
