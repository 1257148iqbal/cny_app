import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
const createOption = ( label ) => ( {
    label,
    value: label.toLowerCase().replace( /\W/g, '' )
} );
const defaultOptions = [
    {
        label: 'One',
        value: 'one'
    },
    {
        label: 'Two',
        value: 'two'
    },
    {
        label: 'There',
        value: 'there'
    }
];
const InstantCreate = () => {
    const [state, setState] = useState(
        {
            isLoading: false,
            options: defaultOptions,
            value: undefined
        }
    );
    const handleChange = ( newValue ) => {
        setState( { value: newValue } );
    };
    const handleCreate = ( inputValue ) => {
        setState( { isLoading: true } );
        console.group( 'Option created' );
        console.log( 'Wait a moment...' );
        setTimeout( () => {
            const { options } = state;
            const newOption = createOption( inputValue );
            console.log( newOption );
            console.groupEnd();
            setState( {
                isLoading: false,
                options: [...options, newOption],
                value: newOption
            } );
        }, 1000 );
    };

    const { isLoading, options, value } = state;
    return (

        <div>
            <CreatableSelect
                isClearable
                isDisabled={isLoading}
                isLoading={isLoading}
                onChange={handleChange}
                onCreateOption={handleCreate}
                options={state.options}
                value={state.value}
            />
        </div>
    );
};

export default InstantCreate;
