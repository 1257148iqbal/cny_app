import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Input, Label } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import CustomModal from '../../../utility/custom/CustomModal';


const PackMeasurement = () => {
    const [openModal, setOpenModal] = useState( false );
    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Pack PackMeasurement
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-md' openModal={openModal} setOpenModal={setOpenModal} title="Pack Measurement" >
                <Card className="mb-1">
                    <CardBody>
                        <Row>
                            <Col >
                                <Label for="lengthId" className="font-weight-bolder">Length</Label>
                                <Input
                                    type='number'
                                    bsSize="sm"
                                    id='lengthId'
                                    placeholder='0.00'
                                    className={'text-right'}
                                />
                            </Col>
                            <Col >
                                <Label for="widthId" className="font-weight-bolder">Width</Label>
                                <Input
                                    type='number'
                                    bsSize="sm"
                                    id='widthId'
                                    placeholder='0.00'
                                    className={'text-right'}
                                />
                            </Col>
                            <Col >
                                <Label for="heightId" className="font-weight-bolder">Height</Label>
                                <Input
                                    type='number'
                                    bsSize="sm"
                                    id='heightId'
                                    placeholder='0.00'
                                    className={'text-right'}
                                />
                            </Col>
                            <Col >
                                <Label for="cbmId" className=" font-weight-bolder">CBM </Label>
                                <Input
                                    type='number'
                                    id='cbmId'
                                    placeholder='0.00'
                                    readOnly
                                    bsSize="sm"
                                    className={'text-right'}
                                />
                            </Col>
                        </Row>

                    </CardBody>
                </Card>

            </CustomModal>
        </div>
    );
};

export default PackMeasurement;

