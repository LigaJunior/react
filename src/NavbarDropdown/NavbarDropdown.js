import React from 'react'

const NavbarDropdown = ({title,itens,posDivider}) =>(
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {title}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {itens.map((item, index) => (
                <a key={index} className="dropdown-item" href="#">{item}</a>
            ))}
            {posDivider &&
                [
                    <div class="dropdown-divider"></div>,
                    posDivider.map((item,index) => (
                        <a key={index} className="dropdown-item" href="#">{item}</a>
                    ))
                ]
            }
        </div>
    </li>
)

export default NavbarDropdown