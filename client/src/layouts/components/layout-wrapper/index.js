// ** React Imports
import { handleContentWidth, handleMenuCollapsed, handleMenuHidden } from '@store/actions/layout';
// ** Styles
import 'animate.css/animate.css';
// ** Third Party Components
import classnames from 'classnames';
import { Fragment, useEffect } from 'react';
// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { cookieName } from 'utility/enums';


const LayoutWrapper = props => {
  // ** Props
  const { layout, children, appLayout, wrapperClass, transition, routeMeta } = props;

  const dispatch = useDispatch();
  const { push } = useHistory();
  const store = useSelector( state => state );
  const navbarStore = store.navbar;
  const contentWidth = store.layout.contentWidth;

  const Tag = layout === 'HorizontalLayout' && !appLayout ? 'div' : Fragment;


  const cleanUp = () => {
    if ( routeMeta ) {
      if ( routeMeta.contentWidth ) {
        dispatch( handleContentWidth( 'full' ) );
      }
      if ( routeMeta.menuCollapsed ) {
        dispatch( handleMenuCollapsed( !routeMeta.menuCollapsed ) );
      }
      if ( routeMeta.menuHidden ) {
        dispatch( handleMenuHidden( !routeMeta.menuHidden ) );
      }
    }
  };

  // const token = JSON.parse( localStorage.getItem( cookieName ) );
  // const isTokenExpired = token?.expires_in < ( Date.now() - token?.tokenStorageTime ) / 1000;
  // useEffect( () => {
  //   if ( token ) {
  //     dispatch( getAuthUserPermission() );

  //     if ( isTokenExpired ) {
  //       dispatch( getAuthUser() );
  //     }
  //   }

  // }, [] );

  // ** ComponentDidMount
  useEffect( () => {
    if ( routeMeta ) {
      if ( routeMeta.contentWidth ) {
        dispatch( handleContentWidth( routeMeta.contentWidth ) );
      }
      if ( routeMeta.menuCollapsed ) {
        dispatch( handleMenuCollapsed( routeMeta.menuCollapsed ) );
      }
      if ( routeMeta.menuHidden ) {
        dispatch( handleMenuHidden( routeMeta.menuHidden ) );
      }
    }
    return () => cleanUp();
  }, [] );


  return (
    <div
      className={classnames( 'app-content content overflow-hidden', {
        [wrapperClass]: wrapperClass,
        'show-overlay': 0
      } )}
    >
      <div className='content-overlay'></div>
      <div className='header-navbar-shadow' />
      <div
        className={classnames( {
          'content-wrapper': !appLayout,
          'content-area-wrapper': appLayout,
          'container p-0': contentWidth === 'boxed',
          [`animate__animated animate__${transition}`]: transition !== 'none' && transition.length
        } )}
      >
        <Tag
          /*eslint-disable */
          {...( layout === 'HorizontalLayout' && !appLayout
            ? { className: classnames( { 'content-body': !appLayout } ) }
            : {} )}
        /*eslint-enable */
        >
          {children}
        </Tag>
      </div>
    </div>
  );
};

export default LayoutWrapper;
