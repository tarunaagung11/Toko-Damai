import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Event from "./pages/Event.jsx";
import Karir from "./pages/Karir.jsx";
import Promo from "./pages/Promo.jsx";
import Tentangkami from "./pages/Tentangkami.jsx";
import Login from "./pages/Login.jsx";
import Damaihalfmarathon from "./pages/damaihalfmarathon.jsx";
import Pendaftar from "./pages/pendaftar.jsx";
import Edit from "./components/Edit.jsx";
import SuccessMessage from "./pages/SuccessMessage.jsx";
import ComingSoon from "./pages/Comingsoon.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/karir" element={<Karir />} />
        <Route path="/tentangkami" element={<Tentangkami />} />
        <Route path="/login" element={<Login />} />
        <Route path="/damaihalfmarathon" element={<Damaihalfmarathon />} />
        <Route path="/pendaftar" element={<Pendaftar />} />
        <Route path="/pendaftar/edit/:id" element={<Edit />} />
        <Route path="/successmessage" element={<SuccessMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
