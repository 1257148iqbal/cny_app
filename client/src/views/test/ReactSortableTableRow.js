import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { Table } from 'reactstrap';
import { arrayMove } from '../../utility/Utils';
// const DragHandle = SortableHandle( () => <td>::</td> );

const SortableItem = SortableElement( ( { value, indx } ) => (
    <tr tabIndex={0}>
        {/* <DragHandle /> */}
        <td> {indx}</td>
        <td> {value.name}</td>
        <td> {value.phone}</td>
        <td> {value.email}</td>
    </tr>
) );

const SortableList = SortableContainer( ( { users } ) => {
    return (
        <Table size="sm" responsive bordered>
            <thead>
                <tr>
                    {/* <th> </th> */}
                    <th> SL</th>
                    <th> Name</th>
                    <th> Mobile </th>
                    <th> Email </th>
                </tr>
            </thead>
            <tbody>
                {users.map( ( value, index ) => (
                    <SortableItem key={`user-${index + 1}`} index={index} value={value} indx={index} />
                ) )}
            </tbody>
        </Table>

    );
} );


const ReactSortableTableRow = () => {

    const [users, setUsers] = useState( [
        {
            name: 'Sohel',
            phone: '01811275653',
            email: 'shsohel.tc@gmail.com'
        },
        {
            name: 'Kamrul',
            phone: '05151645',
            email: 'shsohel.tc@gmail.com'
        },
        {
            name: 'Milon',
            phone: '01811275653',
            email: 'shsohel.tc@gmail.com'
        }
    ] );

    const handleOnSort = ( { oldIndex, newIndex } ) => {
        console.log( oldIndex );
        setUsers( arrayMove( users, oldIndex, newIndex ) );
    };
    return (
        <SortableList transitionDuration={300} users={users} onSortEnd={handleOnSort} />
    );
};

export default ReactSortableTableRow;