import Navbar from './components/navbar/index'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-black min-h-screen text-white'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout