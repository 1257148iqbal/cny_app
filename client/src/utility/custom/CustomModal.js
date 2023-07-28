/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const CustomModal = ({ children, openModal, setOpenModal, modalTypeClass, className, title, handleMainModelSubmit, handleMainModalToggleClose }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Draggable handle=".modal-header">
        <div className={modalTypeClass}>
          <Modal
            id="myModal"
            onClose={() => {
              console.log('hell');
            }}
            isOpen={openModal}
            className={className}
          >
            <ModalHeader
              toggle={() => {
                handleMainModalToggleClose();
              }}
            >
              {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button
                size="sm"
                color="primary"
                onClick={() => {
                  handleMainModelSubmit();
                }}
              >
                Ok
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </Draggable>
    </div>
  );
};

export default CustomModal;
// ** PropTypes
CustomModal.propTypes = {
  className: PropTypes.string,
  modalTypeClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  handleMainModelSubmit: PropTypes.func.isRequired,
  handleMainModalToggleClose: PropTypes.func.isRequired
};
