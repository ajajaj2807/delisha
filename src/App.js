import React from 'react';
import Navbar from './Comps/Navbar'
import HomePage from './Comps/HomePage'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './Styles/App.scss'

function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={Navbar} />
        <Route exact path="/" component={HomePage} /> 
      </div>
    </Router>
  );
}

export default App;
