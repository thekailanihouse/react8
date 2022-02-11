import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap'


const NavbarTop = () =>{
    const [isOpen, setOpen] = useState(false)

    const toggleCollapse = () => {
        setOpen({isOpen: !isOpen})
    }

    return(
        <>
        <Navbar color="dark" dark expand="lg">
            <NavbarBrand href='/'>Binar Academy</NavbarBrand>
            <NavbarToggler onClick={toggleCollapse}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto">
                    <NavItem className="px-2">
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem className="px-2">
                        <Link to="/about">About</Link>
                    </NavItem>
                    <NavItem className="px-2">
                        <Link to="/contact">Contact</Link>
                    </NavItem>
                    <NavItem className="px-2">
                        <Link to="/login">Login</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </>
    )
}

export default NavbarTop;
