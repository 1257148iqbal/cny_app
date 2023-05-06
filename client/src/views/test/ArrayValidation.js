
import moment from 'moment';
import { useState } from 'react';
import { Button, Col, Input, Row, Table } from 'reactstrap';

const defaultValues = [{ id: 1, name: '', qty: 0, isActive: false, error: false }];
const ArrayValidation = () => {
    const [state, setState] = useState( defaultValues );

    const handleAddRow = () => {
        setState( [
            ...state, {
                id: state.length + 1,
                name: '',
                qty: 0,
                isActive: false,
                error: false
            }
        ] );
    };


    const handleOnChange = ( e, id ) => {
        const { name, value, type, checked } = e.target;
        console.log( type );

        const updatedData = state.map( s => {
            if ( id === s.id ) {
                s[name] = type === 'number' ? Number( value ) : type === 'checkbox' ? checked : value;
            }
            return s;
        } );
        setState( updatedData );
    };

    const isValidatedArray = () => {
        const errorField = state.map( f => {
            if ( !f.name.trim().length || f.qty === 0 || !f.isActive ) {
                f['error'] = true;
            } else {
                f['error'] = false;
            }
            return f;
        } );
        setState( errorField );
        return errorField.some( e => e.error );
    };

    const handleOnSubmit = () => {
        if ( !isValidatedArray() ) {
            console.log( 'Save' );
        } else {
            window.alert( 'Please Provided a valid data' );
        }

    };

    console.log( ( moment( Date.now() ).format( 'YYYY-MM-DD' ) ) === ( moment( '2022-06-27' ).format( 'YYYY-MM-DD' ) ) );

    return (
        <div className="p-5">
            <Row>
                <Col>
                    <Table size="sm" bordered responsive >
                        <thead>
                            <tr>
                                <th> Id</th>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Is Active</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.map( ( i, index ) => (
                                    <tr key={i.id}>
                                        <td>
                                            {i.id}
                                        </td>
                                        <td>
                                            <Input
                                                invalid={!!( ( i.error && !i.name.trim().length ) )}
                                                name="name"
                                                bsSize="sm"
                                                value={i.name}

                                                onChange={( e ) => { handleOnChange( e, i.id ); }}
                                            />
                                        </td>
                                        <td>
                                            <Input
                                                invalid={!!( ( i.error && i.qty === 0 ) )}
                                                name="qty"
                                                bsSize="sm"
                                                type="number"
                                                value={i.qty}
                                                onChange={( e ) => { handleOnChange( e, i.id ); }}
                                                onFocus={( e ) => e.target.select()}
                                            />
                                        </td>
                                        <td>
                                            <Input
                                                invalid={!!( ( i.error && !i.isActive ) )}
                                                name="isActive"

                                                type="checkbox"
                                                checked={i.isActive}
                                                onChange={( e ) => { handleOnChange( e, i.id ); }}
                                                onFocus={( e ) => e.target.select()}
                                            />

                                        </td>
                                        <td>
                                            <Button onClick={() => { handleAddRow(); }} size="sm">
                                                Add
                                            </Button>
                                        </td>
                                    </tr>
                                ) )
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Button onClick={() => { handleOnSubmit(); }}>
                        Save
                    </Button>
                </Col>
            </Row>

        </div>
    );
};

export default ArrayValidation;