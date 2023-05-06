// ** Third Party Components
import classnames from 'classnames';
import Proptypes from 'prop-types';
import { XSquare } from 'react-feather';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const Sidebar = props => {
  // ** Props
  const {
    width,
    open,
    toggleSidebar,
    size,
    bodyClassName,
    contentClassName,
    wrapperClassName,
    headerClassName,
    className,
    title,
    children,
    closeBtn,
    ...rest
  } = props;

  // ** If user passes custom close btn render that else default close btn
  const renderCloseBtn = closeBtn ? closeBtn : <XSquare className='cursor-pointer' color='#FF0000' size={20} onClick={toggleSidebar} />;

  return (
    <Modal
      // backdrop='static'
      isOpen={open}
      toggle={toggleSidebar}
      contentClassName={classnames( {
        [contentClassName]: contentClassName
      } )}
      modalClassName={classnames( 'modal-slide-in', {
        [wrapperClassName]: wrapperClassName
      } )}
      className={classnames( {
        [className]: className,
        'sidebar-lg': size === 'lg',
        'sidebar-sm': size === 'sm'
      } )}
      /*eslint-disable */
      {...( width !== undefined
        ? {
          style: { width: String( width ) + 'px' }
        }
        : {} )}
      /*eslint-enable */
      {...rest}
    >
      <ModalHeader
        className={classnames( {
          [headerClassName]: headerClassName
        } )}
        toggle={toggleSidebar}
        close={renderCloseBtn}
        tag='div'
      >
        <h5 className='modal-title'>
          <span className='align-middle'>{title}</span>
        </h5>
      </ModalHeader>
      <ModalBody
        className={classnames( 'flex-grow-1', {
          [bodyClassName]: bodyClassName
        } )}
      >
        {children}
      </ModalBody>
    </Modal>
  );
};

export default Sidebar;

// ** PropTypes
Sidebar.propTypes = {
  title: Proptypes.string.isRequired,
  open: Proptypes.bool.isRequired,
  toggleSidebar: Proptypes.func.isRequired,
  size: Proptypes.oneOf( ['sm', 'lg'] ),
  className: Proptypes.string,
  bodyClassName: Proptypes.string,
  contentClassName: Proptypes.string,
  wrapperClassName: Proptypes.string,
  children: Proptypes.any.isRequired,
  width: Proptypes.oneOfType( [Proptypes.number, Proptypes.string] )
};
