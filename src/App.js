import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BookLists from './components/BookLists';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BookLists />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
