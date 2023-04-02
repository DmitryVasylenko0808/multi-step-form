import React from "react";
import Step from "./Step.jsx";

const Sidebar = ({ steps, step }) => {
    return (
        <div className="sidebar">
            {steps.map((s, i) => {
                if(i + 1 === step) {
                    return <Step key={i} title={s} number={i + 1} active />
                }
                else {
                    return <Step key={i} title={s} number={i + 1} />
                }
            })
            }
        </div>
    )
}

export default Sidebar;