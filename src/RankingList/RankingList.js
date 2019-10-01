import React, { Component } from 'react'
import Axios from 'axios';
import urlConfig from '../url-config'
import './RankingList.css'

const url = urlConfig.defaultURL;
class RankingList extends Component {

    constructor() {
        super();
        this.state = {
            playerConsumptionRanking: [],
            junkFoodConsumptionRanking: []
        }
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <h4 id="ranking-title">Consumo geral</h4>
                    <ul className="list-group">
                        {this.state.playerConsumptionRanking.map((ranking, index) =>
                            index < 3 && [
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    {ranking.player.name}
                                    <span className="ml-2 badge badge-primary badge-pill">{ranking.amount}</span>
                                </li>
                            ]
                        )}
                    </ul>
                </div>
                <div>
                    <h4 id="ranking-title">Porcarias por sprint</h4>
                    <ul className="list-group">
                        {this.state.junkFoodConsumptionRanking.map((ranking, index) => 
                            index < 3 && [
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    {ranking.sprintName}
                                    <span className="ml-2 badge badge-primary badge-pill">{ranking.amount}</span>
                                </li>
                            ]
                        )}
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        Axios.get(url + '/sprints/rank')
            .then(res => {
                console.log(res.data)
                var junkFoodConsumptionRanking = res.data
                this.setState({ junkFoodConsumptionRanking })
            })
        Axios.get(url + '/players/rank')
            .then(res => {
                console.log(res.data)
                var playerConsumptionRanking = res.data
                this.setState({ playerConsumptionRanking })
            })
    }
}

export default RankingList