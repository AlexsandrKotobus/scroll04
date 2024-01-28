import React, {useRef} from 'react';
import { ReactComponent as ArrowIcon } from './arrow-icon.svg';

const AccordionItem = ({faqItem, onClick, isOpen}) => {
    const itemRef = useRef(null);
    return <li className='accordion-item'>
                    {/* вопрос */}
                    <button className='accordion-header' 
                    onClick={() => onClick()}
                    >
                        {faqItem.q}
                        <ArrowIcon className={`accordion-arrow ${isOpen ? "active" : ""}`}/>
                    </button>
                    <div className='accordion-collapse'
                    style={
                        isOpen ? {height: itemRef.current.scrollHeight } : {height: '0'}
                    }
                    >
                         {/* ответ */}
                        <div className='accordion-body' ref= {itemRef}>{faqItem.a}</div>

                    </div>
                   
                </li>
}

export default AccordionItem;
