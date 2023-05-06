import _ from 'lodash';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Table } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { randomIdGenerator } from '../utility/Utils';

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

const initialArrayStates = [
    {
        department: 'Software Developer',
        child: [
            {
                id: 1,
                name: 'Sharma Ray',
                sequenc: 1
            },
            {
                id: 3,
                name: 'Jack',
                sequenc: 2
            }
        ]
    },
    {
        department: 'HR',
        child: [
            {
                id: 2,
                name: 'Milon',
                sequenc: 1
            },
            {
                id: 4,
                name: 'Jenifa Devi',
                sequenc: 2
            }

        ]
    },
    {
        department: 'Account',
        child: [
            {
                id: 5,
                name: 'SH SOHEL',
                sequenc: 1
            }
        ]
    },
    {
        department: 'Finance',
        child: [
            {
                id: 6,
                name: 'Alamgir',
                sequenc: 1
            },
            {
                id: 7,
                name: 'Rahim Rahman',
                sequenc: 2
            }
        ]
    }
];
const department = [
    {
        id: 0,
        name: 'Software Developer'
    },
    {
        id: 1,
        name: 'Software Developer'
    }
];
const obj = {
    100: ["ABC"],
    101: [
        "123",
        "DEF",
        "XYZ",
        "456",
        "657",
        "1234",
        "4564",
        "vdfgx",
        "vcegefgg",
        "g544"
    ]
};

const SpanRowDuplicateColumn = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState( mainArray );


    const myResult = mainArray.reduce( function ( r, a ) {
        r[a.department] = r[a.department] || [];
        r[a.department].push( a );
        return r;
    }, Object.create( null ) );
    // console.log( myResult );


    const grouped = _.groupBy( mainArray, function ( d ) {
        return d.department;
    } );


    const planning = [
        { id: '1', equipe: ['1', '2'] },
        { id: '4', equipe: ['1'] },
        { id: '3', equipe: ['2', '3'] }
    ];

    const checked = ['1', '4'];

    const filtered = planning.filter( item => checked.includes( item.id ) );
    // planning.filter(item => item.equipe.some(val => checked.includes(val)))

    console.log( filtered );

    return (
        <Card>
            <CardBody>
                <Table bordered size='sm'>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Name</th>
                            <th>Sequence</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys( grouped ).map( ( item, i ) => {
                            return grouped[item].map( ( i, index ) => ( index === 0 ? (
                                <tr key={i + 1}>
                                    <td rowSpan={grouped[item].length} >
                                        {i.department}
                                    </td>
                                    <td key={randomIdGenerator()} >
                                        {i.name}
                                    </td>
                                    <td key={randomIdGenerator()} rowSpan="1">
                                        {i.sequenc}
                                    </td>
                                </tr>
                            ) : (
                                <tr key={randomIdGenerator()}>
                                    <td key={randomIdGenerator()} rowSpan="1">
                                        {i.name}
                                    </td>
                                    <td key={randomIdGenerator()} rowSpan="1">
                                        {i.sequenc}
                                    </td>
                                </tr>
                            ) )
                            );
                        } )}
                    </tbody>

                </Table>
            </CardBody>
            <CardBody>
                <Table bordered size='sm'>
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Name</th>
                            <th>Sequence</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialArrayStates.map( ( item, i ) => {
                            return item.child.map( ( item2, index ) => ( index === 0 ? (
                                <tr key={i + 1}>
                                    <td rowSpan={item.child.length} >
                                        {item.department}
                                    </td>
                                    <td key={randomIdGenerator()} >
                                        {item2.name}
                                    </td>
                                    <td key={randomIdGenerator()} rowSpan="1">
                                        {item2.sequenc}
                                    </td>
                                </tr>
                            ) : (
                                <tr key={randomIdGenerator()}>
                                    <td key={randomIdGenerator()} rowSpan="1">
                                        {item2.name}
                                    </td>
                                    <td key={randomIdGenerator()} rowSpan="1">
                                        {item2.sequenc}
                                    </td>
                                </tr>
                            ) )
                            );
                        } )}
                    </tbody>

                </Table>
            </CardBody>
            <CardBody>
                <Table bordered size='sm'>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys( obj ).map( ( item, i ) => {
                            return obj[item].map( ( error_description, index ) => ( index === 0 ? (
                                <tr key={i + 1}>
                                    <td rowSpan={obj[item].length} >
                                        {item}
                                    </td>
                                    <td key={index} rowSpan="1">
                                        {error_description}
                                    </td>
                                </tr>
                            ) : (
                                <tr key={Math.random()}>
                                    <td key={index} rowSpan="1">
                                        {error_description}
                                    </td>
                                </tr>
                            ) )
                            );
                        } )}
                    </tbody>

                </Table>
            </CardBody>

        </Card>
    );
};

export default SpanRowDuplicateColumn;
