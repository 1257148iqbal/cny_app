import React, { useState } from 'react';
import { Copy } from 'react-feather';
import { Table } from 'reactstrap';
import { insertAfterItemOfArray } from '../../utility/Utils';

const ArrayDuplicateRow = () => {
    const [fabric, setFabric] = useState( [
        {
            id: 1,
            name: 'Fabric',
            sub: 'Knit Fabric'
        },
        {
            id: 2,
            name: 'Trim',
            sub: 'Zipper Coil'
        },
        {
            id: 3,
            name: 'Trim',
            sub: 'Zipper Metal'
        }
    ] );

    const handleDuplicate = ( id, index ) => {
        const array = [1, 2, 3, 4, 5];
        const f = [...fabric];

        // index to add to

        // element that you want to add
        const element = fabric.find( f => f.id === id );

        const updatedArray = insertAfterItemOfArray( f, index, { isNew: true, ...element } );
        setFabric( updatedArray );
    };
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>#</th>
                        <th>Group</th>
                        <th>Sub Group</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fabric?.map( ( f, index ) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td><Copy onClick={() => { handleDuplicate( f.id, index ); }} /></td>

                                <td className={f?.isNew ? 'text-primary' : ''}>{f.name}</td>
                                <td>{f.sub}</td>
                            </tr>
                        ) )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ArrayDuplicateRow;