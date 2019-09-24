import React from 'react'
import './TitleHeader.css'
const TitleHeader = ({ title, subtitle }) => (
    <div className="title-header">
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </div>
)


export default TitleHeader