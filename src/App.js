import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from "react-router-dom";

import './App.scss';
import Navigation from './navigation';
import Header from './components/header';

function App() {
  library.add(faBars);
  return (
    <Router>
      <Header/>
      <Navigation/>
    </Router>
  );
}

export default App;
