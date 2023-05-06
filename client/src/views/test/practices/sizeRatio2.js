import React, { useState } from 'react';
import { Button, Card, CardBody, Input, ModalFooter, Table } from 'reactstrap';
import CustomModal from '../../../utility/custom/CustomModal';


const SizeRatio2 = () => {
    const [openModal, setOpenModal] = useState( false );
    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open CM
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-lg' openModal={openModal} setOpenModal={setOpenModal} title="Size/Quantity/Ratio" >
                <Card outline >
                    <CardBody>
                        <Table size="sm" bordered>
                            <thead >
                                <tr className="text-center" >
                                    <th>Style No</th>
                                    <th >2T</th>
                                    <th >3T</th>
                                    <th >4T</th>
                                    <th >5T</th>
                                    <th >6T</th>
                                    <th >7T</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  >
                                    <td className="text-nowrap" >4369SMS32-A</td>
                                    <td><Input type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input type='number' bsSize='sm' placeholder='0' /></td>
                                    <td><Input type='number' bsSize='sm' placeholder='0' /></td>


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

export default SizeRatio2;

