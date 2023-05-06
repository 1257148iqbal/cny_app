import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { randomIdGenerator } from '../../utility/Utils';
const TableFilteredRow = () => {
    const [filterObj, setFilterObj] = useState( {
        value: ''

    } );


    const handleOnChange = ( row ) => {
        console.log( row );
    };

    const mainArray = [
        {
            id: randomIdGenerator(),
            value: '1'
        },
        {
            id: randomIdGenerator(),
            value: '2'
        },
        {
            id: randomIdGenerator(),
            value: '3'
        },
        {
            id: randomIdGenerator(),
            value: '4'
        },
        {
            id: randomIdGenerator(),
            value: '5'
        },
        {
            id: randomIdGenerator(),
            value: '6'
        },
        {
            id: randomIdGenerator(),
            value: '7'
        },
        {
            id: randomIdGenerator(),
            value: '8'
        },
        {
            id: randomIdGenerator(),
            value: '9'
        },
        {
            id: randomIdGenerator(),
            value: '10'
        },
        {
            id: randomIdGenerator(),
            value: '11'
        },
        {
            id: randomIdGenerator(),
            value: '126'
        },
        {
            id: randomIdGenerator(),
            value: '123'
        }
    ];
    const [rowsPerPage, setRowsPerPage] = useState( 10 );
    const [page, setPage] = useState( 1 );
    const getData = () => {
        return mainArray;
    };

    const handleFilter = ( e ) => {
        const { name, value, type } = e.target;
        setFilterObj( {
            ...filterObj,
            [name]: type === 'number' ? Number( value ) : value
        } );
    };

    const randersData = () => {

        let filtered = [];
        if ( filterObj.value.length ) {
            filtered =
                mainArray.filter(
                    wh => wh.value?.toLowerCase().includes( filterObj.value?.toLowerCase() )
                );
        } else {
            filtered = mainArray;
        }
        // return paginateArray( filtered, rowsPerPage, page );
        return filtered;
    };


    const handlePagination = ( page ) => {
        console.log( page );
        setPage( page );

    };


    const handleRowPerPage = ( currentRowsPerPage, currentPage ) => {
        const totalSend = randersData();
        console.log( currentRowsPerPage );
        setRowsPerPage( currentRowsPerPage );
        setPage( currentPage );
    };


    useEffect( () => {
        const table = document.getElementsByClassName( 'custom-td' );
        const nestedTable = table[0].childNodes[0].getElementsByClassName( "rdt_Table" );
        console.log( nestedTable[0].childNodes[0].style );
        //  const div = nestedTable[0].childNodes[0];
        const div = document.getElementById( 'newRow' );

        if ( table ) {
            nestedTable[0].insertBefore( div, nestedTable[0].childNodes[1] );
        }
        div.setAttribute(
            'style',
            `${nestedTable[0].childNodes[0].style}`
        );
    }, [] );


    return (
        <div className='row'>
            <div>
                <h1>This pen is
                    <span
                        className="txt-rotate"
                        data-period="2000"
                        data-rotate='[ "nerdy.", "simple.", "pure JS.", "pretty.", "fun!" ]'></span>
                </h1>
            </div>
            <div id='newRow'>
                <div className=" rdt_TableHead" role="rowgroup">
                    sfsf
                </div>
                {/* <div className="sc-AxirZ eBuPmJ rdt_TableHead" role="rowgroup">
                    <div className="sc-AxiKw eibuax rdt_TableHeadRow" role="row">
                        <div className="sc-AxhCb sc-AxhUy sc-fzplWN eDALHG rdt_TableCol">
                            <div id="column-buyerName" role="button" aria-pressed="false" tabIndex="0" className="sc-fznyAO jHsXUi rdt_TableCol_Sortable">
                                <div>Name</div>
                                <span className="sc-fzpans eKRQOE">▲</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>


            {/* <TableFilterInsideRow rowId="rowIdTable" tableId="custom-td" filterArray={filterArray} /> */}

            <DataTable
                noHeader
                id="tableId"
                responsive
                dense={true}
                pagination
                subHeader={false}
                paginationTotalRows={randersData()?.length}

                className="react-custom-dataTable custom-td"
                paginationRowsPerPageOptions={[2, 5, 10, 15, 20]}
                data={randersData()}
                persistTableHead
                // onChangePage={page => handlePagination( page )}
                //  onChangeRowsPerPage={( currentRowsPerPage, currentPage ) => { handleRowPerPage( currentRowsPerPage, currentPage ); }}
                columns={[
                    {
                        name: 'Name',
                        width: '150px',
                        selector: 'buyerName',
                        sortable: true,
                        cell: ( row, index ) => row.id
                    },
                    {
                        name: 'Buyer',
                        minWidth: '120px',
                        selector: 'buyerName',
                        sortable: true,
                        cell: ( row, index ) => row.value
                    },
                    {
                        name: 'Buyer',
                        minWidth: '120px',
                        selector: 'buyerName',
                        sortable: true,
                        cell: ( row, index ) => row.value
                    },
                    {
                        name: 'Buyer',
                        minWidth: '120px',
                        selector: 'buyerName',
                        sortable: true,
                        cell: ( row, index ) => row.value
                    },
                    {
                        name: 'Buyer',
                        minWidth: '100px',
                        selector: 'buyerName',
                        sortable: true,
                        cell: ( row, index ) => row.value
                    }

                ]}
            />

        </div>
    );
};

export default TableFilteredRow;
