import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {Theme} from '../../providers/Theme';
import './ForUseContext.css';


const ForUseContext = () => {
   
    return (

        <Theme>
            <div className='App'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
         </Theme>
    );
}

export default ForUseContext;
