import '@custom-styles/basic/action-bar-menu.scss';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';

const ActionMenu = ( { children, breadcrumb, title, middleNavButton, moreButton = true, onClick } ) => {
    const handleOnClick = () => {
        // onClick();
    };
    return (
        <Navbar color="light" light expand="xs" className="action-bar border border-gray-50" >
            <NavbarBrand  >
                {title} {moreButton && ( <span>|</span> )}
            </NavbarBrand>
            <Nav className="mr-auto d-flex " navbar>
                {children}
            </Nav>
            <Nav className="m-auto" navbar>
                {/* {middleNavButton} */}
            </Nav>

            <Nav className="ml-auto" navbar>
                <ul id="breadcrumb" className="d-flex justify-content-center">
                    {breadcrumb?.filter( b => !b?.hidden )?.map( bc => (
                        <li key={bc.id} hidden={bc?.hidden} disabled={bc.isActive}>
                            <Link
                                onClick={() => handleOnClick()}
                                className={bc.isActive ? `active` : ''}
                                tag={bc.isActive ? 'span' : 'a'}

                                to={{
                                    pathname: `${bc.link}`,
                                    state: bc?.state
                                }}

                            >
                                {bc?.icon} {bc.name}
                            </Link>
                        </li>
                    ) )}
                </ul>

            </Nav>
        </Navbar>
    );
};

export default ActionMenu;
