import Navbar from './components/navbar/index'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-black min-h-screen text-white'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout