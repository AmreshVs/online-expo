import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import ScrollToTop from 'react-router-scroll-top'

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './navigation';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  library.add(faBars);
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Navigation />
        <ToastContainer />
        <Footer/>
      </ScrollToTop>
    </Router>
  );
}

export default App;
