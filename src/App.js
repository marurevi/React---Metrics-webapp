import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Home from './components/pages/Home';
import Country from './components/pages/Country';
import City from './components/pages/City';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="/city" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
