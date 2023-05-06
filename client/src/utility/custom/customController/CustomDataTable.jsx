/*
     Title: Custom React Data Table
     Description: Custom React Data Table
     Author: Iqbal Hossain
     Date: 10-February-2022
     Modified: 10-February-2022
*/

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { XSquare } from 'react-feather';
import { Button } from 'reactstrap';
import CustomPreLoader from '../CustomPreLoader';

const CustomDataTable = (props) => {
  const {
    onSort,
    onSelectedRowsChange,
    progressPending,
    clearSelectedRows,
    expandableRowsComponent,
    columns,
    sortIcon,
    expandOnRowClicked,
    handleContextAction,
    contextActionButton,
    data,
    contextActionButtonColor,
    selectedRowId,
    expandableRows,
    ...rest
  } = props;

  //#region useEffect Hook
  useEffect(() => {
    const datatable = document.querySelector('.react-dataTable');
    const header = datatable.querySelector('header');
    header.style.display =
      !selectedRowId || selectedRowId.length ? 'block' : 'none';
  }, [selectedRowId]);
  //#endregion

  return (
    <DataTable
      onSelectedRowsChange={onSelectedRowsChange}
      onSort={onSort}
      progressPending={progressPending}
      progressComponent={<CustomPreLoader />}
      contextActions={
        <Button
          onClick={handleContextAction}
          className="btn-icon "
          color={contextActionButtonColor || 'flat-danger'}
        >
          {contextActionButton || <XSquare size={24} />}
        </Button>
      }
      dense
      subHeader={false}
      highlightOnHover
      selectableRows
      clearSelectedRows={clearSelectedRows}
      responsive={true}
      paginationServer
      expandableRows={expandableRows}
      expandableRowsComponent={expandableRowsComponent}
      expandOnRowClicked={expandOnRowClicked}
      persistTableHead
      columns={columns}
      sortIcon={sortIcon}
      className="react-dataTable"
      data={data}
      {...rest}
    />
  );
};
CustomDataTable.propTypes = {
  data: PropTypes.array.isRequired,
  expandableRows: PropTypes.bool,
};
CustomDataTable.defaultProps = {
  expandableRows: false,
};

export default CustomDataTable;
