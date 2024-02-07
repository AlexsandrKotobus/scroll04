import React from 'react';
import {ReactComponent as IconClose} from  './icon-close.svg';
import './Simplemodal.css';
import { Transition } from 'react-transition-group';

const Simplemodal = ({isOpen, onClose, children}) => {
    // закрытие окна через 10 сек
    const End = setTimeout(()=> onClose(), 10000);
    const onWrapperClick = (event) => {
        if(event.target.classList.contains('modal-wrapper') ) onClose();
    }

    return (
        <>
        <Transition in = {isOpen} timeout={350} unmountOnExit = {true} >
        {(state) => (
            
        <div className={`modal modal--${{state},{End}}`}>
            <div className='modal-wrapper' onClick={onWrapperClick} >
                <div className="modal-content">
                    <button className="modal-close-button"
                    onClick = {()=> onClose()}  >
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
