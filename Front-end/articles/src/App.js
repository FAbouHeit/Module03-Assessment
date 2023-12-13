import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from './pages/Article';
import AllArticles from './pages/AllArticles';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import Edit from './pages/Edit';

function App() {
  const [selectedArticle, setSelectedArticle] = useState({});
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/article/" element={<Article selectedArticle={selectedArticle} />} />
      <Route path="/edit" element={<Edit selectedArticle={selectedArticle} />} />
      <Route path="/" element={<AllArticles setSelectedArticle={setSelectedArticle}/>} />
      <Route path="/dashboard" element={<Dashboard setSelectedArticle={setSelectedArticle}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
