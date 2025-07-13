import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.Jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import toast from 'react-hot-toast'

function App() {
  return (
    <>
      <button onClick={() => toast.error("Welcome")}>Click Me</button>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
        <Route path='/note/:id' element={<NoteDetailPage />}></Route>

      </Routes>


    </>
  )
}

export default App