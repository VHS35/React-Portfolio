import './App.css';
import Navbar from './components/navigation';
import AboutMe from './components/pages/about';
import Project from './components/pages/projects';
import Contact from './components/pages/contact';
import Footer from './components/footer';
import Header from './components/header';

import React, { useState } from 'react';

export default function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <AboutMe />;
      }
      if (currentPage === 'Projects') {
        return <Project />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Header />
        {/* We are passing the currentPage from state and the function to update it */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer />
      </div>
    );
  }
  