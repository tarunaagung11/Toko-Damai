import StickyNavbar from "../components/StickyNavbar.jsx";
import Hero from "../components/Hero.jsx";
import BlogComponent from "../components/BlogComponent.jsx";
import Contact from "../components/Contact.jsx";
import Info from "../components/Info.jsx";
import Testimoni from "../components/Testimoni.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <main>
      <StickyNavbar />
      <Hero />
      <BlogComponent />
      <Info />
      <Testimoni />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
