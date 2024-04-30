import AccordionHr from "./AccordionHr";
import {list} from './list'
import Accordion from "../Accordion/Accordion";


// import 
import {useMediaQuery} from '../../hooks/useMediaQuery'

import React from 'react';

const Acc = () => {
    const isTablet = useMediaQuery('(max-width: 1023px)');
    const isDecktop = useMediaQuery('(min-width: 1024px)');
    return <>
    {isTablet && <Accordion list={list}/>}
    {isDecktop && <AccordionHr list={list}/>}
    </>
}

export default Acc;
