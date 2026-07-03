import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ContestPage from './pages/ContestPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/contest/1" replace />} />
        <Route path="/contest/:id" element={<ContestPage />} />
      </Routes>
    </Router>
  );
};

export default App;