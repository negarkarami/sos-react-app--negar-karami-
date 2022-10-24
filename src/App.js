
import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./components/home/Home";
import ArticleDetail from "./components/article-detail/ArticleDetail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/article/:id" element={<ArticleDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
