import React from 'react'
import "./HomeCard.css"
// import map from "../assets/map.png"

const HomeCard = (props) => {
    return (
        <div key={props.key} className='card' >
            <img src={`/${props.image}.png`} alt="" className="pict" />
            <p className="card-text">
                {props.name}
            </p>

            <p className="private">
                private room
            </p>

            <p className="price">
                {props.price}
            </p>

            <div className="cardLine"></div>

        </div>
    )
}

export default HomeCard
