import React, { useState } from "react";

import "../styles/App.scss";
import "../styles/Sidebar.scss";
import "../styles/Step.scss";
import "../styles/PersonalInfo.scss";
import "../styles/Button.scss";

import Sidebar from "./Sidebar.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import SelectPlan from "./SelectPlan.jsx";
import AddOns from "./AddOns.jsx";
import Summary from "./Summary.jsx";
import Thanks from "./Thanks.jsx";

const App = () => {
    const steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
    const obj = new function() {
        this.name = "",
        this.email = "",
        this.phone = "",

        this.plan = {
            title: "Arcade",
            price: 9,
            period: "mo"
        },

        this.addOns = [
            {
                title: "Online Service",
                description: "Acces to multiplayer games",
                price: this.plan.period === "yr" ? 10 : 1 
            },
            {
                title: "Larger Storage",
                description: "Extra 1TB of cloud save",
                price: this.plan.period === "yr" ? 20 : 2 
            }
        ]
    };

    const [step, setStep] = useState(1);
    const [data, setData] = useState(obj);

    const nextStep = (d = null) => {
        setData({...data, ...d});
        setStep(step + 1);
    }

    const backStep = (n) => {
        setStep(step - n);
    }

    return (
        <div className="layout">
            <div className="form--container">
                <Sidebar steps={steps} step={step !== steps.length + 1 ? step : steps.length} />

                {step === 1 ?
                    <PersonalInfo onNextStep={nextStep} onBackStep={backStep} data={data}/>
                    : step === 2 ?
                        <SelectPlan onNextStep={nextStep} onBackStep={backStep} data={data}/>
                        : step === 3 ?
                            <AddOns onNextStep={nextStep} onBackStep={backStep} data={data} />
                            : step === 4 ?
                                <Summary onNextStep={nextStep} onBackStep={backStep} data={data} />
                                : <Thanks />
                }
            </div>
        </div>
    )
}

export default App;