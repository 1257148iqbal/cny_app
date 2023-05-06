import { store } from '@store/storeConfig/store';
import React from 'react';
import { Edit, FileText, MoreVertical, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
import Badge from 'reactstrap/lib/Badge';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import UncontrolledDropdown from 'reactstrap/lib/UncontrolledDropdown';
import { deleteModule, getModuleById, handleOpenModuleSidebar } from '../store/actions';

const statusObj = {
  active: 'light-success',
  inactive: 'light-secondary'
};

export const ModuleTableColumns = [
  {
    name: 'Module Name',
    minWidth: '200px',
    selector: 'moduleName',
    sortable: true,
    cell: row => row.moduleName
  },
  {
    name: 'Description',
    minWidth: '200px',
    selector: 'description',
    sortable: true,
    cell: row => row.description
  },

  {
    name: 'Status',
    maxWidth: '108px',
    selector: 'status',
    sortable: false,
    cell: row => (
      <Badge className="text-capitalize" color={statusObj[row.status ? 'active' : 'inactive']} pill>
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
              store.dispatch(getModuleById(row.id));
              store.dispatch(handleOpenModuleSidebar(true));
            }}
          >
            <Edit color="green" size={14} className="mr-50" />
            <span className="align-middle">Edit</span>
          </DropdownItem>

          <DropdownItem className="w-100" onClick={() => store.dispatch(deleteModule(row.id))}>
            <Trash2 color="red" size={14} className="mr-50" />
            <span className="align-middle">Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
];
