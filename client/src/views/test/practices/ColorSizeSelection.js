import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, CustomInput, FormGroup, ModalFooter, Row } from 'reactstrap';
import CustomModal from '../../../utility/custom/CustomModal';


const ColorSizeSelection = () => {
    const [openModal, setOpenModal] = useState( false );

    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open Color Size Selection
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-lg' openModal={openModal} setOpenModal={setOpenModal} name="" >
                <Card outline >
                    <CardBody style={{ minHeight: '300px' }}>
                        <CardTitle >Color Size </CardTitle>
                        <Row>
                            <Col sm='6'>
                                <FormGroup row className="text-nowrap" >
                                    <Col sm='8'>
                                        <FormGroup check>
                                            <CustomInput
                                                type='checkbox'
                                                className='custom-control-Primary'
                                                id='color'
                                                label='Select All Color'
                                                inline
                                            />
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                            </Col>

                            <Col sm='6'>
                                <FormGroup row className="text-nowrap" >
                                    <Col sm='8'>
                                        <FormGroup check >
                                            <CustomInput

                                                type='checkbox'
                                                className='custom-control-Primary'
                                                id='size'
                                                label='Select All Size'
                                                inline
                                            />
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>

                            <Col sm='6'  >
                                <Card >
                                    <CardBody className="p-1" style={{ minHeight: '300px' }}>
                                        <CardHeader className="p-0 mb-1" tag="h4" s >
                                            Style Color
                                        </CardHeader>

                                        <FormGroup >
                                            <FormGroup row >
                                                <Col sm='8' >
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='black'
                                                        label='Black'
                                                        defaultChecked
                                                        inline
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row >
                                                <Col sm='8'>
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='heatherGrey'
                                                        label='Heather Grey'
                                                        inline
                                                    />
                                                </Col>
                                            </FormGroup>
                                        </FormGroup>
                                    </CardBody>
                                </Card>

                            </Col>

                            <Col sm='6' >
                                <Card  >
                                    <CardBody className="p-1" style={{ minHeight: '300px' }}>
                                        <CardHeader className="p-0 mb-1" tag="h4" >
                                            Sizes
                                        </CardHeader>
                                        <FormGroup>

                                            <FormGroup row >
                                                <Col sm='8'>
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-34'
                                                        defaultChecked
                                                        label='Size-34'
                                                        inline
                                                    />

                                                </Col>
                                            </FormGroup>
                                            <FormGroup row >
                                                <Col sm='8'>
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-36'
                                                        label='Size-36'
                                                        inline
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row >
                                                <Col sm='8'>
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-38'
                                                        label='Size-38'
                                                        inline
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row >
                                                <Col sm='8'>
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-40'
                                                        defaultChecked
                                                        label='Size-40'
                                                        inline
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row >
                                                <Col sm='8'>
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-42'
                                                        label='Size-42'
                                                        inline
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row >
                                                <Col sm='8'>
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='size-44'
                                                        label='Size-44'
                                                        inline
                                                    />
                                                </Col>
                                            </FormGroup>
                                        </FormGroup>
                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>
                    </CardBody>
                </Card>


                <ModalFooter  >
                    <Button color='primary' onClick={() => setOpenModal( !openModal )}>
                        Submit
                    </Button>
                </ModalFooter>
            </CustomModal>
        </div >
    );
};

export default ColorSizeSelection;

