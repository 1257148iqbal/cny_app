import React, { Fragment, useState } from 'react';
import { Check, X } from 'react-feather';
import CreatableSelect from 'react-select/creatable';
import { Button, Card, CardBody, Col, CustomInput, Input, ModalFooter, Row, Table } from 'reactstrap';
import CustomModal from '../../../utility/custom/CustomModal';
import { selectThemeColors } from '../../../utility/Utils';


const Label2 = () => (
    <Fragment>
        <span className='switch-icon-left'>
            <Check size={14} />
        </span>
        <span className='switch-icon-right'>
            <X size={14} />
        </span>
    </Fragment>
);

const selectSizeGroups = [
    { value: 'S-M', label: 'S-M' },
    { value: 'S-X', label: 'S-X' },
    { value: 'S-XXL', label: 'S-XXK' },
    { value: 'M-XLL', label: 'M-XLL' }
];

const selectSize = [
    { value: 'S-M', label: 'S-M' },
    { value: 'S-X', label: 'S-X' },
    { value: 'S-XXL', label: 'S-XXK' },
    { value: 'M-XLL', label: 'M-XLL' }
];
const selectColor = [
    { value: 'red', label: 'Red' },
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' }
];

const selectColorDropdown = [
    { value: 'red', label: 'Red' },
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' }
];

const selectStyleNo = [
    { value: '4369SMS32-1', label: '4369SMS32-1' },
    { value: '4369SMS32-2', label: '4369SMS32-2' },
    { value: '4369SMS32-3', label: '4369SMS32-3' }

];

const ColorSizeModified = () => {
    const [openModal, setOpenModal] = useState( false );
    /// Color Size Spacification
    const [colorSizeSpecification, setColorSizeSpecification] = useState( {
        colorSpecific: false,
        sizeSpecific: false
    } );
    const [sizeGroups, setSizeGroups] = useState( null );
    const [size, setSize] = useState( null );
    const [colors, setColors] = useState( null );
    const [color, setColor] = useState( null );
    const [styleNo, setStyleNo] = useState( null );


    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open Color Size Modified
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-lg' openModal={openModal} setOpenModal={setOpenModal} title={`Color & Size Quantity Definition`} >
                <Card  >
                    <CardBody className="custom-table-color-size ">
                        <Row className="pr-1 text-nowrap pb-1 ">
                            <Col sm={12} md={6} lg={3}>
                                <CustomInput
                                    className="pb-1"
                                    type='switch'
                                    label={<Label2 />}
                                    id='color-specific'
                                    name="colorSpecific"
                                    checked={colorSizeSpecification.colorSpecific}
                                    inline
                                    onChange={( e ) => { setColorSizeSpecification( { ...colorSizeSpecification, colorSpecific: e.target.checked } ); }}
                                >
                                    Color
                                </CustomInput>

                            </Col>
                            <Col sm={12} md={6} lg={3} className="pb-1">
                                <CreatableSelect
                                    id='colorSpecific'
                                    isDisabled={colorSizeSpecification.colorSpecific}
                                    isSearchable
                                    isClearable
                                    theme={selectThemeColors}
                                    options={selectColor}
                                    classNamePrefix='select'
                                    value={colors}
                                    onChange={data => {
                                        setColors( data );
                                    }}
                                />

                            </Col>
                            <Col sm={12} md={6} lg={3} className="pb-1">

                                <CustomInput
                                    type='switch'
                                    label={<Label2 />}
                                    id='size-specific'
                                    inline
                                    name="sizeSpecific"
                                    checked={colorSizeSpecification.sizeSpecific}
                                    onChange={( e ) => { setColorSizeSpecification( { ...colorSizeSpecification, sizeSpecific: e.target.checked } ); }}
                                >
                                    Size Groups
                                </CustomInput>

                            </Col>
                            <Col sm={12} md={6} lg={3}>
                                <CreatableSelect
                                    id='sizeGroupSpecific'
                                    isDisabled={colorSizeSpecification.sizeSpecific}
                                    isSearchable
                                    isClearable
                                    theme={selectThemeColors}
                                    options={selectSizeGroups}
                                    classNamePrefix='select'
                                    value={sizeGroups}
                                    onChange={data => {
                                        setSizeGroups( data );
                                    }}
                                />


                            </Col>
                        </Row>

                        <Table responsive>
                            <thead className="thead-light table-bordered">
                                <tr>
                                    <th className="text-nowrap">Style No</th>
                                    <th className="text-nowrap"> Color</th>
                                    <th className="text-nowrap">Size</th>
                                    <th className="text-nowrap">Quantity</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="text-nowrap">
                                        <CreatableSelect
                                            id='styleNo'
                                            isSearchable
                                            menuPosition="fixed"
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectStyleNo}
                                            classNamePrefix='select'
                                            value={styleNo}
                                            onChange={data => {
                                                setStyleNo( data );
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <CreatableSelect
                                            id='colordropDown'
                                            isDisabled={!colorSizeSpecification?.colorSpecific}
                                            isSearchable
                                            menuPosition="fixed"
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectColorDropdown}
                                            classNamePrefix='select'
                                            value={color}
                                            onChange={data => {
                                                setColor( data );
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <CreatableSelect
                                            id='sizeSpecific'
                                            isDisabled={!colorSizeSpecification?.sizeSpecific}
                                            menuPosition="fixed"
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectSize}
                                            classNamePrefix='select'
                                            value={size}
                                            onChange={data => {
                                                setSize( data );
                                            }}
                                        />


                                    </td>
                                    <td style={{ width: '200px' }}>
                                        <Input className="text-right" type='number' id='noFmc' bsSize='sm' placeholder='0.000' />
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
                <ModalFooter >
                    <Button color='primary' onClick={() => setOpenModal( !openModal )}>
                        Submit
                    </Button>
                </ModalFooter>
            </CustomModal>
        </div>
    );
};

export default ColorSizeModified;

