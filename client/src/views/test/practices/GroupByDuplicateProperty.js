import React, { useState } from 'react';
import { Table } from 'reactstrap';

export const GroupByDuplicateProperty = () => {
    const [state, setState] = useState( [
        {
            id: 1,
            name: 'Red',
            size: 'L',
            quantity: 0
        },
        {
            id: 2,
            name: 'Red',
            size: 'X',
            quantity: 0

        },
        {
            id: 3,
            name: 'Green',
            size: 'X',
            quantity: 0
        }
    ]

    );
    const [rowCount, setRowCount] = useState( 0 );
    console.log( state.filter( x => x.name === 'Red' ).length > 1 ? state.filter( x => x.name === 'Red' ).length : 0 );
    return (
        <div>
            <Table bordered size="sm" >
                <thead className='bg-primary text-light'>
                    <tr>
                        <td>#</td>
                        <td>Color</td>
                        <td>Size</td>
                        <td>Qty</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map( item => {
                            const name = state.filter( x => x.name === item.name ).length > 1 && { index: 1, name: item.name };
                            return (

                                <tr key={item.id}>
                                    <td>{item.id}</td>

                                    {state.filter( x => x.name === item.name ).length > 1 ? <td rowSpan={state.filter( x => x.name === item.name ).length}>
                                        {state.find( x => x.name === item.name ).name}
                                    </td> : <td></td>
                                    }
                                    <td>{item.size}</td>
                                    <td>
                                        {item.quantity}
                                    </td>
                                </tr>


                            );
                        } )
                    }
                </tbody>
            </Table>

        </div>
    );
};
