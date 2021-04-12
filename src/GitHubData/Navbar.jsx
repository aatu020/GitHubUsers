import { useState } from "react"
import {
  DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand,
  NavItem, Collapse, NavLink, NavbarToggler, UncontrolledDropdown, Form, Input, Button
} from "reactstrap"

import UserCard from './UserCard'

const NavbarComp = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);

    const [searchData , setSearchData] = useState('') 

    return (
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand > Git Users</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              
              
            </Nav>
            <Form mr-right>         
                <Input tpye="text" placeholder="search..." id="searchdata" value={searchData} onChange={(e)=> setSearchData(e.target.value)}/>              
            </Form>
          </Collapse>
        </Navbar>
        <UserCard  typedData = {searchData} />
        </>
        )
}

export default NavbarComp  