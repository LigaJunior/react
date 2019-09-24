import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({name, details,imgLink, level, playerId})=>(
    <div>
        <div className = "player-card-content">
            <div className="player-card">
                <div className="player-firstinfo">
                    <img className="player-img d-inline" src={imgLink} alt="Avatar do jogador"></img>
                    <div className ="player-profileinfo">
                        <h3 className="player-h3 d-inline">{name}</h3>
                        <h4 className="player-h4 text-info">{"Level "+ level}</h4>
                        <p>{details}</p>
                        <button id={playerId} 
                                onClick={(e)=>{
                                    document.getElementById("AddPlayerConsumptionFormSelectedId").value = e.target.id
                                }} 
                                className="btn btn-primary btn-sm" data-toggle="modal" data-target="#AddPlayerConsumptionModal">Adicionar consumo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

PlayerCard.defaultProps = {
    imgLink: "https://lh3.googleusercontent.com/4CHi7nIgq5GBuWnSyWRcNIjcHavzmvRUy48Q4TqalwGoIJPzxVi-jr-jO2e4FBhvTDPR",
    level:0
}

export default PlayerCard