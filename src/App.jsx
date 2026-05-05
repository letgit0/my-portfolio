import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Test from "./components/Test";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Hightlights from "./components/Highlights";

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <Hightlights />
      <Timeline />
      <div id="projects"><Projects /></div>
      <TechStack />
      <div id="contact"><Contact /></div>
      {/* <div id="about"><About /></div> */}
      <Footer />
    </>
  );
}

export default App;