import React, { useState } from 'react';
import { Input } from 'reactstrap';

const PointDecimal = () => {
    const [state, setState] = useState( [
        {
            id: 1,
            name: 'Value 1',
            value: 0,
            percentage: 0,
            quantity: 0
        },
        {
            id: 2,
            name: 'Value 2',
            value: 0,
            percentage: 0,
            quantity: 0
        }
    ] );

    const handleValueChange = ( e, id ) => {
        const { name, value, type } = e.target;
        const updatedValue = state.map( s => {
            if ( id === s.id ) {
                s[name] = type === "number" ? Number( value ) : value;
                s["quantity"] = name === "percentage" ? Number( value ) * Number( s.value ) : name === "value" ? Number( value ) * Number( s.quantity ) : s.quantity;
            }
            return s;
        } );
        setState( updatedValue );
    };


    return (
        <div>
            <table className="table-bordered table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Value</th>
                        <th>%</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map( s => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>
                                <Input
                                    bsSize="sm"
                                    name="value"
                                    type="number"
                                    value={Number( s.value.toFixed( 5 ) )}
                                    onChange={( e ) => { handleValueChange( e, s.id ); }}
                                    onFocus={( e ) => { e.target.select(); }}
                                />
                            </td>
                            <td>
                                <Input
                                    bsSize="sm"
                                    name="percentage"
                                    type="number"
                                    value={Number( s.percentage.toFixed( 5 ) )}
                                    onChange={( e ) => { handleValueChange( e, s.id ); }}
                                    onFocus={( e ) => { e.target.select(); }}
                                />
                            </td>
                            <td>
                                <Input
                                    disabled
                                    bsSize="sm"
                                    name="quantity"
                                    type="number"
                                    value={Number( s.quantity.toFixed( 5 ) )}
                                    onChange={( e ) => { handleValueChange( e, s.id ); }}
                                    onFocus={( e ) => { e.target.select(); }}
                                />
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>

            <pre>{JSON.stringify( state, null, 2 )}</pre>

        </div>
    );
};

export default PointDecimal;
