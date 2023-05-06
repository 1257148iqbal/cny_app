import '@custom-styles/merchandising/others/custom-table.scss';
import _ from 'lodash';
import React, { useState } from 'react';
import { Settings } from 'react-feather';
import { Table } from 'reactstrap';
const array = [
    {
        id: 4,
        styleId: "ba96e29d-17cb-4736-83b9-024f974bd98a",
        sizeId: "7fa96244-5b2c-4684-a8bc-6bc9bfc994d1",
        size: "X",
        colorId: "52ac1d09-970f-439e-a846-ad187917b660",
        color: "Yellow",
        quantity: 60,
        ratio: 0,
        asrtValue: 0,
        isInRatio: false
    },
    {
        id: 5,
        styleId: "ba96e29d-17cb-4736-83b9-024f974bd98a",
        sizeId: "54a2e79b-6074-4e7e-9d5e-a6be6796018e",
        size: "XL",
        colorId: "52ac1d09-970f-439e-a846-ad187917b660",
        color: "Yellow",
        quantity: 50,
        ratio: 0,
        asrtValue: 0,
        isInRatio: false
    },
    {
        id: 6,
        styleId: "ba96e29d-17cb-4736-83b9-024f974bd98a",
        sizeId: "21fc5670-659c-41de-bb74-ff43f4465ab9",
        size: "M",
        colorId: "52ac1d09-970f-439e-a846-ad187917b660",
        color: "Black",
        quantity: 30,
        ratio: 0,
        asrtValue: 0,
        isInRatio: false
    }
];
const ColorGroupWiseSizePO = () => {
    const [state, setState] = useState( array );

    const grouped = _.groupBy( state, function ( d ) {
        return d.color;
    } );

    console.log( JSON.stringify( grouped, null, 2 ) );

    return (
        <div className="custom-table">
            <Table bordered>
                <thead className="text-center">
                    <tr>
                        <th>Color</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Amount</th>
                        <th>Adjusted Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {Object.keys( grouped ).map( ( i, inx ) => (
                        <tr key={inx + 1}>
                            <td>{i}</td>
                            <td>{_.sum( grouped[i].map( s => Number( s.quantity ) ) )}</td>
                            <td>3.00</td>
                            <td>{_.sum( grouped[i].map( s => Number( s.quantity * 3.00 ) ) )}</td>
                            <td></td>
                            <td><Settings onClick={( e ) => { console.log( grouped[i] ); }} /></td>
                        </tr>
                    ) )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ColorGroupWiseSizePO;
