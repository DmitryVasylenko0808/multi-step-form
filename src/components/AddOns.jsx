import React, { useEffect, useState } from "react";

import Button from "./Button.jsx";
import CardService from "./CardService.jsx";

const AddOns = ({ onNextStep, onBackStep, data }) => {
    const adds = [
        {
            title: "Online Service",
            description: "Acces to multiplayer games",
            price: data.plan.period === "yr" ? 10 : 1,
            selected: false
        },
        {
            title: "Larger Storage",
            description: "Extra 1TB of cloud save",
            price: data.plan.period === "yr" ? 20 : 2,
            selected: false
        },
        {
            title: "Customizable Profile",
            description: "Custom theme on your profile",
            price: data.plan.period === "yr" ? 20 : 2,
            selected: false
        }
    ];

    const [addons, setAddons] = useState(adds);

    useEffect(() => {
        const myaddons = addons.map(a => {
            if (data.addOns.findIndex(da => da.title === a.title) !== -1) {
                return { ...a, selected: true };
            }
            else {
                return { ...a, selected: false };
            }
        });

        setAddons(myaddons);
    }, []);

    const onHandleChange = (i) => {
        const myaddons = addons.map((a, index) => {
            if (index === i) {
                return { ...a, selected: !a.selected };
            }
            else {
                return { ...a };
            }
        });

        setAddons(myaddons);
    }

    const addData = (e) => {
        e.preventDefault();

        let d = addons.filter(a => a.selected === true);
        d = {
            addOns: [...d]
        };

        d.addOns.forEach(a => {
            delete a.selected;
        })

        onNextStep(d);
    };

    return (
        <div className="form">
            <div className="desc">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience</p>
            </div>

            <form onSubmit={addData}>
                <div>
                    <div className="service--cards">
                        {addons.map((a, i) => <CardService key={i} addon={a} data={data} onHandleChange={() => onHandleChange(i)} />)}
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

export default AddOns;