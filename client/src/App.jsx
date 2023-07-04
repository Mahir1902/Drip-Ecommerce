
import Home from './scenes/home/Home'
import { useEffect } from 'react'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import ItemDetails from './scenes/itemDetails/ItemDetails'
import Checkout from './scenes/checkout/Checkout'
import Confirmation from './scenes/checkout/Confirmation'
import Navbar from './scenes/global/Navbar'
import CartMenu from './scenes/global/CartMenu'

function App() {
  
  // Function that scrolls to the top everytime a new route is clicked/the path is changed
  const ScrollToTop = () => {
    const {pathname} =  useLocation() // Gives the current path the program is on

    useEffect(() => {
      window.scrollTo(0,0)
    }, [pathname])

    return null
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/item/:itemId' element={<ItemDetails/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/checkout/success' element={<Confirmation/>} />
        </Routes>
        <CartMenu/>
      </BrowserRouter>
    </div>
  )
}

export default App
