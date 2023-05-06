import '@custom-styles/merchandising/others/custom-table.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { PlusSquare, Trash2 } from 'react-feather';
import CreatableSelect from 'react-select/creatable';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, CustomInput, Label, Row, Table } from 'reactstrap';
import { CustomInputLabelForSense } from '../../../utility/custom/CustomInputLabel';
import { randomIdGenerator, selectThemeColors } from '../../../utility/Utils';

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
const ItemSegmentNewForm = () => {
    const [itemCategory, setItemCategory] = useState( null );
    const [itemSubCategory, setItemSubCategory] = useState( null );
    const [segment, setSegment] = useState( null );
    const [assignSegmentValue, setAssignSegmentValue] = useState( [
        {
            fieldId: randomIdGenerator(),
            itemGroupId: 1,
            itemSubGroupId: 1,
            segmentId: 1,
            segment: { value: 1, label: 'Reference' },
            isColorSense: true,
            isSizeSense: false,
            sense: false
        }
    ] );

    const handleSegmentAddRow = () => {
        const newObj = {
            fieldId: randomIdGenerator(),
            itemGroupId: 1,
            itemSubGroupId: 1,
            segmentId: null,
            segment: '',
            isColorSense: false,
            isSizeSense: false,
            sense: false

        };
        setAssignSegmentValue( [...assignSegmentValue, newObj] );

    };


    const handleSegmentRemove = fieldId => {
        const isConfirm = window.confirm( 'Are you sure?' );
        if ( isConfirm ) {
            const updatedData = [...assignSegmentValue];
            updatedData.splice(
                updatedData.findIndex( x => x.fieldId === fieldId ),
                1
            );
            setAssignSegmentValue( updatedData );
        }
    };


    const handleItemCategoryChange = ( data ) => {
        setItemCategory( data );
    };

    const handleItemSubCategoryChange = ( data ) => {
        setItemSubCategory( data );
    };
    const handleSegmentChange = ( fieldId, data ) => {
        const updateData = assignSegmentValue.map( asv => {
            if ( fieldId === asv.fieldId ) {
                asv.segmentId = data?.value;
                asv.segment = data;
            }
            return asv;
        } );
        setAssignSegmentValue( updateData );
    };
    const handleColorSenseChange = ( fieldId, e ) => {
        const { checked } = e.target;
        console.log( checked );
        const updateData = assignSegmentValue.map( asv => {
            if ( fieldId === asv.fieldId ) {
                asv.isColorSense = checked ? checked : asv.isColorSense;
                asv.isSizeSense = checked ? false : asv.isSizeSense;
            }
            if ( fieldId !== asv.fieldId ) {
                asv.isColorSense = false;
            }
            return asv;
        } );
        setAssignSegmentValue( updateData );
    };

    const handleSizeSenseChange = ( fieldId, e ) => {
        const { checked } = e.target;
        const updateData = assignSegmentValue.map( asv => {
            if ( fieldId === asv.fieldId ) {
                asv.isSizeSense = checked ? checked : asv.isSizeSense;
                asv.isColorSense = checked ? false : asv.isColorSense;
            }
            if ( fieldId !== asv.fieldId ) {
                asv.isSizeSense = false;
            }
            return asv;
        } );
        setAssignSegmentValue( updateData );
    };

    const handleSenseChange = ( fieldId, e ) => {
        const { checked } = e.target;
        const updateData = assignSegmentValue.map( asv => {
            if ( fieldId === asv.fieldId ) {
                asv.sense = checked;
                asv.isColorSense = checked ? checked : false;
                asv.isSizeSense = !checked;
            }
            if ( fieldId !== asv.fieldId ) {
                asv.sense = false;
                asv.isColorSense = false;
                // asv.isSizeSense = false;
            }
            return asv;
        } );
        setAssignSegmentValue( updateData );
    };


    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle tag='h4'>Item Segment New Logic</CardTitle>
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
                            <Label className="font-weight-bolder">Item Sub Group </Label>
                            <CreatableSelect
                                id='itemSubGroupId'
                                name="itemSubGroup"
                                placeholder="Select Item Sub Group"
                                isSearchable
                                menuPosition={'fixed'}
                                isClearable
                                theme={selectThemeColors}
                                options={selectItemSubCategory}
                                classNamePrefix='select'
                                className={classNames( 'react-select' )}
                                value={itemSubCategory}
                                onChange={data => {
                                    handleItemSubCategoryChange( data );
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="item-segment-custom-table" xs={12} sm={12} md={12} lg={12} xl={12} >
                            <Table bordered responsive className="text-center">
                                <thead>
                                    <tr>
                                        <th>Segment</th>
                                        <th>Color Sense</th>
                                        <th>Size Sense</th>
                                        <th>Sense</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {assignSegmentValue?.map( ( i, indx ) => (
                                        <tr key={i.fieldId}>
                                            <td>
                                                <CreatableSelect
                                                    id='segmentId'
                                                    name="segment"
                                                    placeholder="Select a Segment"
                                                    isSearchable
                                                    menuPosition={'fixed'}
                                                    isClearable={true}
                                                    theme={selectThemeColors}
                                                    options={selectItemSegment.filter( ii => !assignSegmentValue.some( s => ii.value === s.segmentId ) )}
                                                    classNamePrefix='select'
                                                    className={classNames( 'react-select' )}

                                                    value={i.segment}
                                                    onChange={data => {
                                                        handleSegmentChange( i.fieldId, data );
                                                    }}
                                                />
                                            </td>
                                            <td >
                                                <span className="d-flex justify-content-center">
                                                    <CustomInput
                                                        id={`colorSenseId-${i.fieldId}`}
                                                        name='colorSense'
                                                        type='switch'
                                                        checked={i.isColorSense}
                                                        onChange={e => handleColorSenseChange( i.fieldId, e )}
                                                    />
                                                </span>

                                            </td>
                                            <td>
                                                <span className="d-flex justify-content-center ">
                                                    <CustomInput
                                                        id={`sizeSenseId-${i.fieldId}`}
                                                        name='sizeSense'
                                                        type='switch'
                                                        checked={i.isSizeSense}
                                                        onChange={e => handleSizeSenseChange( i.fieldId, e )}
                                                    />
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-center   align-self-center">
                                                    <span className="mr-1"> Color </span>
                                                    <span >
                                                        {/* <CustomInput
                                                            id={`sizeSenseId-${i.fieldId}`}
                                                            name='sizeSense'
                                                            type='switch'
                                                            checked={i.isSizeSense}
                                                            onChange={e => handleSizeSenseChange( i.fieldId, e )}
                                                        /> */}
                                                        <CustomInput
                                                            type='switch'
                                                            label={< CustomInputLabelForSense />}
                                                            className='custom-control-success'
                                                            id={`icon-success${i.fieldId}`}
                                                            name='icon-success'
                                                            checked={i.sense}
                                                            onChange={( e ) => handleSenseChange( i.fieldId, e )}
                                                        />
                                                    </span>
                                                    <span className="ml-1"> Size  </span>
                                                </div>


                                            </td>
                                            <td style={{ width: "125px" }}>
                                                <span >
                                                    <Button.Ripple id="deleteSegRowId" tag={Label} onClick={() => { handleSegmentRemove( i.fieldId ); }} className='btn-icon' color='flat-danger' >
                                                        <Trash2 size={18} id="deleteSegRowId" color="red" />
                                                    </Button.Ripple>
                                                    <Button.Ripple id="AddSegRowId" tag={Label} disabled={( assignSegmentValue.at( -1 ) !== i )} onClick={() => { handleSegmentAddRow(); }} className='btn-icon' color='flat-success' >
                                                        <PlusSquare size={18} id="AddSegRowId" color="green" />
                                                    </Button.Ripple>
                                                </span>
                                            </td>
                                        </tr>
                                    ) )}

                                </tbody>

                            </Table>

                        </Col>
                    </Row>
                </CardBody>

            </Card>
        </div>
    );
};

export default ItemSegmentNewForm;
