// ** React Imports
// ** Horizontal Menu Array
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ERPLogo from '../../navbar/ERPLogo';
import ModuleSideBar from '../../navbar/ModuleSideBar';
import UserDropdown from '../../navbar/UserDropdown';
// ** Horizontal Menu Components
import navigation from '@src/navigation/horizontal';
import HorizontalNavMenuItems from './HorizontalNavMenuItems';

const HorizontalMenu = ( { currentActiveItem, routerProps } ) => {
  const dispatch = useDispatch();

  // const { userPermission } = useSelector( ( { auth } ) => auth );
  // const { authPermissions } = useSelector( ( { permissions } ) => permissions );
  // console.log( authenticateUser );
  // ** States
  const [activeItem, setActiveItem] = useState( null );
  const [groupActive, setGroupActive] = useState( [] );
  const [openDropdown, setOpenDropdown] = useState( [] );

  // ** On mouse enter push the ID to openDropdown array
  const onMouseEnter = id => {
    const arr = openDropdown;
    arr.push( id );
    setOpenDropdown( [...arr] );
  };

  // ** On mouse leave remove the ID to openDropdown array
  const onMouseLeave = id => {
    const arr = openDropdown;
    arr.splice( arr.indexOf( id ), 1 );
    setOpenDropdown( [...arr] );
  };


  //   {
  //     id: 'operation',
  //     title: 'Operation',
  //     icon: <Framer size={20} />,
  //     children: [
  //       {
  //         id: 'styles',
  //         title: 'Styles',
  //         icon: <PenTool size={20} />,
  //         permission: navRoutePermission.style.list,
  //         children: [
  //           {
  //             id: 'singleStyle',
  //             title: 'Single Style',
  //             icon: <PenTool size={20} />,
  //             navLink: '/single-styles',
  //             permission: navRoutePermission.style.list
  //           },

  //           {
  //             id: 'setStyle',
  //             title: 'Set Style',
  //             icon: <PenTool size={20} />,
  //             navLink: '/set-styles',
  //             permission: navRoutePermission.style.list

  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  // console.log( 'nav', navigation );
  // const handleNav = ( totalNav, navPermission ) => {
  //   const updateNav = totalNav.map( nav => ( {
  //     ...nav,
  //     children: nav.children?.map( cNav => {
  //       if ( navPermission.some( permission => permission.code === cNav.permission ) || ( cNav.permission === 'antonymous' ) ) {
  //         cNav['hidden'] = false;
  //         cNav['children'] = cNav?.children?.map( ccNav => {
  //           if ( navPermission.some( permission => permission.code === ccNav.permission ) || ( cNav.permission === 'antonymous' ) ) {
  //             ccNav['hidden'] = false;
  //           } else {
  //             ccNav['hidden'] = true;
  //           }
  //           return ccNav;
  //         } );
  //       } else {
  //         cNav['hidden'] = true;
  //       }
  //       return cNav;
  //     } )
  //   } ) );
  //   const mainParentChildren = updateNav.filter( f => f.children?.filter( c => !c.hidden )?.length > 0 );
  //   console.log();
  //   return updateNav;
  // };
  // console.log( 'nav', handleNav( navigation, authenticateUserPermission ) );
  // useEffect( () => {
  //   dispatch( bindNavigation() );
  // }, [] );
  return (
    <div className='navbar-header navbar-container main-menu-content d-flex font-weight-bolder' >
      <ul className="nav navbar-nav align-items-center  ">
        <ERPLogo />
      </ul>
      <ul className="nav navbar-nav align-items-center mr-1">
        {/* <ModuleDropdown />  */}
        <ModuleSideBar />
      </ul>

      <ul className='nav navbar-nav align-items-center' id='main-menu-navigation'>
        <HorizontalNavMenuItems
          submenu={false}
          // items={handleNav( navigation, authenticateUserPermission )}
          items={navigation}
          // items={getHorizontalNavigation( userPermission, authPermissions )}
          activeItem={activeItem}
          groupActive={groupActive}
          routerProps={routerProps}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          openDropdown={openDropdown}
          setActiveItem={setActiveItem}
          setGroupActive={setGroupActive}
          setOpenDropdown={setOpenDropdown}
          currentActiveItem={currentActiveItem}
        />
      </ul>
      <ul className="nav navbar-nav align-items-center ml-auto">
        <UserDropdown />
      </ul>

    </div >
  );
};

export default HorizontalMenu;
