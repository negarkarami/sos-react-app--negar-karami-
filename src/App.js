
import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./components/home/Home";
import ArticleDetail from "./components/article-detail/ArticleDetail";
import ToDoList from "./components/todolist/ToDoList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/articles/:id" element={<ArticleDetail/>}/>
          <Route path="/todo-list" element={<ToDoList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
