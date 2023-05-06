import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { showJsonHtml } from '../../../utility/Utils';

const ObjectArrayOnChange = () => {
    const [state, setState] = useState( [
        {
            id: 1,
            colorName: 'Green',
            size: [
                {
                    sizeId: 65,
                    sizeName: 'S',
                    inputValue: 2
                },
                {
                    sizeId: 55,
                    sizeName: 'M',
                    inputValue: 6
                },
                {
                    sizeId: 56,
                    sizeName: 'X',
                    inputValue: 7
                }
            ]
        },
        {
            id: 2,
            colorName: 'Black',
            size: [
                {
                    sizeId: 65,
                    sizeName: 'S',
                    inputValue: 2
                },
                {
                    sizeId: 55,
                    sizeName: 'M',
                    inputValue: 6
                },
                {
                    sizeId: 56,
                    sizeName: 'X',
                    inputValue: 7
                }
            ]
        }
    ] );

    const sizeObj = {
        sizeId: 45658,
        sizeName: 'Modified Size',
        inputValue: 0
    };

    const modifiedObj = state.map( s => ( {
        id: s.id,
        colorName: s.colorName,
        size: s.size
    } ) );

    modifiedObj.map( i => i.size.push( sizeObj ) );

    useEffect( () => {
        showJsonHtml( 'PrevId', modifiedObj );
    }, [] );
    return (
        <div>
            <Row >
                <Col className="card" lg={8}>
                    <pre style={{ fontSize: '0.8rem' }}><code id="PrevId"></code></pre>

                </Col>
                <Col lg={4}>
                    <Button  >Modified</Button>
                </Col>
            </Row>
        </div>
    );
};

export default ObjectArrayOnChange;
