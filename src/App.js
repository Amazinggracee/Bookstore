import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Book';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
