import _ from 'lodash';
import React from 'react';

const mainArray = [
    {
        id: 1,
        name: 'Sharma Ray',
        department: 'Software Developer',
        sequenc: 1
    },
    {
        id: 2,
        name: 'Milon',
        department: 'HR',
        sequenc: 1
    },
    {
        id: 3,
        name: 'Jack',
        department: 'Software Developer',
        sequenc: 2
    },
    {
        id: 4,
        name: 'Jenifa Devi',
        department: 'HR',
        sequenc: 2
    },
    {
        id: 5,
        name: 'SH SOHEL',
        department: 'Account',
        sequenc: 1
    }
];

const ArraySorting = () => {

    const sortArray = mainArray.sort( function ( a, b ) {
        return ( b.sequenc ) - ( a.sequenc );
    } );

    const grouped = _.groupBy( sortArray, function ( d ) {
        return d.department;
    } );
    return (
        <div>

        </div>
    );
};

export default ArraySorting;
