import React, { Fragment, useState } from 'react';
import { Check, X } from 'react-feather';
import { Button, Card, CardBody, Col, CustomInput, FormGroup, Input, Label, ModalFooter, Row } from 'reactstrap';
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

const ColorSize = () => {
    const [openModal, setOpenModal] = useState( false );
    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open Color Size
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-lg' openModal={openModal} setOpenModal={setOpenModal} title="Color Size Combination" >
                <Card outline >
                    <CardBody>
                        <Row>
                            <Col sm='3'>

                                <FormGroup row className="text-nowrap">
                                    <Col sm='8'>
                                        <FormGroup >
                                            <CustomInput type='switch' label={<Label2 />} id='color-specific' name='icon-primary' inline defaultChecked >Color Specific</CustomInput>

                                        </FormGroup>

                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col sm='3'>
                                <FormGroup row className="text-nowrap">
                                    <Col sm='8'>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                bsSize="sm"
                                            >
                                                <option>Select Color</option>
                                                <option>Green</option>
                                                <option>Yellow</option>
                                            </Input>
                                        </FormGroup>

                                    </Col>
                                </FormGroup>

                            </Col>
                            <Col sm='3'>
                                <FormGroup row className="text-nowrap">
                                    <Col sm='8'>
                                        <FormGroup >
                                            <CustomInput type='switch' label={<Label2 />} id='size-specific' name='icon-primary' inline defaultChecked >Size Specific</CustomInput>

                                        </FormGroup>

                                    </Col>
                                </FormGroup>
                            </Col>

                            <Col sm='3'>
                                <FormGroup row className="text-nowrap">
                                    <Col sm='8'>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                bsSize="sm"
                                            >
                                                <option>Select Size Group</option>
                                                <option>XL</option>
                                                <option>4XL</option>
                                            </Input>
                                        </FormGroup>

                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>


                        <Row>
                            <Col sm='3'>
                                <Label className='text-center' size='sm' for='noFmc'>
                                    Style No
                                </Label>
                                <FormGroup row>

                                    <Col sm='8'>
                                        <span className="text-nowrap" >4369SMS32-A</span>
                                        {/* <Input type='text' id='smv' bsSize='sm' value='4369SMS32-A' readOnly /> */}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>

                                    <Col sm='8'>
                                        <span className="text-nowrap" >4369SMS32-B</span>
                                        {/* <Input type='number' id='efficiency' bsSize='sm' placeholder='0.000' /> */}
                                    </Col>
                                </FormGroup>

                                <FormGroup row>

                                    <Col sm='8'>
                                        <span className="text-nowrap" >4369SMS32-C</span>
                                        {/* <Input type='number' id='smv' bsSize='sm' placeholder='0.000' /> */}
                                    </Col>
                                </FormGroup>


                            </Col>

                            <Col sm='3'>

                                <Label className='text-center' size='sm' for='noFmc'>
                                    Color
                                </Label>
                                <FormGroup row className="text-nowrap">
                                    <Col sm='8'>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                bsSize="sm"
                                            >
                                                <option>Select Size</option>
                                                <option>XL</option>
                                                <option>4XL</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                bsSize="sm"
                                            >
                                                <option>Select Size</option>
                                                <option>XL</option>
                                                <option>4XL</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                bsSize="sm"
                                            >
                                                <option>Select Size</option>
                                                <option>XL</option>
                                                <option>4XL</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                            </Col>
                            <Col sm='3'>
                                <Label className='text-center' size='sm' for='noFmc'>
                                    Size
                                </Label>
                                <FormGroup row className="text-nowrap">
                                    <Col sm='8'>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                bsSize="sm"
                                            >
                                                <option>Select Size</option>
                                                <option>XL</option>
                                                <option>4XL</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                bsSize="sm"
                                            >
                                                <option>Select Size</option>
                                                <option>XL</option>
                                                <option>4XL</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="select"
                                                bsSize="sm"
                                            >
                                                <option>Select Size</option>
                                                <option>XL</option>
                                                <option>4XL</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                            </Col>

                            <Col sm='3'>
                                <Label className='text-center' size='sm' for='noFmc'>
                                    Quantity
                                </Label>
                                <FormGroup row className="text-nowrap">

                                    <Col sm='8'>
                                        <Input type='number' id='noFmc' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>

                                    <Col sm='8'>
                                        <Input type='number' id='productivity' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>

                                    <Col sm='8'>
                                        <Input type='number' id='minCost' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>


                            </Col>
                        </Row>
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

export default ColorSize;

