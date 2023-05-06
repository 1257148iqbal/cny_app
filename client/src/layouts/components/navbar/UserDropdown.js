// ** React Imports
// ** Custom Components
import Avatar from '@components/avatar';
// ** Default Avatar Image
import { handleLogout } from '@store/actions/auth';
// ** Utils
import { Power, User } from 'react-feather';
// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// ** Third Party Components
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { baseUrl } from '../../../utility/enums';


const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch();
  const { authenticateUser } = useSelector( ( { auth } ) => auth );

  return (
    <UncontrolledDropdown style={{ minWidth: '170px' }} tag='li' className='dropdown-user nav-item '>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link d-flex justify-content-end align-items-center' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name font-weight-bold'>{( authenticateUser?.name ) || 'Guest'}</span>
          {/* <span className='user-status'>{( userData && userData.role ) || 'Admin'}</span> */}
        </div>
        <Avatar img={`${baseUrl}/${authenticateUser?.imageUrl}` ?? 'https://via.placeholder.com/50'} imgHeight='28' imgWidth='28' status='online' className="" />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to='/user-profile' >
          <User size={14} className='mr-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>

        <DropdownItem tag={Link} to='/login' onClick={() => dispatch( handleLogout() )}>
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
