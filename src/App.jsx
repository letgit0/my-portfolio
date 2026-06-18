import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Highlights from "./components/Highlights";

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <Highlights />
      <Timeline />
      <div id="projects"><Projects /></div>
      <TechStack />
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

export default App;