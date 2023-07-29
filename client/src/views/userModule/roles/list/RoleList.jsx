/*
   Title: Role List Form
   Description: 
   Author: Iqbal Hossain
   Date: 25-July-2023
   Modified: 25-July-2023
*/
import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'
import Select from 'react-select'
import { Card, CardBody, CardHeader, CardTitle, Col, Input, Row } from 'reactstrap'
import CustomDataTable from '../../../../utility/custom/production/CustomDataTable'
import CustomPagination from '../../../../utility/custom/production/CustomPagination'
import { PlusIcon } from '../../../../utility/custom/production/icons/CustomIcons'
import TableCustomerHeader from '../../../../utility/custom/TableCustomerHeader'
import { statusOptions } from '../../../../utility/enums'
import { selectThemeColors } from '../../../../utility/Utils'
import RoleForm from '../form/RoleForm'
import { roleTableColumn } from './roleTableColumn'

const initialState = [
  {name: "Rafiq", details: 'For Details', status: true},
  {name: "Hasan", details: 'For Details', status: false}
]

const RoleList = () => {
  
  //#region State
  const [isOpenSidebar, setIsOpenSideBar] = useState(false)
const [state] = useState(initialState)
  const [loading] = useState(false)
  //#endregion

  //#region Hooks
// console.log(items)
  //#endregion
  //#region States
  const [searchTerm] = useState('')
  const [perPage, setPerPage] = useState(5)
  const [currentPage] = useState(1)
  const [currentStatus, setCurrentStatus] = useState({
    value: '',
    label: 'Select Status',
    number: 0
  })
  //#endregion

  //#region Effects

  //#endregion

  //#region Events
  const handleFilter = () => {}
  const handlePerPage = (e) => {
    setPerPage(e.target.value)
  }
  const handlePageChange = () => {}
  const handleRowSelected = () => {}
  const handleSort = () => {}
  const handleDeleteByRange = () => {}
  //#endregion
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md={6}>
              <Input
                id="search-item"
                className="2-100 mt-50"
                placeholder="Search"
                type="text"
                value={searchTerm}
                onChange={e => handleFilter(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className="react-select mt-50"
                classNamePrefix="select"
                options={statusOptions}
                value={currentStatus}
                onChange={data => setCurrentStatus(data)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle tag="h2">Roles</CardTitle>
        </CardHeader>
        <TableCustomerHeader handlePerPage={handlePerPage} rowsPerPage={perPage} searchTerm={searchTerm}>
          <PlusIcon onClick={() => setIsOpenSideBar(!isOpenSidebar)} />
        </TableCustomerHeader>
        <CustomDataTable
          onSelectedRowsChange={handleRowSelected}
          onSort={handleSort}
          progressPending={loading}
          handleContextAction={handleDeleteByRange}
          columns={roleTableColumn}
          sortIcon={<ChevronDown />}
          data={state}
        />
        <CustomPagination count={Number(Math.ceil(state?.length / perPage))} currentPage={currentPage} onPageChange={handlePageChange} />
      </Card>
      {isOpenSidebar && <RoleForm isOpenSidebar={isOpenSidebar} setIsOpenSideBar={setIsOpenSideBar} selectedRole={undefined}/>}
    </div>
  )
}

export default RoleList
