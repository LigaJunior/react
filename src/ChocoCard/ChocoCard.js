'use strict'
import React from 'react'
import './ChocoCard.css'

const ChocoCard = ({playerName,reason, date,paid})=>(
    <div className = "choco-card-content">
        <div className="choco-card">
            <div className="choco-firstinfo">
                {/* <img className="player-img d-inline" src={imgLink}></img> */}
                <div className ="chocoinfo">
                    <h3 className="choco-h3 d-inline">{reason}</h3>
                    <h4 className="choco-h4 text-info">{playerName}</h4>
                    <h4 className="choco-h4 text-info">{date}</h4>
                </div>
            </div>
        </div>
    </div>
)

ChocoCard.defaultProps = {
    imgLink: "https://lh3.googleusercontent.com/4CHi7nIgq5GBuWnSyWRcNIjcHavzmvRUy48Q4TqalwGoIJPzxVi-jr-jO2e4FBhvTDPR"
}

export default ChocoCard