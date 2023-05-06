/* eslint-disable space-in-parens */
// ** Dropdowns Imports
import { Fragment } from 'react';
// ** Third Party Components
import { Grid, Menu, Moon, Sun } from 'react-feather';
import { NavItem, NavLink } from 'reactstrap';
import UserDropdown from './UserDropdown';


const NavbarUser = props => {
  // ** Props
  // const { skin, setSkin } = props;
  const { skin, setSkin, setMenuVisibility } = props;

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if ( skin === 'dark' ) {
      return <Sun className='ficon' onClick={() => setSkin( 'light' )} />;
    } else {
      return <Moon className='ficon' onClick={() => setSkin( 'dark' )} />;
    }
  };

  return (
    <Fragment>
      <ul className='navbar-nav d-xl-none d-flex align-items-center'>
        <NavItem className='mobile-menu mr-auto'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility( true )}>
            <Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>
      <ul className="nav navbar-nav align-items-center">
        <Grid />
      </ul>
      {/* <div className='bookmark-wrapper d-flex align-items-center'>
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
            <ThemeToggler />
          </NavLink>
        </NavItem>
      </div> */}
      <ul className='nav navbar-nav align-items-center ml-auto'>
        <UserDropdown />
      </ul>
    </Fragment>
  );
};
export default NavbarUser;
