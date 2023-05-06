
// import PackagingForSingleStyle from './merchandising/packaging/PackagingForSingleStyle';
import '@custom-styles/merchandising/others/packaging-sc-combination-table.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Table } from 'reactstrap';
const sizesBySizeGroupId = {
    id: "a5fb5c08-04e9-417c-b447-1e9c40b04930",
    name: "S-SM",
    sizes: [
        {
            id: "1b84925a-d6e2-4419-a837-3f7b7777efdb",
            name: "llllll",
            shortCode: "llllll"
        },
        {
            id: "1b84925a-d6e2-4419-a837-3f7b7777efdb",
            name: "llllll",
            shortCode: "llllll"
        }
    ]
};
const SizeColorTest = () => {
    const dispatch = useDispatch();

    const sizes = [
        {
            id: 'sizeId1',
            sizeName: 'X'
        },
        {
            id: 'sizeId',
            sizeName: 'X6'
        }
    ];

    const myDetails = [
        {
            styleId: "StyleId03"
        },
        {
            styleId: "StyleId01"
        },
        {
            styleId: "StyleId09"
        }
    ];

    const updateSizeStyle = myDetails.map( s => {
        const updateS = sizes.map( i => ( {
            styleId: s.styleId,
            sizeName: i.sizeName
        } ) );
        return updateS;
    } );

    const [styleDetails, setStyleDetails] = useState( [
        {
            styleId: "StyleId03",
            sizeId: "xID",
            size: 'X',
            quantity: 0
        },
        {
            styleId: "StyleId01",
            sizeId: "slId",
            size: 'SL',
            quantity: 0
        },
        {
            styleId: "StyleId09",
            sizeId: "slId",
            size: 'SL',
            quantity: 0
        }
    ] );


    const resArr = [];
    styleDetails.filter( ( item ) => {
        const i = resArr.findIndex( x => ( x.sizeId === item.sizeId && x.size === item.size ) );
        if ( i <= -1 ) {
            resArr.push( item );
        }
        return null;
    } );


    const handleSizeQuantityChange = ( e, sizeId ) => {
        const { value } = e.target;
        const updatedData = styleDetails.map( i => {
            if ( sizeId === i.sizeId ) {
                i.quantity = Number( value );
            }
            return i;
        } );
        setStyleDetails( updatedData );
    };

    console.log( JSON.stringify( updateSizeStyle.flat(), null, 2 ) );

    useEffect( () => {

    }, [] );
    return (
        <>
            <Table className=" table-bordered">
                <thead className="thead-dark">
                    <tr>
                        {resArr.map( i => (
                            <td key={i.sizeId}>{i.size} </td>
                        ) )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {resArr.map( i => (
                            <td key={i.sizeId}><input name="quantity" value={i.quantity} onChange={e => { handleSizeQuantityChange( e, i.sizeId ); }} /> </td>
                        ) )}
                    </tr>
                </tbody>

            </Table>

        </>
    );
};

export default SizeColorTest;
