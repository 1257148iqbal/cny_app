import React, { useState } from 'react';
import { Button, Card, CardBody, CardText, Col, FormGroup, Input, Label, ModalFooter, Row } from 'reactstrap';
import CustomModal from '../../../utility/custom/CustomModal';


const CmCalculation = () => {
    const [openModal, setOpenModal] = useState( false );
    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open CM
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-lg' openModal={openModal} setOpenModal={setOpenModal} title="CM Calculation:" >
                <Card outline >
                    <CardBody>
                        <CardText>

                        </CardText>
                        <Row>
                            <Col sm='6'>
                                <FormGroup row>
                                    <Label sm='4' size='sm' for='smv'>
                                        SMV:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='smv' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label sm='4' size='sm' for='efficiency'>
                                        Efficiency:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='efficiency' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm='4' size='sm' for='smv'>
                                        Per. Min. Cost:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='smv' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm='4' size='sm' for='pcs'>
                                        Pcs:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='pcs' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm='4' size='sm' for='cm'>
                                        CM:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='cm' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                            </Col>

                            <Col sm='6'>

                                <FormGroup row>
                                    <Label sm='4' size='sm' for='noFmc'>
                                        No of Mc:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='noFmc' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm='4' size='sm' for='productivity'>
                                        Productivity:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='productivity' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm='4' size='sm' for='minCost'>
                                        Per. Min. Cost:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='minCost' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm='4' size='sm' for='pcs'>
                                        Pcs:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='pcs' bsSize='sm' placeholder='0.000' />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm='4' size='sm' for='cm'>
                                        CM:
                                    </Label>
                                    <Col sm='8'>
                                        <Input type='number' id='cm' bsSize='sm' placeholder='0.000' />
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

export default CmCalculation;

