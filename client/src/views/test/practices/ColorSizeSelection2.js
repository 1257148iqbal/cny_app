import '@custom-styles/merchandising/others/custom-table.scss';
import React, { Fragment, useState } from 'react';
import { Check, X } from 'react-feather';
import { Button, Card, CardBody, Col, CustomInput, FormGroup, ModalFooter, Row, Table } from 'reactstrap';
import CustomModal from '../../../utility/custom/CustomModal';

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

const ColorSizeSelection2 = () => {
    const [openModal, setOpenModal] = useState( false );
    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open Color Size Selection With Table

            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-md' openModal={openModal} setOpenModal={setOpenModal} title="Color Size" >
                <Card >
                    <CardBody className="custom-table-color-selection p-1">
                        {/* <CardTitle tag="h4" style={{ color: '#7367f0' }}>Color Size</CardTitle> */}
                        <Row >
                            <Col lg={6} md={6} xs={6} sm={6} >
                                <FormGroup row className="text-nowrap pl-1">
                                    <Col >
                                        <FormGroup >
                                            <CustomInput type='switch' label={<Label2 />} id='icon-primary' name='icon-primary' inline defaultChecked >All Color</CustomInput>

                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                            </Col>

                            <Col lg={6} md={6} xs={6} sm={6}>
                                <FormGroup row className="text-nowrap pl-3 ">
                                    <Col>
                                        <FormGroup >
                                            <CustomInput type='switch' label={<Label2 />} id='icon-primary2' name='icon-primary' inline defaultChecked >All Size</CustomInput>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Table responsive size="sm" bordered  >
                            <tr className="thead-light"  >
                                <th className="text-nowrap">Style Color</th>
                                <th className="text-nowrap pl-2">Style Size</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td className="align-top ">
                                        <div className="overflow-div">
                                            <FormGroup >
                                                <FormGroup  >
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='black'
                                                        label='Black'
                                                        defaultChecked
                                                        inline
                                                    />
                                                </FormGroup>
                                                <FormGroup  >
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='heatherGrey'
                                                        label='Heather Grey'
                                                        inline
                                                    />
                                                </FormGroup>
                                            </FormGroup>
                                        </div>
                                    </td>
                                    <td className="align-top">
                                        <div className="overflow-div">
                                            <FormGroup >
                                                <FormGroup  >
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-34'
                                                        defaultChecked
                                                        label='Size-34'
                                                        inline
                                                    />

                                                </FormGroup>
                                                <FormGroup  >
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-36'
                                                        label='Size-36'
                                                        inline
                                                    />
                                                </FormGroup>
                                                <FormGroup  >
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-38'
                                                        label='Size-38'
                                                        inline
                                                    />
                                                </FormGroup>
                                                <FormGroup  >
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-40'
                                                        defaultChecked
                                                        label='Size-40'
                                                        inline
                                                    />
                                                </FormGroup>
                                                <FormGroup  >
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-42'
                                                        label='Size-42'
                                                        inline
                                                    />
                                                </FormGroup>
                                                <FormGroup  >
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-44'
                                                        label='Size-44'
                                                        inline
                                                    />
                                                </FormGroup>

                                            </FormGroup>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

                <ModalFooter className="pt-1">
                    <Button size="sm" color='primary' onClick={() => setOpenModal( !openModal )}>
                        OK
                    </Button>
                </ModalFooter>
            </CustomModal>

        </div>
    );
};

export default ColorSizeSelection2;

