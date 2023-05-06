/* eslint-disable no-unused-expressions */
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';

const CustomValidation = () => {
    const [state, setState] = useState( {
        email: '',
        lastName: '',
        firstName: '',
        password: ''
    } );

    const validated = () => {
        const SignupSchema = yup.object().shape( {
            email: yup.string().email().required(),
            lastName: yup.string().min( 3 ).required(),
            firstName: yup.string().min( 3 ).required(),
            password: yup.string().min( 6 ).required()
        } );
        SignupSchema
            .isValid( state )
            .then( function ( valid ) {
                console.log( valid );
            } );

        SignupSchema.validate( state ).catch( function ( err ) {
            err.name;
            console.log( err.errors );
            err.errors;
        } );
        const helo = SignupSchema.cast( state );
        yup.ValidationError( se => {
            console.log( se );
        } );
        console.log( helo );
    };


    // const { register, errors, handleSubmit } = useForm( { mode: 'onChange', resolver: yupResolver( SignupSchema ) } );

    const handleInputOnChange = ( e ) => {
        const { type, name, value, checked } = e.target;
        setState( {
            ...state,
            [name]: value
        } );
    };


    const onSubmit = () => {
        validated();
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>Validation Schema With OnChange</CardTitle>
            </CardHeader>
            <CardBody>
                <Form >
                    <FormGroup>
                        <Label for='firstName'>First Name</Label>
                        <Input
                            id='firstName'
                            name='firstName'
                            placeholder='Bruce'
                            onChange={( e ) => { handleInputOnChange( e ); }}

                        />
                        {/* {errors && errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>} */}
                    </FormGroup>
                    <FormGroup>
                        <Label for='lastName'>Last Name</Label>
                        <Input
                            id='lastName'
                            name='lastName'
                            placeholder='Wayne'
                            onChange={( e ) => { handleInputOnChange( e ); }}

                        />
                        {/* {errors && errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>} */}
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='bruce.wayne@email.com'
                            onChange={( e ) => { handleInputOnChange( e ); }}

                        />
                        {/* {errors && errors.email && <FormFeedback>{errors.email.message}</FormFeedback>} */}
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='password'
                            onChange={( e ) => { handleInputOnChange( e ); }}

                        />
                        {/* {errors && errors.password && <FormFeedback>{errors.password.message}</FormFeedback>} */}
                    </FormGroup>
                    <FormGroup className='d-flex mb-0'>
                        <Button.Ripple className='mr-1' color='primary' onClick={() => { onSubmit(); }}>
                            Submit
                        </Button.Ripple>
                        <Button.Ripple outline color='secondary' type='reset'>
                            Reset
                        </Button.Ripple>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    );
};

export default CustomValidation;
