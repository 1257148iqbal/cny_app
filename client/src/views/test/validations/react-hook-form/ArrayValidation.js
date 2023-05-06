import { yupResolver } from '@hookform/resolvers/yup';
import classnames from 'classnames';
import React, { useState } from 'react';
import { MinusSquare, PlusSquare } from 'react-feather';
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import { Card, CardBody, Col, Form, FormFeedback, FormGroup, Label, Row } from 'reactstrap';
import * as yup from 'yup';
import { randomIdGenerator, selectThemeColors } from '../../../../utility/Utils';
const sizeGroups = [
    {
        value: 1,
        label: "X-XL"
    },
    {
        value: 2,
        label: "M-XL"
    },
    {
        value: 3,
        label: "S-M"
    }
];
const colors = [
    {
        value: 1,
        label: "Blue"
    },
    {
        value: 2,
        label: "Red"
    },
    {
        value: 3,
        label: "Black"
    }
];
const ArrayValidation = () => {
    const [sizeGroup, setSizeGroup] = useState( null );
    const [arrayData, setArrayData] = useState( [
        {
            id: randomIdGenerator(),
            sizeGroup: null,
            color: null
        }
    ] );


    // => ValidationError: must be a string

    const SignupSchema = yup.object().shape( {
        // email: yup.string().email().required(),
        // lastName: yup.string().min( 3 ).required(),
        firstName: yup.string().min( 3 ).required(),
        sizeGroup: sizeGroup ? yup.string() : yup.string().required( 'Hello' )
        // password: yup.string().min( 6 ).required()
    } );
    const { register, errors, handleSubmit } = useForm( { mode: 'onChange', resolver: yupResolver( SignupSchema ) } );

    const handleDataChange = ( data, id, e ) => {
        const { name } = e;
        console.log( e );
        const updatedData = arrayData.map( a => {
            if ( a.id === id ) {
                a[name] = data;
            }
            return a;
        } );
        setArrayData( updatedData );
    };


    const schema = yup.object( {
        friends: yup.array()
            .of(
                yup.object( {
                    name: yup.string().required( 'Required' )
                } )
            )
            .min( 1, 'You need at least one friend' )
    } );

    const rootValue = {
        foo: [{ bar: 1 }, { bar: 1, loose: true }]
    };
    const addNewRow = () => {
        const valid = schema;
        console.log( schema );
        const newObj = {
            id: randomIdGenerator(),
            sizeGroup: null,
            color: null
        };
        setArrayData( [...arrayData, newObj] );
    };
    const removeRow = ( id ) => {
        const updatedData = arrayData.filter( a => a.id !== id );
        setArrayData( updatedData );
    };


    return (
        <div>
            <Card>
                <CardBody>
                    <Form>
                        {
                            arrayData.map( a => (
                                <Row key={a.id}>
                                    <FormGroup tag={Col}>
                                        <Label for='sizeGroupId'>Size Group</Label>
                                        <CreatableSelect
                                            id='sizeGroupId'
                                            menuPlacement="auto"
                                            isClearable
                                            name="sizeGroup"
                                            isSearchable
                                            menuPosition="fixed"
                                            theme={selectThemeColors}
                                            options={sizeGroups}
                                            classNamePrefix='select'
                                            invalid={true}
                                            innerRef={register( { required: true } )}
                                            className={classnames( `react-select ${( errors && errors.sizeGroup && !sizeGroup ) && 'is-invalid'}` )}
                                            value={a.sizeGroup}
                                            onChange={( data, e ) => {
                                                handleDataChange( data, a.id, e );
                                            }}
                                        />
                                        {( errors && errors.sizeGroup && !sizeGroup ) && <FormFeedback>{errors.sizeGroup.message}</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col}>
                                        <Label for='colorId'>Color</Label>
                                        <CreatableSelect
                                            id='sizeGroupId'
                                            menuPlacement="auto"
                                            isClearable
                                            name="color"
                                            isSearchable
                                            menuPosition="fixed"
                                            theme={selectThemeColors}
                                            options={colors}
                                            classNamePrefix='select'
                                            invalid={true}
                                            innerRef={register( { required: true } )}
                                            className={classnames( `react-select ${( errors && errors.color && !sizeGroup ) && 'is-invalid'}` )}
                                            value={a.color}
                                            onChange={( data, e ) => {
                                                handleDataChange( data, a.id, e );
                                            }}
                                        />
                                        {( errors && errors.sizeGroup && !sizeGroup ) && <FormFeedback>{errors.sizeGroup.message}</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} sm={2} className="d-flex justify-content-center align-items-center mt-1">
                                        <MinusSquare onClick={() => { removeRow( a.id ); }} />
                                    </FormGroup>
                                </Row>
                            ) )
                        }

                        <Row>
                            <FormGroup tag={Col}>
                                <PlusSquare onClick={() => { addNewRow(); }} />
                            </FormGroup>

                        </Row>
                    </Form>

                </CardBody>
            </Card>

        </div>
    );
};

export default ArrayValidation;
