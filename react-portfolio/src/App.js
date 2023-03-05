import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ProjectGallery from "./Components/ProjectGallery";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/projects" component={ProjectGallery} />
          <Route path="/projects/:id" component={Project} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
