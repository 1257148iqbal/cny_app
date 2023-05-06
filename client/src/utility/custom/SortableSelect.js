import { components } from "react-select";
import Createable from "react-select/creatable";
import { SortableContainer, SortableElement } from "react-sortable-hoc";


function arrayMove( array, from, to ) {
    array = array.slice();
    array.splice( to < 0 ? array.length + to : to, 0, array.splice( from, 1 )[0] );
    return array;
}

const SortableMultiValue = SortableElement( ( props ) => {

    const onMouseDown = ( e ) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const innerProps = { onMouseDown };
    return <components.MultiValue {...props} innerProps={innerProps} />;
} );
const SelectContainer = SortableContainer( Createable );

// const SortableMultiValueLabel = SortableHandle( ( props ) => <components.MultiValueLabel {...props} />
// );
export default function SortableSelect( { onChange, name, value, ...props } ) {

    const onSortEnd = ( { oldIndex, newIndex } ) => {
        const newValue = arrayMove( value, oldIndex, newIndex );
        //    setValue( newValue );
        const e = {
            name
        };
        onChange( newValue, e );

    };

    return (
        <SelectContainer
            // react-sortable-hoc props:
            // useDragHandle
            axis="xy"
            onSortEnd={onSortEnd}
            distance={4}
            // small fix for https://github.com/clauderic/react-sortable-hoc/pull/352:
            getHelperDimensions={( { node } ) => node.getBoundingClientRect()}
            // react-select props:
            isMulti
            name={name}
            value={value}
            components={{
                MultiValue: SortableMultiValue
                // MultiValueLabel: SortableMultiValueLabel

            }}
            onChange={onChange}
            closeMenuOnSelect={false}
            {...props}
        />
    );
}
