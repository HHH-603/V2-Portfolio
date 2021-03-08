import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/landing';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
};

export default App;
