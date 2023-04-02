import React from "react";

import Button from "./Button.jsx";

const Summary = ({ onNextStep, onBackStep, data }) => {
    let sum = data.plan.price + data.addOns.reduce((acc, curr) => acc + curr.price, 0);

    const addData = e => {
        onNextStep();
    }

    return (
        <div className="form">
            <div className="desc">
                <h1>Finishing up</h1>
                <p>Double check everything looks OK before confirming</p>
            </div>

            <form onSubmit={addData}>
                <div>
                    <div className="block">
                        <div className="info--container">
                            <div>
                                <p className="title">{`${data.plan.title} (${data.plan.period === 'mo' ? "Monthy" : "Yearly"})`}</p>
                                <span className="change regular" onClick={() => onBackStep(2)}>Change</span>
                            </div>
                            <p className="price">{`+$${data.plan.price}/${data.plan.period}`}</p>
                        </div>

                        <hr></hr>

                        {data.addOns.map(a => {
                            return (
                                <div className="info--container serv">
                                    <p className="regular">{a.title}</p>
                                    <p className="price">{`+$${a.price}/${data.plan.period}`}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="total--block">
                        <p className="regular">{`Total (per ${data.plan.period === 'mo' ? 'month' : 'year'})`}</p>
                        <p className="price">{`$${sum}/${data.plan.period}`}</p>
                    </div>
                </div>

                <div className="buttons--container">
                    <Button type="back" onClickHandle={() => onBackStep(1)}>Go Back</Button>
                    <Button type="confirm">Confirm</Button>
                </div>
            </form>
        </div>
    )
}

export default Summary;