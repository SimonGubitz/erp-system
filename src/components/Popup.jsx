import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';


function Popup({ children }) {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const popupShown = Cookies.get('popupShown');
        if (!popupShown) {
            setShowPopup(true);
        }
    }, []);


    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md w-screen h-screen backdrop-opacity-10 z-[1000]">
            {showPopup && <div className="rounded-lg border-solid border border-slate-500">
                {children}
            </div>}
        </div>
    );
}


export default Popup;
