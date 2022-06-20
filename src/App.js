import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route index element={Home} />
        <Route path="/details" element={Details} />
      </Routes>
      CAPSTONE
    </div>
  );
}

export default App;
