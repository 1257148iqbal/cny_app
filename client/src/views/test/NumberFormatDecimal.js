import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { Col, Row, Table } from 'reactstrap';
import { isZeroToFixed } from '../../utility/Utils';
const NumberFormatDecimal = () => {
    const [fabricDetails, setFabricDetails] = useState(
        [
            {
                id: 1,
                name: 'Fabric',
                description: '',
                qty: 0,
                rate: 0,
                amount: 0
            },
            {
                id: 2,
                name: 'Trim',
                description: '',
                qty: 0,
                rate: 0,
                amount: 0
            }
        ]
    );

    const handleDetailsOnChange = ( e, id ) => {
        const { name, value } = e.target;
        if ( value !== '.' ) {
            const updatedData = fabricDetails.map( fabric => {
                if ( fabric.id === id ) {
                    fabric[name] = Number( value );
                    fabric['amount'] = name === 'qty' ? Number( value ) * fabric.rate : name === 'rate' ? Number( value ) * fabric.qty : Number( value );
                }
                return fabric;
            } );
            setFabricDetails( updatedData );
        }
    };


    const numberFormattedIsZero = ( inputObj ) => {
        console.log( inputObj );
        return false;
    };
    const handleValueOnChange = ( values, id, name ) => {
        const { formattedValue, value, floatValue } = values;
        console.log( values );
        if ( floatValue !== undefined ) {
            const updatedData = fabricDetails.map( fabric => {
                if ( fabric.id === id ) {
                    fabric[name] = floatValue;
                    fabric['amount'] = name === 'qty' ? floatValue * fabric.rate : name === 'rate' ? floatValue * fabric.qty : floatValue;
                }
                return fabric;
            } );
            setFabricDetails( updatedData );
        }


    };
    return (
        <div>
            <Row>
                <Col xs={6}>
                    <Table bordered size="sm">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Qt</th>
                                <th>Rate</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fabricDetails.map( ( fabric, index ) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{fabric.name}</td>
                                    <td>
                                        <NumberFormat
                                            id={`${fabric.name}-${fabric.id}`}
                                            isNumericString={true}
                                            className="form-control-sm form-control"
                                            value={fabric.qty}
                                            displayType="input"
                                            name="qty"
                                            decimalScale={5}
                                            onBlur={( e ) => { handleDetailsOnChange( e, fabric.id ); }}
                                            fixedDecimalScale={fabric.qty > 0}
                                            // isAllowed={numberFormattedIsZero}
                                            onFocus={e => {
                                                e.target.select();
                                            }}
                                            //  onValueChange={( values ) => { handleValueOnChange( values, fabric.id, 'qty' ); }}
                                            onChange={( e ) => { handleDetailsOnChange( e, fabric.id ); }}
                                        />
                                    </td>
                                    <td>
                                        <NumberFormat
                                            id={`${fabric.name}-${fabric.id}`}
                                            isNumericString={true}
                                            className="form-control-sm form-control"
                                            value={fabric.rate}
                                            displayType="input"
                                            name="rate"
                                            decimalScale={5}
                                            fixedDecimalScale={fabric.rate > 0}
                                            // isAllowed={numberFormattedIsZero}
                                            onFocus={e => {
                                                e.target.select();
                                            }}
                                            onValueChange={( values ) => { handleValueOnChange( values, fabric.id, 'rate' ); }}
                                        // onChange={( e ) => { handleDetailsOnChange( e, fabric.id ); }}
                                        />
                                    </td>
                                    <td>
                                        {isZeroToFixed( fabric.amount, 5 )}
                                    </td>

                                </tr>

                            ) )}
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <pre> {JSON.stringify( fabricDetails, null, 2 )} </pre>
                </Col>
            </Row>

        </div>
    );
};

export default NumberFormatDecimal;