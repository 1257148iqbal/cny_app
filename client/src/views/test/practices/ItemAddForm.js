import '@custom-styles/merchandising/others/custom-table.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Plus } from 'react-feather';
import CreatableSelect from 'react-select/creatable';
import { Button, Card, CardBody, CardHeader, CardText, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, Table } from 'reactstrap';
import CustomModal from '../../../../utility/custom/CustomModal';
import { selectUnit } from '../../../../utility/enums';
import { randomIdGenerator, selectThemeColors } from '../../../../utility/Utils';
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
const selectISegmentValue = [
    { value: 1, label: 'value1' },
    { value: 2, label: 'Value2' },
    { value: 3, label: 'Value3' }
];
const ItemAddForm = () => {
    const [itemCategory, setItemCategory] = useState( null );
    const [itemSubCategory, setItemSubCategory] = useState( null );
    const [segment, setSegment] = useState( selectItemSegment );
    const [segmentValue, setSegmentValue] = useState( null );
    const [segmentValueDescription, setSegmentValueDescription] = useState();
    const [description, setDescription] = useState();
    const [open, setOpen] = useState( false );
    const handleItemCategoryChange = ( data ) => {
        setItemCategory( data );
    };

    const handleItemSubCategoryChange = ( data ) => {
        setItemSubCategory( data );
        if ( data ) {
            const createSegmentArray = segment.map( i => ( {
                fieldId: randomIdGenerator(),
                segment: i,
                segmentValue: null
            } ) );
            setSegmentValueDescription( createSegmentArray );
        } else {
            setDescription();
            setSegmentValueDescription( [] );
            setOpen( false );
        }
    };
    const handleSegmentChange = ( fieldId, data ) => {
        const updatedData = segmentValueDescription.map( i => {
            if ( fieldId === i.fieldId ) {
                i.segment = data;
            }
            return i;
        } );
        setSegmentValueDescription( updatedData );
    };
    const handleSegmentValueChange = ( fieldId, data ) => {
        const updatedData = segmentValueDescription.map( i => {
            if ( fieldId === i.fieldId ) {
                i.segmentValue = data;
            }
            return i;
        } );
        setSegmentValueDescription( updatedData );
        const createDescriptionWithValue = updatedData?.map( i => ` ${i.segmentValue?.label ? i.segmentValue?.label : ''}` ).join( '' );
        setDescription( createDescriptionWithValue );

    };

    const handleDescriptionGenerator = ( params ) => {
        console.log( 'SKJF' );
        setOpen( true );
    };

    const [openModal, setOpenModal] = useState( false );

    const handleModalOpen = () => {
        setOpenModal( !openModal );
    };
    const handleMainModalToggleClose = () => {
        setOpenModal( !openModal );
    };
    const handleModalSubmit = () => {
        setOpenModal( !openModal );
        setOpen( prevState => !prevState );

    };
    const handleSubmit = ( params ) => {

    };


    return (
        <div>
            <Card>
                <CardHeader>
                    <CardText tag='h4'>New Item</CardText>
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
                                menuPosition='fixed'
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
                                menuPosition='fixed'
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
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Label className="font-weight-bolder">Name </Label>
                            <Input />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Label className="font-weight-bolder">SKU</Label>
                            <Input />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Label className="font-weight-bolder">UOM</Label>
                            <CreatableSelect
                                id='itemGroupId'
                                name="itemGroup"
                                placeholder="Select Item Group"
                                isSearchable
                                menuPosition='fixed'
                                isClearable
                                theme={selectThemeColors}
                                options={selectUnit}
                                classNamePrefix='select'
                                className={classNames( 'react-select' )}
                                value={itemCategory}
                                onChange={data => {
                                    handleItemCategoryChange( data );
                                }}
                            />
                        </Col>

                    </Row>

                    <CustomModal
                        modalTypeClass='vertically-centered-modal'
                        className='modal-dialog-centered modal-md'
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        handleMainModalToggleClose={handleMainModalToggleClose}
                        handleMainModelSubmit={handleModalSubmit}
                        title="Item Description"
                    >
                        <Row className=' mt-1'>
                            <Col className='item-segment-custom-table' xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Table className="text-center">
                                    <thead>
                                        <tr>
                                            <th>Segment</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {segmentValueDescription?.map( i => (
                                            <tr key={i.fieldId}>
                                                <td>
                                                    <CreatableSelect
                                                        id={`segment${i.fieldId}`}
                                                        name="segment"
                                                        placeholder="Select Item Segment"
                                                        isSearchable
                                                        menuPosition={'fixed'}
                                                        isClearable
                                                        theme={selectThemeColors}
                                                        options={selectItemSegment}
                                                        classNamePrefix='select'
                                                        className={classNames( 'react-select' )}
                                                        value={i.segment}
                                                        onChange={data => {
                                                            handleSegmentChange( i.fieldId, data );
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    <CreatableSelect
                                                        id={`segmentValueId${i.fieldId}`}
                                                        name="segmentValue"
                                                        placeholder="Select Value"
                                                        isSearchable
                                                        menuPosition={'fixed'}
                                                        isClearable
                                                        theme={selectThemeColors}
                                                        options={selectISegmentValue}
                                                        classNamePrefix='select'
                                                        className={classNames( 'react-select' )}
                                                        value={i.segmentValue}
                                                        onChange={data => {
                                                            handleSegmentValueChange( i.fieldId, data );
                                                        }}
                                                    />
                                                </td>

                                            </tr>
                                        ) )}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </CustomModal>

                    <Row>
                        <Col className="mt-1" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Label className="font-weight-bolder">Description </Label>
                            <InputGroup>
                                <Input name="description" type="text" value={description} readOnly onChange={( e ) => { e.preventDefault(); }} />
                                <InputGroupAddon style={{ zIndex: 0 }} addonType='append'>
                                    <Button.Ripple tag={InputGroupText} onClick={() => { handleModalOpen(); }} className='btn-icon' color='primary'>
                                        <Plus size={16} />
                                    </Button.Ripple>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row >
                        <Col className="d-flex " xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Button.Ripple
                                id="submitBtnId"
                                className='btn-icon ml-auto mt-1'
                                size="sm"
                                color="primary"
                                onClick={() => { handleSubmit(); }}

                            >
                                Save
                            </Button.Ripple>
                        </Col>
                    </Row>
                </CardBody>
            </Card>


        </div >
    );
};

export default ItemAddForm;
