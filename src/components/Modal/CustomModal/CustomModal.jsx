import React from 'react';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from './close-icon.svg'
import './CustomModal.css'

const CustomModal = ({isOpen, onClose, submitButton, children}) => {
    console.log(children)
    return (
            <Modal
              isOpen={isOpen}
              overlayClassName={"modal-overlay"}
              className={"modal-content"}
              closeTimeoutMS={300}
              onRequestClose={() => onClose()}
              ariaHideApp={false}
            >
              <button className="modal-close-button" onClick={() => onClose()}>
                <CloseIcon />
              </button>
              {children}
              {submitButton && (
                <button className="modal-submit-button" onClick={() => onClose()}>
                  {submitButton}
                </button>
              )}
            </Modal>

    );
}

export default CustomModal;

