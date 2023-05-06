
import '@custom-styles/merchandising/others/packaging-sc-combination-table.scss';
import React, { useEffect } from 'react';
import { Settings } from 'react-feather';
import { Table } from 'reactstrap';

const TableColumnWidthAuto = () => {
    // var tables = document.getElementsByClassName('flexiCol');
    const tables = document.getElementsByClassName( 'resizable' );
    const resizableGrid = ( table ) => {
        const tableHeight = table.offsetHeight;
        // table.style.overflow = 'hidden';
        const row = table.getElementsByTagName( 'tr' )[0],
            cols = row ? row.children : undefined;
        if ( !cols ) return;

        const paddingDiff = ( col ) => {
            function getStyleVal( elm, css ) {
                return ( window.getComputedStyle( elm, null ).getPropertyValue( css ) );
            }

            if ( getStyleVal( col, 'box-sizing' ) === 'border-box' ) {
                return 0;
            }

            const padLeft = getStyleVal( col, 'padding-left' );
            const padRight = getStyleVal( col, 'padding-right' );
            return ( parseInt( padLeft ) + parseInt( padRight ) );

        };
        const setListeners = ( div ) => {
            let pageX, curCol, nxtCol, curColWidth, nxtColWidth, tableWidth;

            div.addEventListener( 'mousedown', function ( e ) {
                tableWidth = document.getElementById( 'tableResizableId' ).offsetWidth;
                curCol = e.target.parentElement;
                nxtCol = curCol.nextElementSibling;
                pageX = e.pageX;
                const padding = paddingDiff( curCol );
                curColWidth = curCol.offsetWidth - padding;
                //  if (nxtCol)
                //nxtColWidth = nxtCol.offsetWidth - padding;
            } );

            div.addEventListener( 'mouseover', function ( e ) {
                e.target.style.borderRight = '3px solid #0000ff';
            } );

            div.addEventListener( 'mouseout', function ( e ) {
                e.target.style.borderRight = '';
            } );

            document.addEventListener( 'mousemove', function ( e ) {
                if ( curCol ) {
                    const diffX = e.pageX - pageX;
                    // if (nxtCol)
                    //nxtCol.style.width = (nxtColWidth - (diffX)) + 'px';
                    curCol.style.width = `${curColWidth + diffX}px`;
                    document.getElementById( 'tableResizableId' ).style.width = `${tableWidth + diffX}px`;
                }
            } );

            document.addEventListener( 'mouseup', function ( e ) {
                curCol = undefined;
                nxtCol = undefined;
                pageX = undefined;
                nxtColWidth = undefined;
                curColWidth = undefined;
            } );
        };

        const createDiv = ( height ) => {
            const div = document.createElement( 'div' );
            div.style.top = 0;
            div.style.right = 0;
            div.style.width = '5px';
            div.style.position = 'absolute';
            div.style.cursor = 'col-resize';
            div.style.userSelect = 'none';
            div.style.height = `${height}px`;
            return div;
        };
        for ( let i = 0; i < cols.length; i++ ) {
            const div = createDiv( tableHeight );
            cols[i].appendChild( div );
            cols[i].style.position = 'relative';
            setListeners( div );
        }


    };
    useEffect( () => {
        for ( let i = 0; i < tables.length; i++ ) {
            resizableGrid( tables[i] );
        }
    }, [] );
    return (
        <div>
            <Table responsive size='small' bordered id="tableResizableId" className="resizable packing-scc-table">
                <thead className="text-center thead-dark">
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Size</th>
                        <th>File</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr >
                        <td><input type="checkbox" /></td>
                        <td>10Mb</td>
                        <td>C:\Usabc.txt</td>
                        <td><Settings /></td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default TableColumnWidthAuto;
