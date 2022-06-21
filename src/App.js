import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
