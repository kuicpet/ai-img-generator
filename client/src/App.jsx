import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Header } from './components'
import { Home, CreatePost } from './pages'

const App = () => {
  return (
    <>
      <Header />
      <Routes></Routes>
    </>
  )
}

export default App
