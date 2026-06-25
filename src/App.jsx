import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.jsx';
import NotFound from './pages/NotFound.jsx';
import Contact from './pages/Contact.jsx';
import TutorialPage from './pages/TutorialPage.jsx';
import EmployeeTutorialPage from './pages/EmployeeTutorialPage.jsx';
import MedicalNetworks from './pages/MedicalNetworks.jsx';
import QuotePage from './pages/QuotePage.jsx';
import AboutPage from './pages/About.jsx';
import PlansPage from './pages/Plans.jsx';
import FormsPage from './pages/FormsPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medical-networks" element={<MedicalNetworks />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/planes" element={<PlansPage />} />
        <Route path="/formularios" element={<FormsPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/tutoriales" element={<TutorialPage />} />
        <Route path="/empleados-tutoriales" element={<EmployeeTutorialPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
