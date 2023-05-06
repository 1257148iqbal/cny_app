import React, { useState } from 'react';
import { Button, Card, CardBody, Input, ModalFooter, Table } from 'reactstrap';
import CustomModal from '../../../utility/custom/CustomModal';

const PurchageOrderStyleDetails = () => {
    const [openModal, setOpenModal] = useState( false );
    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open P.O Details
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-lg' openModal={openModal} setOpenModal={setOpenModal} title="" >
                <Card outline >
                    <CardBody >

                        <h6 className='mb-1'><strong >Style No:4369SMS32-1, Color : Pink</strong></h6>

                        <Table size="sm" bordered hover>
                            <thead className='text-nowrap'>
                                <tr className="text-center" >
                                    <th className='text-nowrap'>Size</th>
                                    <th className='text-nowrap'>Quantity</th>
                                    <th className='text-nowrap'>Excess(%)</th>
                                    <th className='text-nowrap'>Wastage(%)</th>
                                    <th className='text-nowrap'>Sample Qty.</th>
                                    <th className='text-nowrap' >Adjusted Qty.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  >
                                    <td className="text-nowrap" >2T</td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='10975' /></td>
                                    <td ><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='10975' /></td>
                                </tr>

                                <tr  >
                                    <td className="text-nowrap" >3T</td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
                                </tr>

                                <tr  >
                                    <td className="text-nowrap" >4T</td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
                                </tr>

                                <tr  >
                                    <td className="text-nowrap" >5T</td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
                                </tr>

                                <tr  >
                                    <td className="text-nowrap" >6T</td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
                                </tr>

                                <tr  >
                                    <td className="text-nowrap" >7T</td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input className='text-right' onFocus={e => { e.target.select(); }} type='number' bsSize='sm' placeholder='21950' /></td>
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

export default PurchageOrderStyleDetails;

