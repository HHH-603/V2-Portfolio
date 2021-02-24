import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/about';
import Landing from './pages/landing';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="#" component={#} />
      <Route exact path="#" component={#} /> */}
    </Router>
  );
}

export default App;
