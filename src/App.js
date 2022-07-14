import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller/:sellerId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
