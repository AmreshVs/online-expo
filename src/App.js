import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './navigation';
import Header from './components/header';

function App() {
  library.add(faBars);
  return (
    <Router>
      <Header />
      <Navigation />
      <ToastContainer />
    </Router>
  );
}

export default App;
