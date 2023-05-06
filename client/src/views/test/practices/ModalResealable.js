import React, { useState } from 'react';
import { Button, ModalFooter } from 'reactstrap';
import CustomModal from '../../../utility/custom/CustomModal';

const ModalResealable = () => {
    const [openModal, setOpenModal] = useState( false );
    // fsf
    return (
        <div>
            <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
                Open CM
            </Button.Ripple>
            <CustomModal modalTypeClass='vertically-centered-modal' className='modal-dialog-centered modal-md' openModal={openModal} setOpenModal={setOpenModal} title="Custom Modal" >


                <p> Nested Component Here </p>


                <ModalFooter>
                    <Button color='primary' onClick={() => setOpenModal( !openModal )}>
                        Submit
                    </Button>
                </ModalFooter>
            </CustomModal>
        </div>
    );
};

export default ModalResealable;

