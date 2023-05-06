import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';

const MultipleArrayMergeSingleObj = () => {
    const [array1, setArray1] = useState( [
        {
            name: 'karim',
            age: 20
        }
    ] );
    const [array2, setArray2] = useState( [
        {
            location: 'CTG',
            phone: '018111275653'
        }
    ] );

    const array3 = [...array1, ...array2];
    let array5 = null;

    // for ( let index = 0; index < array3.length; index++ ) {
    //     const element = array3[index];

    // }

    array3.map( element => {
        array5 = { ...array5, ...element };
    } );

    return (
        <div>
            <Row>
                <Col>
                    <pre>{JSON.stringify( [array5], null, 2 )}</pre>
                </Col>

            </Row>

        </div>
    );
};

export default MultipleArrayMergeSingleObj;
