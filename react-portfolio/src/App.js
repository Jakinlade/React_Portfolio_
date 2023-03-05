import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home";
import ProjectGallery from "./Components/ProjectGallery";
import Project from "./Components/Project.jsx";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={ProjectGallery} />
          <Route path="/projects/:id" component={Project} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
