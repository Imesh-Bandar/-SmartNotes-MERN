import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.Jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import toast from "react-hot-toast";

 
function App() {
  return (
    <div data-theme="forest">
    
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
