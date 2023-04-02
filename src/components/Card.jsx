import React from "react";

const Card = ({ p, period, onClick }) => {
    return (
        <div className={(p.selected) ? "card card-selected" : "card"} onClick={onClick}>
            <div className="ico" style={{ backgroundImage: `url(../assets/images/${p.ico})` }}></div>
            <p className="title">{p.title}</p>
            <p>{`$${(period === 'mo') ? p.priceMonth : p.priceYear}/${period}`}</p>
            {period === 'yr' ? <p className="free">2 months free</p> : null}
        </div>
    )
}

export default Card;