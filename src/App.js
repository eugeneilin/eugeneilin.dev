import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ReferencesPage from './pages/ReferencesPage';
import ContactPage from './pages/ContactPage';
import ProjectDisplay from './pages/ProjectDisplay';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/experience' element={<ExperiencePage />} />
          <Route path='/experience/:slug' element={<ProjectDisplay />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/education' element={<EducationPage />} />
          <Route path='/references' element={<ReferencesPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
