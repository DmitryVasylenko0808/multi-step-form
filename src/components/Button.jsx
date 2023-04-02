import React from "react";

const Button = ({ type, onClickHandle, isHidden=false, children}) => {
    let className = "default";

    if(type === "back") {
        className += " back";
    }
    else if(type === "next") {
        className += " next";
    }
    else if(type === 'confirm') {
        className += " confirm";
    }

    if(isHidden === true) {
        className += " hidden";
    }

    return(
        <button className={className} onClick={onClickHandle}>{children}</button>
    )
}

export default Button;