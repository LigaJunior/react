'use strict'
import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({name, details,imgLink})=>(
    <div className = "player-card-content">
        <div className="player-card">
            <div className="player-firstinfo">
                <img className="player-img d-inline" src={imgLink}></img>
                <div className ="player-profileinfo">
                    <h3 className="player-h3 d-inline">{name}</h3>
                    <h4 className="player-h4 text-info">Level 0</h4>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    </div>
)

PlayerCard.defaultProps = {
    imgLink: "https://lh3.googleusercontent.com/4CHi7nIgq5GBuWnSyWRcNIjcHavzmvRUy48Q4TqalwGoIJPzxVi-jr-jO2e4FBhvTDPR"
}

export default PlayerCard