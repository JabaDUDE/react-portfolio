import Navbar from './components/navbar/index'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default Layout