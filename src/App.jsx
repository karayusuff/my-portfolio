import { useState } from "react";
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Skills from "./components/Skills";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;