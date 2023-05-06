import '@custom-styles/basic/action-bar-menu.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import '../CustomBreadCrumb.css';
const ActionMenu2 = ( { children, breadcrumb, title } ) => {
    return (
        <Navbar color="light" light expand="xs" className="action-bar border border-gray-50" >
            <NavbarBrand tag={Link} to="/" >
                {title} <span>|</span>
            </NavbarBrand>
            <Nav className="mr-auto d-flex " navbar>
                {children}
            </Nav>
            <Nav className="ml-auto" navbar>
                {/* <Breadcrumb listTag="ul" >
                    {breadcrumb?.map( bc => (
                        <BreadcrumbItem
                            id=""
                            tag="li"
                            key={bc.id}
                            to={bc.link}
                        //tag={bc.isActive ? 'span' : Link}
                        >
                            {bc.name}
                        </BreadcrumbItem>
                    ) )}
                </Breadcrumb> */}

                <ul id="breadcrumb" className="d-flex justify-content-center">

                    {breadcrumb?.map( bc => (
                        <li key={bc.id}><Link tag="a" to={bc.link}> {bc?.icon} {bc.name}</Link></li>
                    ) )}
                </ul>
            </Nav>
        </Navbar>
    );
};

export default ActionMenu2;
