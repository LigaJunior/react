import React from 'react'

const ListHeader = ({identifier,buttonText,listTitle,listDetails,btnFunction,color,theme,btnToggle,btnTarget}) =>(
    <div style={{color:color}}>

        <button className={"btn btn-outline-"+theme}
                style={{ width: "280px", float: "right"}}
                onClick={btnFunction}
                data-toggle={btnToggle}
                data-target={"#"+btnTarget}>{buttonText}</button>

        <div style={{ borderLeft: "2px solid "+color, padding: "0", margin: "0", marginBottom: "15px", cursor: "pointer"}}
            data-toggle="collapse"
            data-target={"#"+identifier}
            aria-expanded="false"
            aria-controls={identifier}>

            <h3 className="d-inline" style={{paddingLeft: "20px"}}>{listTitle}</h3>
            <p style={{paddingLeft: "20px"}}>{listDetails}</p>

        </div>

    </div>
)

ListHeader.defaultProps = {
    theme:'dark',
    color:'#343a40',
    btnFunction: () => {console.log('Default behavior')}
}

export default ListHeader