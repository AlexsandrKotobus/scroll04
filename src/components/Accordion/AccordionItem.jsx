import React, {useRef} from 'react';
import { ReactComponent as ArrowIcon } from './arrow-icon.svg';

const AccordionItem = ({item, onClick, isOpen}) => {
    const itemRef = useRef(null);
    return <li className='accordion-item'>
                    {/* вопрос */}
                    <button className='accordion-header' 
                    onClick={() => onClick()}
                    >
                        {item.title}
                        <ArrowIcon className={`accordion-arrow ${isOpen ? "active" : ""}`}/>
                    </button>
                    <div className='accordion-collapse'
                    style={
                        isOpen ? {height: itemRef.current.scrollHeight } : {height: '0'}
                    }
                    >
                         {/* ответ */}
                        <div className='accordion-body' ref= {itemRef}>{item.text}</div>

                    </div>
                   
                </li>
}

export default AccordionItem;
