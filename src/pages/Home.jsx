import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import About from '../components/homepage/About';
import Experience from '../components/homepage/Experience';
import Skills from '../components/homepage/Skills';
import Education from '../components/homepage/Education';
import References from '../components/homepage/References';
// import MyStory from '../components/homepage/MyStory';
import Contact from '../components/homepage/Contact';
import Footer from '../components/Footer';

// TODO: Highlight about right away
// TODO: Light up links on scrolling...

const Home = () => {
  const [hashUrl, setHashUrl] = useState('');

  const location = useLocation();

  console.log(location);

  const scrollToHashElement = (hashUrl) => {
    const sectionToScrollTo = document.querySelector(`#${hashUrl}`);
    const yCoordinate = sectionToScrollTo.getBoundingClientRect().top + window.pageYOffset;
    // const yOffset = -72;
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
  };

  useEffect(() => {
    if (hashUrl) {
      scrollToHashElement(hashUrl);
    }
  }, [hashUrl]);

  useEffect(() => {
    if (location.hash) {
      setHashUrl(location.hash.split('#')[1]);
    }
    // console.log(window.location.href.split('#')[1]);
  }, [location.hash]);

  return (
    <div id='main'>
      <Navbar hashUrl={hashUrl} />
      <About />
      <Experience />
      <Skills />
      <Education />
      <References />
      {/* <MyStory /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
