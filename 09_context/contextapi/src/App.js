import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
