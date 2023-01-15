import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Menu from './components/Menu/Menu'
import Home from './pages/Home/Home'
import Institutions from './pages/Institutions/Institutions'
import News from './pages/News/News'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Franchise from './pages/Franchise/Franchise'
import Contacts from './pages/Contacts/Contacts'
import Error404 from './pages/Error404/Error404'
import Loyalty from './pages/Loyalty/Loyalty'
import Institution from './pages/Institution/Institution'
import Footer from './components/Footer/Footer'

import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Menu/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/place' element={<Institutions/>}/>
          <Route path='/place/*' element={<Institution/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/franchise' element={<Franchise/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/loyalty' element={<Loyalty/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App