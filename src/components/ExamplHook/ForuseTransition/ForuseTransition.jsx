import React, {useState, useTransition} from 'react';
import './ForuseTransition.css'

import {SlowData} from "./SlowData"

const ForuseTransition = () => {
    const [tab, setTab] = useState("main");
    const [isPending, startTransition] = useTransition();
    const selectTab =(nextTab) => {
        startTransition(()=> setTab(nextTab));
    }
    return (
        <div className='App'>
            <div className="buttons">
                <button onClick={()=> setTab("main")}>Main</button>
                <button onClick={()=> selectTab("products")}>Product</button>
                <button onClick={()=> setTab("contacts")}>Contact</button>
            

            </div>
            <div className="tabs">
                {tab === "main" && <div className="tab">Main Tab</div>}
                {tab === "products" && <SlowData/>}
                {tab === "contacts" && <div className="tab">Contact Tab</div>}
                {isPending && <div className='loader'>Loading ...</div>}
            </div>
            
        </div>
    );
}

export default ForuseTransition;
