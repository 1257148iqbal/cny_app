import React, { useMemo } from 'react';
import DataTable from 'react-data-table-component';
import MOCK_DATA from './MOCK_DATA.json';

const customStyles = {
    rows: {
        style: {
            minHeight: '72px' // override the row height
        }
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            //  backgroundColor: 'red',

            border: 'solid black 0.1rem'
        }
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            border: 'solid black 0.1rem'

        }
    }
};


const DataTableResize = () => {

    const data = useMemo( () => MOCK_DATA, [] );
    // const columns = useMemo( () => COLUMNS,[] )
    return (
        <div>
            <DataTable
                persistTableHead
                pagination
                paginationTotalRows={data.length}
                // customStyles={customStyles}
                className="t-react-dataTable"
                columns={[
                    {
                        id: 'Id',
                        name: 'Id',
                        selector: row => row.id,
                        minWidth: '50px',
                        // width: "100px",
                        //maxWidth: '150px',
                        // style: {
                        //     resize: 'horizontal',
                        //     overflowX: 'auto'
                        // }
                        cell: row => row.id
                    },
                    {
                        id: 'FirstName',
                        name: 'First Name',
                        selector: row => row.firstName,
                        minWidth: '50px'
                        // width: '150px'
                    },
                    {
                        id: 'lastName',
                        name: 'Last Name',
                        selector: row => row.lastName,
                        //  minWidth: '50px',
                        // width: '100px',
                        maxWidth: '150px'
                    },

                    {
                        id: 'email',
                        name: 'Email',
                        selector: row => row.email,
                        minWidth: '50px',
                        // width: '150px'
                        compact: true
                    },
                    {
                        id: 'age',
                        name: 'Age',
                        selector: row => row.age,
                        minWidth: '50px'
                        // width: '150px'
                    },
                    {
                        id: 'country',
                        name: 'Country',
                        selector: row => row.country,
                        minWidth: '50px'
                        // width: '150px'
                    },
                    {
                        id: 'phone',
                        name: 'Phone',
                        selector: row => row.phone,
                        minWidth: '50px'
                        // width: '150px'
                    }
                ]}
                data={data}
                dense
            />
        </div>
    );
};

export default DataTableResize;