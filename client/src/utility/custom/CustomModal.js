
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const CustomModal = (
    { children,
        openModal,
        setOpenModal,
        modalTypeClass,
        className,
        title,
        handleMainModelSubmit,
        handleMainModalToggleClose,
        isDisabledBtn = false,
        extraButton = false,
        buttonComponents
    } ) => {


    return (
        <div className={modalTypeClass}>
            {/* <Draggable handle=".modal-header" > */}

            <Modal
                id="customId"
                onClose={() => { console.log( 'hell' ); }}
                isOpen={openModal}
                className={className}>
                <ModalHeader
                    style={{ cursor: 'all-scroll' }}
                    toggle={() => { handleMainModalToggleClose(); }}
                >
                    {title}
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>

                    {
                        extraButton ? buttonComponents : null
                    }
                    <Button
                        size="sm"
                        disabled={isDisabledBtn}
                        color="primary"
                        onClick={() => { handleMainModelSubmit(); }}>
                        Ok
                    </Button>
                </ModalFooter>
            </Modal>
            {/* </Draggable> */}

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
    handleMainModalToggleClose: PropTypes.func.isRequired,
    isDisabledBtn: PropTypes.bool,
    extraButton: PropTypes.bool
};