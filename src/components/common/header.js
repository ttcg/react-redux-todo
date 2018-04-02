import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar dark expand="md" fixed color="dark">
            <NavbarBrand href="/">React Todo</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to='/' exact>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to='/todo/add'>Add New</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to='/todo' exact>List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to='/about'>About</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;