import "./App.css";
import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Feedback />
    </>
  );
}

export default App;
