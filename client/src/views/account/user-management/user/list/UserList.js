import { store } from '@store/storeConfig/store';
import { selectThemeColors } from '@utils';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { ChevronDown, PlusSquare, XSquare } from 'react-feather';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Button, Col, Input, Row, UncontrolledTooltip } from 'reactstrap';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardTitle from 'reactstrap/lib/CardTitle';
import CustomPreLoader from '../../../../../utility/custom/CustomPreLoader';
import TableCustomerHeader from '../../../../../utility/custom/TableCustomerHeader';
import UserAddForm from '../form/UserAddForm';
import UserEditForm from '../form/UserEditForm';
import UserExpandRow from '../list/UserExpandRow';
import { UserTableColumns } from '../list/UserTableColumn';
import { deleteRangeUser, getUserByQuery, handleOpenUserSidebar } from '../store/actions';

// ** user Country filter options: Demo Array
const selectedCountry = [
  { value: '', label: 'Select Country', number: 0 },
  { value: 'bangladesh', label: 'Bangladesh', number: 1 },
  { value: 'india', label: 'India', number: 2 },
  { value: 'usa', label: 'USA', number: 3 },
  { value: 'canada', label: 'Canada', number: 4 }
];

// ** user Status filter options: Demo Array
const statusOptions = [
  { value: '', label: 'Select Status', number: 0 },
  { value: true, label: 'Active', number: 1 },
  { value: false, label: 'Inactive', number: 2 }
];

const UserList = () => {
  const dispatch = useDispatch();
  // ** Global States
  const { users, total, selectedUser, openUserSidebar, queryData } = useSelector(({ users }) => users);

  // ** buyerAgents States
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedBy, setSortedBy] = useState('asc');

  const [sortedColumn, setSortedColumn] = useState('fullName');
  const [currentCountry, setCurrentCountry] = useState({
    value: '',
    label: 'Select Country',
    number: 0
  });
  const [currentStatus, setCurrentStatus] = useState({
    value: '',
    label: 'Select Status',
    number: 0
  });

  const [selectedRowId, setSelectedRowId] = useState([]);
  const [clearSelectedRow, setClearSelectedRow] = useState(false);

  // ** Global Function to toggle sidebar for Buyer
  const toggleSidebar = () => store.dispatch(handleOpenUserSidebar(!openUserSidebar));

  //#Hooks
  useEffect(() => {
    dispatch(
      getUserByQuery({
        page: currentPage,
        perPage: rowsPerPage,
        country: currentCountry.value,
        status: currentStatus.value,
        q: searchTerm,
        sortedBy,
        sortedColumn
      })
    );
  }, [dispatch, queryData?.length]);

  // ** Function in get data on page change
  const handlePagination = page => {
    dispatch(
      getUserByQuery({
        page: page.selected + 1,
        perPage: rowsPerPage,
        country: currentCountry.value,
        status: currentStatus.value,
        q: searchTerm,
        sortedBy,
        sortedColumn
      })
    );
    setCurrentPage(page.selected + 1);
  };

  // ** Function in get data on rows per page
  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value);
    dispatch(
      getUserByQuery({
        page: currentPage,
        perPage: value,
        country: currentCountry.value,
        status: currentStatus.value,
        q: searchTerm,
        sortedBy,
        sortedColumn
      })
    );
    setRowsPerPage(value);
  };

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val);
    dispatch(
      getUserByQuery({
        page: currentPage,
        perPage: rowsPerPage,
        country: currentCountry.value,
        status: currentStatus.value,
        q: val,
        sortedBy,
        sortedColumn
      })
    );
  };

  const handleSort = (column, direction) => {
    const { selector } = column;
    setSortedBy(direction);
    setSortedColumn(selector);
    dispatch(
      getUserByQuery({
        page: currentPage,
        perPage: rowsPerPage,
        country: currentCountry.value,
        status: currentStatus.value,
        q: searchTerm,
        sortedBy: direction,
        sortedColumn: selector
      })
    );
  };

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(total / rowsPerPage));

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName="active"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
      />
    );
  };

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      status: currentStatus.value,
      country: currentCountry.value,
      q: searchTerm
    };

    const isFiltered = Object.keys(filters).some(function(k) {
      return filters[k].length > 0;
    });

    if (queryData.length > 0) {
      return queryData;
    } else if (queryData.length === 0 && isFiltered) {
      return [];
    } else {
      return users.slice(0, rowsPerPage);
    }
  };

  // ** Start For Multiple Rows for Get IDs
  const handleRowSelected = rows => {
    const rowsId = rows.selectedRows.map(item => item.id);
    setSelectedRowId(rowsId);
    setClearSelectedRow(false);
  };

  // **Clear Delete Ids
  const handleClearSelected = () => {
    setClearSelectedRow(true);
    dispatch(
      getUserByQuery({
        page: currentPage,
        perPage: rowsPerPage,
        country: currentCountry.value,
        status: currentStatus.value,
        q: searchTerm,
        sortedBy,
        sortedColumn
      })
    );
  };

  // ** Delete Rang
  const handleDeleteUserRange = () => {
    dispatch(deleteRangeUser(selectedRowId));
    setSelectedRowId([]);
    handleClearSelected();
  };
  // ** End For Multiple Select and Delete Range

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="4">
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className="react-select  mt-50"
                classNamePrefix="select"
                options={selectedCountry}
                value={currentCountry}
                onChange={data => {
                  setCurrentCountry(data);
                  dispatch(
                    getUserByQuery({
                      page: currentPage,
                      perPage: rowsPerPage,
                      country: data.value,
                      status: currentStatus.value,
                      q: searchTerm,
                      sortedBy,
                      sortedColumn
                    })
                  );
                }}
              />
            </Col>

            <Col md="4">
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className="react-select  mt-50"
                classNamePrefix="select"
                options={statusOptions}
                value={currentStatus}
                onChange={data => {
                  setCurrentStatus(data);
                  dispatch(
                    getUserByQuery({
                      page: currentPage,
                      perPage: rowsPerPage,
                      country: currentCountry.label,
                      status: data.value,
                      q: searchTerm,
                      sortedBy,
                      sortedColumn
                    })
                  );
                }}
              />
            </Col>

            <Col md="4">
              <Input
                id="search-buyer-agent"
                className="w-100 mt-50"
                placeholder="Search"
                type="text"
                value={searchTerm}
                onChange={e => handleFilter(e.target.value)}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <div>
          <CardHeader>
            <CardTitle tag="h2">User</CardTitle>
          </CardHeader>
          <TableCustomerHeader handlePerPage={handlePerPage} rowsPerPage={rowsPerPage} searchTerm={searchTerm}>
            <Button
              onClick={() => {
                toggleSidebar();
              }}
              className="btn-icon"
              color="flat-success"
              id="positionBottom"
            >
              <PlusSquare size={24} />
            </Button>
            <UncontrolledTooltip placement="bottom-end" color="#28c76f" target="positionBottom">
              Add
            </UncontrolledTooltip>
          </TableCustomerHeader>

          <DataTable
            onSelectedRowsChange={handleRowSelected}
            onSort={handleSort}
            progressPending={!queryData.length}
            progressComponent={<CustomPreLoader />}
            // contextMessage={}
            contextActions={
              <Button
                onClick={() => {
                  handleDeleteUserRange();
                }}
                className="btn-icon "
                color="flat-danger"
              >
                <XSquare size={24} />
              </Button>
            }
            dense
            subHeader={false}
            highlightOnHover
            selectableRows
            clearSelectedRows={clearSelectedRow}
            responsive={true}
            paginationServer
            expandableRows
            expandableRowsComponent={<UserExpandRow data={data => data} />}
            expandOnRowClicked
            persistTableHead
            columns={UserTableColumns}
            sortIcon={<ChevronDown />}
            className="react-dataTable"
            data={dataToRender()}
          />
        </div>
        <div>
          {queryData.length > 0 && (
            <div>
              <CustomPagination />
            </div>
          )}
        </div>
      </Card>
      {/* Open Sidebar for Edit and Add */}

      {selectedUser !== null && openUserSidebar ? (
        <UserEditForm data={selectedUser} open={openUserSidebar} toggleSidebar={toggleSidebar} />
      ) : openUserSidebar ? (
        <UserAddForm open={openUserSidebar} toggleSidebar={toggleSidebar} />
      ) : null}
    </div>
  );
};

export default UserList;
