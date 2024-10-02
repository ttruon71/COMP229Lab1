import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
