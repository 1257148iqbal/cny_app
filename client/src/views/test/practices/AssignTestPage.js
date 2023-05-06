import Sidebar from '@components/sidebar';
import { isObjEmpty } from '@utils';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { selectThemeColors } from '../../../../utility/Utils';
import { getDropDownBuyerAgents } from '../../buyer-agent/store/actions';
import { getDropDownDepartments } from '../../style-master/style-department/store/actions';
import { addBuyerSpecificAgent, handleAssignAgent } from '../store/actions';


const AssignAgentForm = ( { open, data } ) => {

    // ** Store Vars
    const dispatch = useDispatch();
    const { dropDownBuyerAgents } = useSelector( ( { buyerAgents } ) => buyerAgents );
    console.log( dropDownBuyerAgents );
    const [exitingAgent, setExitingAgent] = useState( data?.buyerAgents );
    console.log( exitingAgent );

    const [buyerAgent, setBuyerAgent] = useState( data?.buyerAgents );

    //#Hook
    useEffect( () => {
        dispatch( getDropDownDepartments() );
        dispatch( getDropDownBuyerAgents() );
    }, [] );

    const { register, errors, handleSubmit } = useForm();

    const handleCancel = () => {
        dispatch( handleAssignAgent( null ) );
    };

    const onSubmit = () => {
        const buyerAgentMuted = buyerAgent.map( i => i.value );
        if ( isObjEmpty( errors ) ) {
            dispatch(
                addBuyerSpecificAgent( {
                    id: data.buyerId,
                    agentIds: buyerAgentMuted
                } )
            );
            handleCancel();
        }
    };

    const comparerForDelete = ( inputValue ) => {
        return function ( exitingAgents ) {
            return inputValue.filter( function ( other ) {
                return other.value === exitingAgents.value;
            } ).length === 0;
        };
    };
    const handleAssignAgentDropDown = ( inputValue ) => {
        const updateAgents = [...exitingAgent];
        setBuyerAgent( inputValue );
        const findLastDeletedAgent = updateAgents?.find( comparerForDelete( inputValue ) );
        if ( findLastDeletedAgent !== undefined ) {
            console.log( findLastDeletedAgent.value.sl );
        }
    };


    return (
        <Sidebar
            size='lg'
            open={open}
            title='Assign Buyer Agent'
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={handleCancel}
        >
            <Form onSubmit={handleSubmit( onSubmit )} autoComplete="off">
                <FormGroup>
                    <Label for='name'>
                        Name <span className='text-danger'>*</span>
                    </Label>
                    <Input
                        name='name'
                        id='name'
                        disabled
                        placeholder='John Doe'
                        defaultValue={data.buyerName}
                    />
                    {errors && errors.name && <FormFeedback>Name is required!</FormFeedback>}

                </FormGroup>

                <FormGroup>
                    <Label className="text-dark font-weight-bold" for='agentIds'> Select Agent </Label>
                    <CreatableSelect
                        id='agentIds'
                        isMulti
                        isSearchable
                        isClearable
                        theme={selectThemeColors}
                        options={dropDownBuyerAgents}
                        classNamePrefix='select'
                        innerRef={register( { required: true } )}
                        value={buyerAgent}
                        onChange={data => {
                            handleAssignAgentDropDown( data );
                        }}
                    />
                    {errors && errors.agentIds && <FormFeedback>Buyer Agent is required!</FormFeedback>}
                </FormGroup>
                <Button type='submit' className='mr-1' color='primary'>
                    Submit
                </Button>
                <Button type='reset' color='danger' outline onClick={() => { handleCancel(); }}>
                    Cancel
                </Button>
            </Form>
        </Sidebar>
    );
};

export default AssignAgentForm;
