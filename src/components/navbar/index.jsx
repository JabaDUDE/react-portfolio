import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements'

export default function Navbar(){
    return(
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}