import React from "react";

const Step = ({ title, number, active=false }) => {
    const isActive = active ? "step active" : "step";
    
    return (
        <div className={isActive}>
            <div className="circle">{number}</div>
            <div className="step-info">
                <span>STEP {number}</span>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Step;