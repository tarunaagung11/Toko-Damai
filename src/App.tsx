import NavbarToko from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Info from "./components/Info.jsx";
import Testimoni from "./components/Testimoni.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main className="from bg-gradient-to-r from-secondary to-primary">
      <NavbarToko />
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
