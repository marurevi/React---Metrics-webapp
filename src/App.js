import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Home from './pages/Home';
import Country from './pages/Country';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/country/:continent" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
