import './Accordion.css';
import React, {useState} from 'react';
import AccordionItem from './AccordionItem';


const Accordion = ({list}) => {
    //  id  открытого ответа
 const [openId, setId] = useState(null);

    return (
        <>
        <ul className="accordion">
            {list.map((item, id)=>{
                return ( 
                <AccordionItem 
                onClick={() => id===openId ? setId(null) : setId(id)}
                item={item} 
                isOpen={id===openId} 
                key={id} />
                );
                

            })}
        </ul>
        
        
        </>
    );
}

export default Accordion;

