import React from "react";

const CardService = ({ addon, data, onHandleChange }) => {
    return (
        <div className={addon.selected ? "card card--service card-selected" : "card card--service"}>
            <div className="service">
                <label className="check--container">
                    <input type="checkbox" checked={addon.selected} onChange={onHandleChange} />
                    <span className="checkmark"></span>
                </label>
                <div>
                    <p className="title">{addon.title}</p>
                    <p>{addon.description}</p>
                </div>
            </div>
            <p className="price">{`+$${addon.price}/${data.plan.period}`}</p>
        </div>
    )
}

export default CardService;