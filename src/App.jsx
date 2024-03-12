import { useState } from 'react'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import ArticleDetail from './components/ArticleDetail/ArticleDetail'
import Users from './components/Users/Users'

import './App.css'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
