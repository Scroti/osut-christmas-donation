import '../src/index.css';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Felicitare from './components/Felicitare/Felicitare';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/ourreason" element={<Felicitare />}></Route>
          <Route
            path="/privacy-policy"
            component={() => {
              window.location.href = 'https://example.com/1234';
              return null;
            }}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
