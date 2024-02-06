import React from 'react';
import {ReactComponent as IconClose} from  './icon-close.svg';
import './Simplemodal.css';
import { Transition } from 'react-transition-group';

const Simplemodal = ({isOpen, onClose, children}) => {
    const onWrapperClick = (event) => {
        if(event.target.classList.contains('modal-wrapper') ) onClose()
    }
    return (
        <>
        <Transition in = {isOpen} timeout={350} unmountOnExit = {true}>
        {(state) => (
        <div className={`modal modal--${state}`}>
            <div className='modal-wrapper' onClick={onWrapperClick}>
                <div className="modal-content">
                    <button className="modal-close-button"
                    onClick = {()=> onClose()}
                    >
                        <IconClose />
                        
                    </button>
                    {children}
                </div>
            </div>
        </div>
        )}

        </Transition>
      
        </>
    );
}

export default Simplemodal;
