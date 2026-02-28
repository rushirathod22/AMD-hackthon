import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import OnboardingModal from './components/OnboardingModal';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PhishingAnalyzer from './pages/PhishingAnalyzer';
import UrlScanner from './pages/UrlScanner';
import HygieneScore from './pages/HygieneScore';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <Router>
      <OnboardingModal />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analyze" element={<PhishingAnalyzer />} />
          <Route path="/scan" element={<UrlScanner />} />
          <Route path="/hygiene" element={<HygieneScore />} />
          <Route path="/about" element={<HowItWorks />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
