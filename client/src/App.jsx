import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import { Home, CreatePost } from './pages'

const App = () => {
  return (
    <>
      <Header />
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </>
  )
}

export default App
