import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import{ AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { HiCodeBracketSquare } from 'react-icons/hi2'

export default function Navbar(){
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const navItems = [
        {
            id: 1,
            text: 'Home',
            to: '/'
        },
        {
            id: 2,
            text: 'About',
            to: '/about'
        },
        {
            id: 3,
            text: 'My Projects',
            to: '/projects'
        },
        {
            id: 4,
            text: 'Contact',
            to: '/contact'
        }
    ]

    const style = { color: 'black' }

    return(
        <>
            <nav className="navbar">
                <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
                    <NavLink to="/" className="flex items-center text-3xl hover:text-[#00df9a]">
                        <span>D.K.</span>
                        <span>
                            <HiCodeBracketSquare />
                        </span>
                    </NavLink>

                    {/*Desktop Navigation*/}

                    <ul className='flex max-md:hidden'>
                            {navItems.map(item => (
                                <li key={item.id} className='text-white'>
                                    <NavLink to={item.to} 
                                    className={({ isActive }) => 
                                    isActive ? 'p-4 rounded-xl m-2 cursor-pointer duration-300  text-white bg-[#00df9a]' 
                                    : 'hover:bg-[#00df9a] p-4 rounded-xl m-2 cursor-pointer duration-300 text-white'
                                    }
                                    >
                                        {item.text}
                                    </NavLink>
                                </li>
                            ))}
                    </ul>

                    {/*Mobile Navigation*/}

                    <div onClick={handleClick} className='block md:hidden hover:text-[#00df9a] cursor-pointer'>{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}</div>
                    {/*Mobile Menu*/}
                    <ul className={nav 
                    ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 duration-500 ease-in-out bg-black' 
                    : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}>

                        {/*Mobile Logo*/}

                        <h1 className='w-full font-bold text-3xl flex text-center'>D.K.<span className='self-center'><HiCodeBracketSquare /></span></h1>

                        {/*Mobile Menu Items*/}

                        {navItems.map(item => (
                            <NavLink to={item.to} key={item.id} onClick={handleClick}>
                            <li className='p-4 border-b rounded-xl cursor-pointer border-gray-600 hover:bg-[#51ceb0] hover:text-black'>
                                {item.text}
                            </li>
                                </NavLink>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}