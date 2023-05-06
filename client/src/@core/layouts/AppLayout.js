// ** React Imports
// ** Custom Components
// ** Configs
import themeConfig from '@configs/themeConfig';
import { useFooterType } from '@hooks/useFooterType';
import { useNavbarColor } from '@hooks/useNavbarColor';
import { useNavbarType } from '@hooks/useNavbarType';
// ** Custom Hooks
import { useRTL } from '@hooks/useRTL';
import { useSkin } from '@hooks/useSkin';
import FooterComponent from '@layouts/components/footer';
import NavbarComponent from '@layouts/components/navbar/AppNavBar';
import { handleContentWidth, handleMenuHidden } from '@store/actions/layout';
// ** Styles
import '@styles/base/core/menu/menu-types/horizontal-menu.scss';
// ** Third Party Components
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'react-feather';
// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { Button, Navbar, NavItem } from 'reactstrap';


const AppLayout = props => {
  // ** Props
  const { children } = props;

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
      <Navbar
        expand='lg'
        className={classnames( 'header-navbar navbar-fixed navbar-shadow navbar-brand-left', {
          'navbar-scrolled': navbarScrolled
        } )}
      >

        <div className='navbar-header d-block '>
          <ul className='nav navbar-nav navbar-right'>
            <NavItem>
              <Link to='/' className='navbar-brand'>
                <span className='brand-logo'>
                  <img src={themeConfig.app.appLogoImage} alt='logo' />
                </span>
                <h2 className='brand-text mb-0'>{themeConfig.app.appName}</h2>
              </Link>
            </NavItem>
          </ul>
        </div>


        <div className='navbar-container d-flex content'>
          <NavbarComponent skin={skin} setSkin={setSkin} />
        </div>
      </Navbar>


      {children}

      <footer
        className={classnames( `footer footer-light ${footerClasses[footerType] || 'footer-static'}`, {
          'd-none': footerType === 'hidden'
        } )}
      >
        <FooterComponent footerType={footerType} footerClasses={footerClasses} />
      </footer>


      <div className='scroll-to-top'>
        <ScrollToTop showUnder={300} style={{ bottom: '5%' }}>
          <Button className='btn-icon' color='primary'>
            <ArrowUp size={14} />
          </Button>
        </ScrollToTop>
      </div>

    </div>
  );
};
export default AppLayout;
