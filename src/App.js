import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDisplay from './pages/ProjectDisplay';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience/:id' element={<ProjectDisplay />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
