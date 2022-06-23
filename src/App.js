import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Home from './pages/Home';
import Country from './pages/Country';
import City from './pages/City';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/country/:continent" element={<Country />} />
        <Route path="/city" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
