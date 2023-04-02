import React, { useEffect, useState } from "react";

import Button from "./Button.jsx";
import Card from "./Card.jsx";

const SelectPlan = ({ onNextStep, onBackStep, data }) => {
    const plansArr = [
        {
            ico: 'icon-arcade.svg',
            title: 'Arcade',
            priceMonth: 9,
            priceYear: 90,
            selected: false
        },
        {
            ico: 'icon-advanced.svg',
            title: 'Advanced',
            priceMonth: 12,
            priceYear: 120,
            selected: false
        },
        {
            ico: 'icon-pro.svg',
            title: 'Pro',
            priceMonth: 15,
            priceYear: 150,
            selected: false
        }
    ];

    const [plans, setPlans] = useState(plansArr);
    const [period, setPeriod] = useState(data.plan.period);

    useEffect(() => {
        const pl = plans.map((p) => {
            if (p.title === data.plan.title) {
                return { ...p, selected: true };
            }
            else {
                return { ...p, selected: false };
            }
        });

        setPlans(pl);
    }, []);

    const togglePeriod = () => {
        period === 'mo' ? setPeriod('yr') : setPeriod('mo');
    }

    const addData = (e) => {
        e.preventDefault();

        let d = plans.find(p => p.selected === true);
        d = {
            plan: {
                title: d.title,
                price: period === 'mo' ? d.priceMonth : d.priceYear,
                period: period
            }
        };

        onNextStep(d);
    };

    const onHandleClick = (i) => {
        const pl = plans.map((p, index) => {
            if (index === i) {
                return { ...p, selected: true };
            }
            else {
                return { ...p, selected: false };
            }
        });

        setPlans(pl);
    }

    return (
        <div className="form">
            <div className="desc">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing</p>
            </div>

            <form onSubmit={addData}>
                <div>
                    <div className="cards">
                        {plans.map((p, i) => <Card key={i} p={p} data={data} period={period} onClick={() => onHandleClick(i)} />)}
                    </div>

                    <div className="check--container check--container--mg">
                        <label className={period === "mo" ? "selected" : ""}>Monthly</label>

                        <label className="switch--theme">
                            <input type="checkbox" onChange={togglePeriod} checked={period === 'yr' ? true : false}></input>
                            <span className="slider"></span>
                        </label>

                        <label className={period === "yr" ? "selected" : ""}>Yearly</label>
                    </div>
                </div>

                <div className="buttons--container">
                    <Button type="back" onClickHandle={() => onBackStep(1)}>Go Back</Button>
                    <Button type="next">Next Step</Button>
                </div>
            </form>


        </div>
    )
}

export default SelectPlan;