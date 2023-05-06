import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Col, CustomInput, FormGroup, Input, ModalFooter, Row, Table } from 'reactstrap';
import CustomModal from '../../../utility/custom/CustomModal';


const ColorSizeWithTable = () => {
    const [openModal, setOpenModal] = useState( false );
    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open CM
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-lg' openModal={openModal} setOpenModal={setOpenModal} title="" >
                <Card outline >
                    <CardBody>
                        <CardTitle className='text-center'><u>Color Combination</u></CardTitle>
                        <Row >
                            <Col lg={3} sm={6} >
                                <FormGroup row className="text-nowrap">
                                    <Col >
                                        <FormGroup check>
                                            <CustomInput
                                                type='checkbox'
                                                className='custom-control-Primary'
                                                id=' colorSpecific'
                                                label=' Color Specific'
                                                //defaultChecked
                                                inline
                                            />
                                            {/* <Label check>
                                                <Input type="checkbox" /> Color Specific
                                            </Label> */}
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col lg={3} sm={6}>
                                <FormGroup row className="text-nowrap ">
                                    <Col >
                                        <FormGroup >
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
                            <Col lg={3} sm={6}>
                                <FormGroup row className="text-nowrap">
                                    <Col>
                                        <FormGroup check>
                                            <CustomInput
                                                type='checkbox'
                                                className='custom-control-Primary'
                                                id=' sizeSpecific'
                                                label=' Size Specific'
                                                //defaultChecked
                                                inline
                                            />
                                            {/* <Label check>
                                                <Input type="checkbox" /> Size Specific
                                            </Label> */}
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                            </Col>

                            <Col lg={3} sm={6}>
                                <FormGroup row className="text-nowrap">
                                    <Col >
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


                        <Table size="sm" bordered >
                            <thead className='thead-dark' >
                                <tr className="text-center"  >
                                    <th className="text-nowrap" >Style No</th>
                                    <th className="text-nowrap">Color</th>
                                    <th className="text-nowrap">Size</th>
                                    <th className="text-nowrap">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center"  >
                                    <td className="text-nowrap w-25" >4369SMS32-A</td>
                                    <td className="w-25">
                                        <Input type="select" bsSize="sm" >
                                            <option>Select Color</option>
                                            <option>Green</option>
                                            <option>Yellow</option>
                                        </Input>
                                    </td>
                                    <td className="w-25">
                                        <Input type="select" bsSize="sm">
                                            <option>Select Size</option>
                                            <option>XL</option>
                                            <option>4XL</option>
                                        </Input>
                                    </td>
                                    <td className="w-25">
                                        <Input type='number' bsSize='sm' placeholder='0' />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

                <ModalFooter >
                    <Button color='primary' onClick={() => setOpenModal( !openModal )}>
                        OK
                    </Button>
                </ModalFooter>
            </CustomModal>
        </div>
    );
};

export default ColorSizeWithTable;

