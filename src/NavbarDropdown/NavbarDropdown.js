import React from 'react'

const NavbarDropdown = ({ title, itens, posDivider }) => (
    <li className="nav-item dropdown">
        <button className="btn btn-link nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {title}
        </button>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {itens.map((item, index) => (
                <button key={index} className="dropdown-item" onClick={item.action}>{item.name}</button>
            ))}
            {posDivider &&
                [
                    <div key={'divider'} className="dropdown-divider"></div>,
                    posDivider.map((item, index) => (
                        <button key={index} className="dropdown-item" onClick={item.action}>{item.name}</button>
                    ))
                ]
            }
        </div>
    </li>
)

export default NavbarDropdown