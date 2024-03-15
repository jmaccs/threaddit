import { useState } from 'react'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import ArticleDetail from './components/ArticleDetail/ArticleDetail'
import Comments from './components/Comments/Comments'
import Users from './components/Users/Users'
import {UserContext} from './context/User'
import ToggleUser from './components/Header/ToggleUser'

import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
      <Header />
      <ToggleUser />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path ="/articles/:id/comments" element={<Comments />} />
        <Route path="/users" element={<Users />} />
        <Route path="/topics/:topic" element={<Main />} />
      </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
