// import { findRenderedComponentWithType } from "react-dom/test-utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import React from 'react';

const ForUseMediaQuery = () => {
    const isMobile = useMediaQuery("(max-width: 500px)");
    console.log(isMobile);
    const isTablet = useMediaQuery("(min-width: 501px)");
    console.log(isTablet);
    return (
        <div>
            <div >
            lijnolk
                {isMobile && <p>Mobile</p>}
                {isTablet  && <p>Tablet</p>}
            </div>
            <div className="111"></div>
        </div>
        
    );
}

export default ForUseMediaQuery;
