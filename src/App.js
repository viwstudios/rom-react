import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Common/Navbar.jsx';
import Footer from './Common/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ServicesPage from './Pages/ServicesPage.jsx'
import GalleryPage from './Pages/GalleryPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import BlogPage from './Pages/BlogPage.jsx';

class App extends Component {
  render() {
    return (
      <div>
      {(window.location.pathname =='/login') || (window.location.pathname =='/signup') ?<></> :<Navbar />}
        
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>

      {window.location.pathname =='/login' || (window.location.pathname =='/signup')?<></> :<Footer />}
      </div>
    );
  }
}

export default App;