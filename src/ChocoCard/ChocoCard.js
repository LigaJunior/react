import React from 'react'
import './ChocoCard.css'

const ChocoCard = ({payAction,id,playerName,reason, date,paid})=>(
    <div className = "choco-card">
        <input readOnly hidden id={"choco"+id}></input>
        <div className="choco-card-content">
            <div className="choco-info">
                <div>
                    <h3 className="choco-h3 d-inline">{reason}</h3>
                    <h4 className="choco-h4 text-info">{playerName}</h4>
                    <h4 className="choco-h4 text-info">{date}</h4>
                    <h4 className={paid ? 'choco-h4 text-success':'choco-h4 text-danger'}>A caixa {paid ? '':'não'} foi paga.</h4>
                    {!paid &&[
                        <div key={"btn-pay-"+id}>
                            <div key={'divider'} className="dropdown-divider"></div>
                            <button onClick={payAction} className="btn btn-primary btn-block btn-sm">Marcar como pago</button>
                        </div>
                    ]}
                </div>
            </div>
        </div>
    </div>
)

export default ChocoCard