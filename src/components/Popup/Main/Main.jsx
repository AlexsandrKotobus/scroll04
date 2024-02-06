import React, {useState} from 'react';
import Simplemodal from '../SimpleModal/Simplemodal';
import './Main.css';


const Main = () => {
    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
    const [modalAboutIsOpen, setModalAboutOpen] = useState(false);
    const [modalDataIsOpen, setModalDataOpen] = useState(false)

    return (
        <div className='main'>
            <section className="section">
                <button className="modal-show-button" onClick={()=> setModalInfoOpen(true)}>Modal Info</button>
                <button className="modal-show-button" onClick={()=> setModalAboutOpen(true)}>Modal About</button>
                <button className="modal-show-button" onClick={()=> setModalDataOpen(true)}>Modal Data</button>
            </section>
            <Simplemodal 
                isOpen = {modalInfoIsOpen}
                onClose = {()=>  setModalInfoOpen(false)}
                >
                    <h2>Modal info</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aspernatur porro odit laudantium labore ipsam laborum quam iure 
                        corporis! A sequi nam alias consequuntur exercitationem magni? </p>
            </Simplemodal>
            <Simplemodal 
                isOpen = {modalAboutIsOpen}
                onClose = {()=>  setModalAboutOpen(false)}
                >
                    <h2>Modal About</h2>
                    <p>Lorem ipsum dolor sit amet con </p>
            </Simplemodal>

            <Simplemodal 
                isOpen = {modalDataIsOpen}
                onClose = {()=>  setModalDataOpen(false)}  >
                    <h2>Modal Data</h2>
                    <p>git clone https://github.com/DmitriyShkredov/react-simple-modal.git
                            npm install
                            npm run start
                            npm run build
                            Did my video or project help you? Then buy me a coffee </p>
                    <p>
                        • React JS | Формы  
                        • React JS | GSAP  
                        • React JS | Изображения и видео  
                        • React JS | Menu  
                        • React JS | Хуки  
                        • React JS | Полезные фишки  
                        • IT-ЛайфXаки  
                    </p>
            </Simplemodal>
        </div>
    );
}

export default Main;
