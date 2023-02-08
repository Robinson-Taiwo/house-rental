import React from 'react'
import "./HomeCard.css"
import bed from "../assets/Bed.svg"
import desk from "../assets/desk.svg"
import ladder from "../assets/ladder.svg"




const HomeCard = (props) => {
    return (
        <div key={props.key} className='card' >
            <img src={`/${props.image}.png`} alt="" className="pict" />
            <p className="card-text">
                {props.name}
            </p>

            <p className="private">
                private Room
            </p>

            <p className="price">
                {props.price}
            </p>

            <div className="cardLine"></div>

            <div className="down">
                <div className="bed">
                    <img src={bed} className="ic" alt="" /> <span className='four' >4</span>
                </div>

                <div className="hline"></div>

                <div className="desk">
                    <img src={desk} className="ic" alt="" /> <span className='four'>4</span>
                </div>

                <div className="hline"></div>


                <div className="lad">
                    <img src={ladder} className="ic" alt="" /> <span className='four' >4</span>
                </div>
            </div>

        </div>
    )
}

export default HomeCard
