import React, { useState } from "react";
import Button from "./Button.jsx";

const PersonalInfo = ({ onNextStep, onBackStep, data }) => {
    const errArr = {
        name: false,
        email: false,
        phone: false
    };

    const [errors, setErrors] = useState(errArr);

    const validate = (d) => {
        const err = {};

        for (let key of Object.keys(d)) {
            if (d[key] === '') {
                err[key] = true;
            }
            else err[key] = false;
        }

        if (Object.values(err).includes(true)) {
            return [false, err];
        }
        else {
            return [true, err];
        }
    }

    const addData = (e) => {
        e.preventDefault();
        const form = e.target;

        const d = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value
        };

        const [result, err] = validate(d);
        if (result) {
            onNextStep(d);
        }
        else {
            setErrors(err);
        }
    };

    return (
        <div className="form">
            <div className="desc">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number</p>
            </div>

            <form onSubmit={addData}>
                <div>
                    <div className="labels">
                        <label>Name</label>
                        {errors.name ? <label className="error">The field is required</label> : null}
                    </div>
                    <input type="text" placeholder="e.g. Stephen King" className={errors.name ? "text error--input" : "text"} defaultValue={data.name} name="name"></input>

                    <div className="labels">
                        <label>Email Address</label>
                        {errors.email ? <label className="error">The field is required</label> : null}
                    </div>
                    <input type="text" placeholder="e.g. stephenking@lorem.com" className={errors.email ? "text error--input" : "text"} defaultValue={data.email} name="email"></input>

                    <div className="labels">
                        <label>Phone Number</label>
                        {errors.phone ? <label className="error">The field is required</label> : null}
                    </div>
                    <input type="text" placeholder="e.g. +1 234 567 890" className={errors.phone ? "text error--input" : "text"} defaultValue={data.phone} name="phone"></input>
                </div>

                <div className="buttons--container">
                    <Button type="back" onClickHandle={() => onBackStep(1)} isHidden>Go Back</Button>
                    <Button type="next">Next Step</Button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo;