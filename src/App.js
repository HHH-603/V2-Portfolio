import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
