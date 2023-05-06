// ** React Imports
// ** Utils
import { getAllParents, isNavLinkActive, search } from '@layouts/utils';
// ** Horizontal menu items array
// ** Third Party Components
import classnames from 'classnames';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';


const HorizontalNavMenuLink = ( {
  item,
  setOpenDropdown,
  setGroupActive,
  activeItem,
  setActiveItem,
  routerProps,
  currentActiveItem,
  isChild
} ) => {
  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  const LinkTag = item.externalLink ? 'a' : NavLink;
  const { horizontalNavigation } = useSelector( ( { navbar } ) => navbar );

  // ** URL Vars
  const location = useLocation();
  const currentURL = location.pathname;

  const navLinkActive = isNavLinkActive( item.navLink, currentURL, routerProps );

  // ** Get parents of current items
  const searchParents = ( horizontalNavigation, currentURL ) => {
    const parents = search( horizontalNavigation, currentURL, routerProps ); // Search for parent object
    const allParents = getAllParents( parents, 'id' ); // Parents Object to Parents Array
    allParents.pop();
    return allParents;
  };

  // ** Remove all items from OpenDropdown array
  const resetOpenDropdowns = () => setOpenDropdown( [] );

  // ** On mount update active group array
  useEffect( () => {
    if ( currentActiveItem !== null ) {
      setActiveItem( currentActiveItem );
      const arr = searchParents( horizontalNavigation, currentURL );
      setGroupActive( [...arr] );
    }
  }, [location] );

  // console.log( 'item', item );

  return (
    <li
      // hidden={item?.hidden}
      className={classnames( 'nav-item', {
        active: item.navLink === activeItem,
        disabled: item.disabled
      } )}
      onClick={resetOpenDropdowns}
    >
      <LinkTag
        className={classnames( 'd-flex align-items-center', {
          'dropdown-item': isChild,
          'nav-link': !isChild
        } )}
        tag={LinkTag}
        target={item.newTab ? '_blank' : undefined}
        /*eslint-disable */
        {...( item.externalLink === true
          ? {
            href: item.navLink || '/'
          }
          : {
            to: item.navLink || '/',
            isActive: ( match, location ) => {
              if ( !match ) {
                return false
              }

              if ( match.url && match.url !== '' && match.url === item.navLink ) {
                currentActiveItem = item.navLink
              }
            }
          } )}
      /*eslint-enable */
      >
        {item.icon}
        <span>{item.title}</span>
      </LinkTag>
    </li>
  );
};

export default HorizontalNavMenuLink;
