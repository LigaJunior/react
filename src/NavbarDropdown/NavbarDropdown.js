import React from 'react'

const NavbarDropdown = ({ title, itens, posDivider }) => (
    <li className="nav-item dropdown">
        <button className="btn btn-link nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {title}
        </button>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {itens.map((item, index) => (
                <button key={index} className="dropdown-item" data-toggle={item.toggle} data-target={"#"+item.target}>{item.name}</button>
            ))}
            {posDivider &&
                [
                    <div key={'divider'} className="dropdown-divider"></div>,
                    posDivider.map((item, index) => (
                        <a key={index} className="dropdown-item" href={item.href}>{item.name}</a>
                    ))
                ]
            }
        </div>
    </li>
)

export default NavbarDropdown