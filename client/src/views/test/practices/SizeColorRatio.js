import React, { useState } from 'react';
import { Button, Card, CardBody, CustomInput, FormGroup, Input, ModalFooter, Table } from 'reactstrap';
import CustomModal from '../../../utility/custom/CustomModal';


const SizeColorRatio = () => {
    const [openModal, setOpenModal] = useState( false );
    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open Size Color Ratio
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-lg' openModal={openModal} setOpenModal={setOpenModal} title="Size Color Ratio" >
                <Card outline >
                    <CardBody>
                        <Table responsive bordered>
                            <thead>
                                <tr className="text-nowrap" >
                                    <th>Color</th>

                                    <th>Size-36</th>
                                    <th>Size-38</th>
                                    <th>Size-40</th>
                                    <th>Size-42</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  >
                                    <td className="text-nowrap" >White</td>

                                    <td ><Input type='number' bsSize='md' placeholder='10' /></td>
                                    <td ><Input type='number' bsSize='md' placeholder='20' /></td>
                                    <td ><Input type='number' bsSize='md' placeholder='30' /></td>
                                    <td ><Input type='number' bsSize='md' placeholder='40' /></td>
                                </tr>

                                <tr className="text-nowrap" >
                                    <td className="text-nowrap" >Heather Grey</td>

                                    <td ><Input type='number' bsSize='md' placeholder='2' /></td>
                                    <td ><Input type='number' bsSize='md' placeholder='3' /></td>
                                    <td ><Input type='number' bsSize='md' placeholder='4' /></td>
                                    <td ><Input type='number' bsSize='md' placeholder='5' /></td>
                                </tr>
                                <tr className="text-nowrap" >
                                    <td className="text-nowrap" >Total</td>

                                    <td ><Input type='number' bsSize='md' placeholder='12' /></td>
                                    <td ><Input type='number' bsSize='md' placeholder='23' /></td>
                                    <td ><Input type='number' bsSize='md' placeholder='34' /></td>
                                    <td ><Input type='number' bsSize='md' placeholder='34' /></td>

                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>

                </Card>

                <ModalFooter >
                    <div >
                        <FormGroup check className="text-center pr-5">
                            <CustomInput
                                type='checkbox'
                                className='custom-control-Primary'
                                id='Primary'
                                label='isInRatio'
                                defaultChecked
                                inline
                            />
                        </FormGroup>
                    </div>
                    <div>
                        <Button color='primary' onClick={() => setOpenModal( !openModal )}>
                            Submit
                        </Button>
                    </div>

                </ModalFooter>
            </CustomModal>
        </div>
    );
};

export default SizeColorRatio;

