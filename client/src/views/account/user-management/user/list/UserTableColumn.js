import Avatar from '@components/avatar';
import defaultAvatar from '@src/assets/images/avatars/avatar-blank.png';
import { store } from '@store/storeConfig/store';
import { Edit, FileText, MoreVertical, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import UncontrolledDropdown from 'reactstrap/lib/UncontrolledDropdown';
import { deleteUser, getUserById, handleOpenUserSidebar } from '../store/actions';

const statusObj = {
  active: 'light-success',
  inactive: 'light-secondary'
};

export const UserTableColumns = [
  {
    name: 'Full Name',
    minWidth: '200px',
    selector: 'fullName',
    sortable: true,
    cell: row => row.fullName
  },
  {
    name: 'User Name',
    minWidth: '200px',
    selector: 'userName',
    sortable: true,
    cell: row => row.userName
  },
  {
    name: 'Email',
    minWidth: '200px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'Phone',
    minWidth: '200px',
    selector: 'phoneNumber',
    sortable: true,
    cell: row => row.phoneNumber
  },
  {
    name: 'Fax',
    minWidth: '200px',
    selector: 'fax',
    sortable: true,
    cell: row => row.fax
  },
  {
    name: 'Module Name ',
    minWidth: '200px',
    selector: 'module',
    sortable: true,
    cell: row => row.module.map(i => i.name).join(',')
  },
  {
    name: 'Role Name ',
    minWidth: '200px',
    selector: 'role',
    sortable: true,
    cell: row => row.role
  },
  {
    name: 'photo',
    minWidth: '200px',
    selector: 'photo',
    sortable: true,
    cell: row => <Avatar img={row.photo ? row.photo : defaultAvatar} />
  },
  {
    name: 'Status',
    maxWidth: '108px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className="text-capitalize" color={statusObj[row.status ? 'active' : 'inactive']}>
        {row.status ? 'active' : 'inactive'}
      </Badge>
    )
  },
  {
    name: 'Actions',
    maxWidth: '100px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag="div" className="btn btn-sm">
          <MoreVertical size={14} className="cursor-pointer" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag={Link} to={`/apps/user/view/${row.id}`} className="w-100" onClick={() => {}}>
            <FileText color="skyBlue" size={14} className="mr-50" />
            <span color="primary" className="align-middle">
              Details
            </span>
          </DropdownItem>

          <DropdownItem
            className="w-100"
            onClick={() => {
              store.dispatch(getUserById(row.id));
              store.dispatch(handleOpenUserSidebar(true));
            }}
          >
            <Edit color="green" size={14} className="mr-50" />
            <span className="align-middle">Edit</span>
          </DropdownItem>

          <DropdownItem className="w-100" onClick={() => store.dispatch(deleteUser(row.id))}>
            <Trash2 color="red" size={14} className="mr-50" />
            <span className="align-middle">Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
];
