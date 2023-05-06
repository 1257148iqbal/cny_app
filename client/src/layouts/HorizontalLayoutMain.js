// ** React Imports
// ** Custom Components
import Customizer from '@components/customizer';
// ** Configs
import themeConfig from '@configs/themeConfig';
// ** Styles
// import '@styles/base/core/menu/menu-types/horizontal-menu.scss';
import '@custom-styles/menu/menu-types/horizontal-menu.scss';
import { useFooterType } from '@hooks/useFooterType';
import { useNavbarColor } from '@hooks/useNavbarColor';
import { useNavbarType } from '@hooks/useNavbarType';
// ** Custom Hooks
import { useRTL } from '@hooks/useRTL';
import { useSkin } from '@hooks/useSkin';
import { handleContentWidth, handleMenuHidden } from '@store/actions/layout';
// ** Third Party Components
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'react-feather';
// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux';
import ScrollToTop from 'react-scroll-up';
import { Button, Navbar } from 'reactstrap';
import FooterComponent from './components/footer';
import MenuComponent from './components/menu/horizontal-menu';

const HorizontalLayout = props => {
  // ** Props
  const { children, navbar, footer, menu, currentActiveItem, routerProps } = props;


  // ** Hooks
  const [skin, setSkin] = useSkin();
  const [isRtl, setIsRtl] = useRTL();
  const [navbarType, setNavbarType] = useNavbarType();
  const [footerType, setFooterType] = useFooterType();
  const [navbarColor, setNavbarColor] = useNavbarColor();

  // ** States
  const [isMounted, setIsMounted] = useState( false );
  const [navbarScrolled, setNavbarScrolled] = useState( false );

  // ** Store Vars
  const dispatch = useDispatch();
  const layoutStore = useSelector( state => state.layout );

  // ** Vars
  const contentWidth = layoutStore.contentWidth;
  const isHidden = layoutStore.menuHidden;

  // ** Handles Content Width
  const setContentWidth = val => dispatch( handleContentWidth( val ) );

  // ** Handles Content Width
  const setIsHidden = val => dispatch( handleMenuHidden( val ) );


  // ** UseEffect Cleanup
  const cleanup = () => {
    setIsMounted( false );
    setNavbarScrolled( false );
  };


  //** ComponentDidMount
  useEffect( () => {
    setIsMounted( true );

    window.addEventListener( 'scroll', function () {
      if ( window.pageYOffset > 65 && navbarScrolled === false ) {
        setNavbarScrolled( true );
      }
      if ( window.pageYOffset < 65 ) {
        setNavbarScrolled( false );
      }
    } );
    return () => cleanup();
  }, [] );

  // useEffect( () => {
  //   dispatch( bindNavigation() );
  // }, [] );

  // ** Vars
  const footerClasses = {
    static: 'footer-static',
    sticky: 'footer-fixed',
    hidden: 'footer-hidden'
  };

  const navbarWrapperClasses = {
    floating: 'navbar-floating',
    sticky: 'navbar-sticky',
    static: 'navbar-static'
  };

  const navbarClasses = {
    floating: 'floating-nav',
    sticky: 'fixed-top'
  };

  const bgColorCondition = navbarColor !== '' && navbarColor !== 'light' && navbarColor !== 'white';

  if ( !isMounted ) {
    return null;
  }

  return (
    <div
      className={classnames(
        `wrapper horizontal-layout horizontal-menu ${navbarWrapperClasses[navbarType] || 'navbar-floating'} ${footerClasses[footerType] || 'footer-static'
        } menu-expanded`
      )}
      {...( isHidden ? { 'data-col': '1-column' } : {} )}
    >
      {!isHidden ? (
        <div className='horizontal-menu-wrapper'>
          <Navbar
            tag='div'
            expand='sm'
            light={skin !== 'dark'}
            dark={skin === 'dark' || bgColorCondition}
            className={classnames( `header-navbar navbar-horizontal navbar-shadow menu-border`, {
              [navbarClasses[navbarType]]: navbarType !== 'static',
              'floating-nav': ( !navbarClasses[navbarType] && navbarType !== 'static' ) || navbarType === 'floating'
            } )}
          >
            {menu ? (
              menu( { routerProps, currentActiveItem } )
            ) : (
              <>
                <MenuComponent routerProps={routerProps} currentActiveItem={currentActiveItem} />
              </>
            )}
          </Navbar>
        </div>
      ) : null}

      {children}
      {themeConfig.layout.customizer === true ? (
        <Customizer
          skin={skin}
          setSkin={setSkin}
          footerType={footerType}
          setFooterType={setFooterType}
          navbarType={navbarType}
          setNavbarType={setNavbarType}
          navbarColor={navbarColor}
          setNavbarColor={setNavbarColor}
          isRtl={isRtl}
          setIsRtl={setIsRtl}
          layout={props.layout}
          setLayout={props.setLayout}
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          contentWidth={contentWidth}
          setContentWidth={setContentWidth}
          transition={props.transition}
          setTransition={props.setTransition}
          themeConfig={themeConfig}
        />
      ) : null}
      <footer
        className={classnames( `footer footer-light ${footerClasses[footerType] || 'footer-static'}`, {
          'd-none': footerType === 'hidden'
        } )}
      >
        {footer ? (
          footer( { footerType, footerClasses } )
        ) : (
          <FooterComponent footerType={footerType} footerClasses={footerClasses} />
        )}
      </footer>

      {themeConfig.layout.scrollTop === true ? (
        <div className='scroll-to-top'>
          <ScrollToTop showUnder={300} style={{ bottom: '6%' }}>
            <Button className='btn-icon' color='primary' >
              <ArrowUp size={14} />
            </Button>
          </ScrollToTop>
        </div>
      ) : null}
    </div>
  );
};
export default HorizontalLayout;
