import StickyNavbar from "./components/StickyNavbar.jsx";
import Hero from "./components/Hero.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Info from "./components/Info.jsx";
import Testimoni from "./components/Testimoni.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main>
      <StickyNavbar />
      <Hero />
      <Blog />
      <Info />
      <Testimoni />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
