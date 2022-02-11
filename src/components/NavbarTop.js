import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap'
class NavbarTop extends Component {
    state = { isOpen : false}
    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
    const { isOpen } = this.state
        return(
        <Navbar color="dark" dark expand="lg">
            <NavbarBrand href='/'>Binar Academy</NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse}/>
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
                        <Link to="/register">Register</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
  }
}

export default NavbarTop;
