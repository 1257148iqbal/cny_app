import '@custom-styles/merchandising/others/custom-table.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { Card, CardBody, CardHeader, CardTitle, Col, Label, Row } from 'reactstrap';
import { selectThemeColors } from '../../../utility/Utils';
const selectItemCategory = [
    { value: 1, label: 'Category-1' },
    { value: 2, label: 'Category-2' },
    { value: 3, label: 'Category-3' }
];
const selectItemSubCategory = [
    { value: 1, label: 'Sub-Category-1' },
    { value: 2, label: 'Sub-Category-2' },
    { value: 3, label: 'Sub-Category-3' }
];
const selectItemSegment = [
    { value: 1, label: 'Reference' },
    { value: 2, label: 'Composition' },
    { value: 3, label: 'Construction' }
];
const createOption = ( label ) => ( {
    label,
    value: label
} );
const MultipleInputValue = () => {
    const [itemCategory, setItemCategory] = useState( null );
    const [segment, setSegment] = useState( null );

    const handleItemCategoryChange = ( data ) => {
        setItemCategory( data );
    };

    const handleSegmentChange = ( data ) => {
        setSegment( data );
    };
    const [state, setState] = useState( {
        inputValue: '',
        value: []
    } );
    const handleKeyDown = ( event ) => {
        const { inputValue, value } = state;
        if ( !inputValue ) return;
        switch ( event.key ) {
            case 'Enter':
            case 'Tab':
                console.group( 'Value Added' );
                console.log( value );
                console.groupEnd();
                setState( {
                    inputValue: '',
                    value: [...value, createOption( inputValue )]
                } );
                event.preventDefault();
        }
    };
    const handleInputChange = ( e ) => {
        console.log( e );
        setState( {
            ...state,
            inputValue: e
        } );
    };
    const handleValueChange = ( value ) => {
        setState( {
            ...state,
            value
        } );
    };
    console.log( JSON.stringify( state, null, 2 ) );
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle tag='h4'>Assign Item Segment Value</CardTitle>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Label className="font-weight-bolder">Item Group </Label>
                            <CreatableSelect
                                id='itemGroupId'

                                name="itemGroup"
                                placeholder="Select Item Group"
                                isSearchable
                                menuPosition={'fixed'}
                                isClearable
                                theme={selectThemeColors}
                                options={selectItemCategory}
                                classNamePrefix='select'
                                className={classNames( 'react-select' )}
                                value={itemCategory}
                                onChange={data => {
                                    handleItemCategoryChange( data );
                                }}
                            />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Label className="font-weight-bolder">Item Segment</Label>
                            <CreatableSelect
                                id='segmentId'
                                name="segment"
                                placeholder="Select Item Segment"
                                isSearchable
                                menuPosition={'fixed'}
                                isClearable
                                theme={selectThemeColors}
                                options={selectItemSegment}
                                classNamePrefix='select'
                                className={classNames( 'react-select' )}
                                value={segment}
                                onChange={data => {
                                    handleSegmentChange( data );
                                }}
                            />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Label className="font-weight-bolder">Item value</Label>
                            <CreatableSelect
                                components={{ DropdownIndicator: null }}
                                inputValue={state.inputValue}
                                isClearable
                                isMulti
                                menuIsOpen={false}
                                onChange={handleValueChange}
                                onInputChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Type something and press enter..."
                                value={state.value}
                            />
                        </Col>
                    </Row>
                </CardBody>
            </Card>

        </div>
    );
};

export default MultipleInputValue;
