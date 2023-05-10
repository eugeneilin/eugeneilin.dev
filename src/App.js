import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Home from './pages/Home';
import ProjectDisplay from './pages/ProjectDisplay';
import './App.css';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Wrapper>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/experience/:slug' element={<ProjectDisplay />} />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
};

export default App;
