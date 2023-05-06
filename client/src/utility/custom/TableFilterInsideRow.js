import { useEffect } from 'react';
import DataTable from 'react-data-table-component';

const TableFilterInsideRow = ( { children, rowId, tableId, filterArray } ) => {


    useEffect( () => {
        const table = document.getElementsByClassName( tableId );
        console.log( rowId );
        console.log( tableId );
        const nestedTable = table[0].childNodes[0].getElementsByClassName( "rdt_Table" );
        const div = document.getElementById( rowId );
        if ( table ) {
            nestedTable[0]?.insertBefore( div, nestedTable[0].childNodes[1] );

        }
    }, [] );
    return (
        <div id={rowId} >
            <DataTable
                noHeader
                responsive
                dense={true}
                subHeader={false}
                className="dt-table-inside"
                data={[{}]}
                persistTableHead
                columns={filterArray}
            />
        </div>
    );
};

export default TableFilterInsideRow;