import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Headroom from 'react-headroom'

const App = () => {
  return (
    <>
    <Headroom>
      <Header />
    </Headroom>
    <Outlet/>
    <Footer />
    </>
  )
}

export default App