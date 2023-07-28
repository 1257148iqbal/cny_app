/*
   Title: Create Role Coluns
   Description: 
   Author: Iqbal Hossain
   Date: 25-July-2023
   Modified: 25-July-2023
*/

import { Edit, MoreVertical } from 'react-feather'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

export const roleTableColumn = [
  {
    name: 'Name',
    minWidth: '170px',
    selector:  row => row['name'],
    sortable: true,
    cell: row => row['name']
  },
  {
    name: 'Details',
    minWidth: '170px',
    selector: row => row['details'],
    sortable: true,
    cell: row => row['details']
  },
  {
    name: 'Status',
    minWidth: '120px',
    selector: row => row['status'],
    sortable: true,
    cell: row => (
      <Badge className="text-capitalize" color={`${row['status'] ? 'light-success' : 'light-secondary'}`}>
        {row['status'] ? 'active' : 'inactive'}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag="div" className="btn btn-sm">
          <MoreVertical size={14} className="cursor-pointer" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem className="w-100" onClick={() => {
            console.log(row)
          }}>
            <Edit color="green" size={14} />
            <span className="align-middle">Edit</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
