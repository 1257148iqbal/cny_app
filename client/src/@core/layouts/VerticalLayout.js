// ** React Imports
// ** Custom Components
import Customizer from '@components/customizer'
import ScrollToTop from '@components/scrolltop'
// ** Configs
import themeConfig from '@configs/themeConfig'
import { useFooterType } from '@hooks/useFooterType'
import { useNavbarColor } from '@hooks/useNavbarColor'
import { useNavbarType } from '@hooks/useNavbarType'
// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'
import { useSkin } from '@hooks/useSkin'
import { handleContentWidth, handleMenuCollapsed, handleMenuHidden } from '@store/layout'
// ** Styles
import '@styles/base/core/menu/menu-types/vertical-menu.scss'
import '@styles/base/core/menu/menu-types/vertical-overlay-menu.scss'
// ** Third Party Components
import classnames from 'classnames'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'react-feather'
// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
// ** Reactstrap Imports
import { Button, Navbar } from 'reactstrap'
import FooterComponent from './components/footer'
import SidebarComponent from './components/menu/vertical-menu'
import NavbarComponent from './components/navbar'


const VerticalLayout = props => {
  // ** Props
  const { menu, navbar, footer, menuData, children, routerProps, setLastLayout, currentActiveItem } = props

  // ** Hooks
  const [isRtl, setIsRtl] = useRTL()
  const { skin, setSkin } = useSkin()
  const { navbarType, setNavbarType } = useNavbarType()
  const { footerType, setFooterType } = useFooterType()
  const { navbarColor, setNavbarColor } = useNavbarColor()

  // ** States
  const [isMounted, setIsMounted] = useState(false)
  const [menuVisibility, setMenuVisibility] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // ** Store Vars
  const dispatch = useDispatch()
  const layoutStore = useSelector(state => state?.layout)

  // ** Update Window Width
  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  // ** Vars
  const location = useLocation()
  const contentWidth = layoutStore?.contentWidth
  const menuCollapsed = layoutStore?.menuCollapsed
  const isHidden = layoutStore?.menuHidden

  // ** Toggles Menu Collapsed
  const setMenuCollapsed = val => dispatch(handleMenuCollapsed(val))

  // ** Handles Content Width
  const setContentWidth = val => dispatch(handleContentWidth(val))

  // ** Handles Content Width
  const setIsHidden = val => dispatch(handleMenuHidden(val))

  //** This function will detect the Route Change and will hide the menu on menu item click
  useEffect(() => {
    if (menuVisibility && windowWidth < 1200) {
      setMenuVisibility(false)
    }
  }, [location])

  //** Sets Window Size & Layout Props
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', handleWindowWidth)
    }
  }, [windowWidth])

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // ** Vars
  const footerClasses = {
    static: 'footer-static',
    sticky: 'footer-fixed',
    hidden: 'footer-hidden'
  }

  const navbarWrapperClasses = {
    floating: 'navbar-floating',
    sticky: 'navbar-sticky',
    static: 'navbar-static',
    hidden: 'navbar-hidden'
  }

  const navbarClasses = {
    floating: contentWidth === 'boxed' ? 'floating-nav container-xxl' : 'floating-nav',
    sticky: 'fixed-top',
    static: 'navbar-static-top',
    hidden: 'd-none'
  }

  const bgColorCondition = navbarColor !== '' && navbarColor !== 'light' && navbarColor !== 'white'

  if (!isMounted) {
    return null
  }
  return (
    <div
      className={classnames(
        `wrapper vertical-layout ${navbarWrapperClasses[navbarType] || 'navbar-floating'} ${
          footerClasses[footerType] || 'footer-static'
        }`,
        {
          // Modern Menu
          'vertical-menu-modern': windowWidth >= 1200,
          'menu-collapsed': menuCollapsed && windowWidth >= 1200,
          'menu-expanded': !menuCollapsed && windowWidth > 1200,

          // Overlay Menu
          'vertical-overlay-menu': windowWidth < 1200,
          'menu-hide': !menuVisibility && windowWidth < 1200,
          'menu-open': menuVisibility && windowWidth < 1200
        }
      )}
      {...(isHidden ? { 'data-col': '1-column' } : {})}
    >
      {!isHidden ? (
        <SidebarComponent
          skin={skin}
          menu={menu}
          menuData={menuData}
          routerProps={routerProps}
          menuCollapsed={menuCollapsed}
          menuVisibility={menuVisibility}
          setMenuCollapsed={setMenuCollapsed}
          setMenuVisibility={setMenuVisibility}
          currentActiveItem={currentActiveItem}
        />
      ) : null}

      <Navbar
        expand='lg'
        container={false}
        light={skin !== 'dark'}
        dark={skin === 'dark' || bgColorCondition}
        color={bgColorCondition ? navbarColor : undefined}
        className={classnames(
          `header-navbar navbar align-items-center ${navbarClasses[navbarType] || 'floating-nav'} navbar-shadow`
        )}
      >
        <div className='navbar-container d-flex content'>
          {navbar ? navbar : <NavbarComponent setMenuVisibility={setMenuVisibility} skin={skin} setSkin={setSkin} />}
        </div>
      </Navbar>
      {children}

      {/* Vertical Nav Menu Overlay */}
      <div
        className={classnames('sidenav-overlay', {
          show: menuVisibility
        })}
        onClick={() => setMenuVisibility(false)}
      ></div>
      {/* Vertical Nav Menu Overlay */}

      {themeConfig?.layout.customizer === true ? (
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
          layout={props?.layout}
          setLayout={props.setLayout}
          setLastLayout={setLastLayout}
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          contentWidth={contentWidth}
          setContentWidth={setContentWidth}
          menuCollapsed={menuCollapsed}
          setMenuCollapsed={setMenuCollapsed}
          transition={props.transition}
          setTransition={props.setTransition}
          themeConfig={themeConfig}
        />
      ) : null}
      <footer
        className={classnames(`footer footer-light ${footerClasses[footerType] || 'footer-static'}`, {
          'd-none': footerType === 'hidden'
        })}
      >
        {footer ? footer : <FooterComponent footerType={footerType} footerClasses={footerClasses} />}
      </footer>

      {themeConfig?.layout.scrollTop === true ? (
        <div className='scroll-to-top'>
          <ScrollToTop showOffset={300} className='scroll-top d-block'>
            <Button className='btn-icon' color='primary'>
              <ArrowUp size={14} />
            </Button>
          </ScrollToTop>
        </div>
      ) : null}
    </div>
  )
}

export default VerticalLayout
