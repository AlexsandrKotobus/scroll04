import './Accordion.css';
import React, {useState} from 'react';
import AccordionItem from './AccordionItem';


const Accordion = ({faqList}) => {
    //  id  открытого ответа
 const [openId, setId] = useState(null);

    return (
        <>
        <ul className="accordion">
            {faqList.map((faqItem, id)=>{
                return ( 
                <AccordionItem 
                onClick={() => id===openId ? setId(null) : setId(id)}
                faqItem={faqItem} 
                isOpen={id===openId} 
                key={id} />
                );
                

            })}
        </ul>
        
        
        </>
    );
}

export default Accordion;

