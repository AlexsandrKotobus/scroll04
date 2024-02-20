import React from 'react';
import { Header } from './Header/Header';
import Main from './Main/Main';
import { Footer } from './Footer/Footer';

const PopUp = () => {
    return (
        <div className='pop-up'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default PopUp;
