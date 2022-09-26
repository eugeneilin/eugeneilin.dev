import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import About from '../components/homepage/About';
import Experience from '../components/homepage/Experience';
import Skills from '../components/homepage/Skills';
import References from '../components/homepage/References';
import Contact from '../components/homepage/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div id='main'>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <References />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
