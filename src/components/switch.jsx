import React from "react";


const Switch = ({ locked=true, dataState }) => {

    const handleClick = () => {
        dataState = !dataState;
    }


    const customStyles = `relative rounded-full bg-white min-w-6 min-h-3${locked?" cursor-pointer":" cursor-not-allowed grayscale"}`;
    const customStylesPoint = `absolute top-1.5 rounded-full aspect-square w-3 -translate-y-1/2${dataState?" bg-green-800 right-0" : " bg-red-700 left-0"}`;

    return (<div onClick={handleClick} className={customStyles}>
        <div className={customStylesPoint}> </div>
    </div>);
}


export default Switch;