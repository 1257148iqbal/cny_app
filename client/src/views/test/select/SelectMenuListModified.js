
import classNames from 'classnames';
import { useState } from 'react';
import Select, { components } from 'react-select';
import { selectThemeColors } from '../../../utility/Utils';
const optionData = [
    {
        value: 1,
        label: 'Option 01',
        extra: 'extra Label 01'
    },
    {
        value: 2,
        label: 'Option 02',
        extra: 'extra Label 02'
    },
    {
        value: 3,
        label: 'Option 03',
        extra: 'extra Label 03'
    }
];
const CustomOption = props => {
    console.log( 'Am Props', props );
    const { children, data } = props;
    return (
        < components.Option {...props} >
            {`${children} ( ${data.extra})`}
        </ components.Option>
    );
};
const SelectMenuListModified = () => {
    const [state, setState] = useState( [] );

    const handleBasicInfoDropdownChange = ( data ) => {
        setState( data );
    };

    return (
        <div>
            <Select
                id='budgetId'
                isMulti
                name="budget"
                isSearchable
                placeholder="Select Budget"
                menuPosition="fixed"
                menuPlacement="auto"
                isClearable
                theme={selectThemeColors}
                // formatOptionLabel={formatOptionLabel}
                components={{
                    Option: CustomOption
                }}

                options={optionData}
                classNamePrefix='dropdown'
                className={classNames( 'erp-dropdown-select' )}
                value={state}
                // onFocus={() => { handleBudgetDropdownOnFocus(); }}
                onChange={( data, e ) => {
                    handleBasicInfoDropdownChange( data, e );
                }}
            />
        </div>
    );
};

export default SelectMenuListModified;