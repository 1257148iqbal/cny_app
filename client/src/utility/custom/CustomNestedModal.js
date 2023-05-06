

import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const CustomNestedModal = ( { children, openModal, setOpenModal, modalTypeClass, className, title, handleNestedModelOpen, handleNestedModelSubmit } ) => {

    return (
        // <Draggable handle=".modal-header" >
        <Modal scrollable backdrop="static" isOpen={openModal} className={className}>
            <ModalHeader
                style={{ cursor: 'all-scroll' }}
                toggle={() => setOpenModal( !openModal )}
            >  {title}</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button size="sm" color="primary" onClick={() => { handleNestedModelSubmit(); }}>
                    Done
                </Button>
            </ModalFooter>
        </Modal>
        // </Draggable>
    );
};

export default CustomNestedModal;
// ** PropTypes
CustomNestedModal.propTypes = {
    className: PropTypes.string,
    modalTypeClass: PropTypes.string,
    title: PropTypes.string.isRequired,
    openModal: PropTypes.bool.isRequired,
    handleNestedModelSubmit: PropTypes.func.isRequired,
    handleNestedModelOClose: PropTypes.func
};