import React from 'react'
import './TitleHeader.css'
const TitleHeader = ({ title, subtitle, button, btnText, btnFunction, btnToggle, btnTarget, theme }) => (
    <div>
        {button && [
            <button key={"titleHeaderBtn"} className={"btn btn-outline-" + theme}
                style={{ width: "280px", float: "right" }}
                onClick={btnFunction}
                data-toggle={btnToggle}
                data-target={"#" + btnTarget}>{btnText}</button>
        ]}

        <div className="title-header">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    </div>
)

TitleHeader.defaultProps = {
    button: false,
    theme: "dark",
    color: '#343a40',
    btnFunction: () => { console.log('Default behavior') }
}

export default TitleHeader