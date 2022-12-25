import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

export const Header: React.FC = () => {

    return (
        <div className="header-outer">
            <div className="header container">
                <div className="header__title">
                    <span>Расчетно-графическое задание</span>
                </div>
                <div className="header__line" />
                <div className="header__links">
                    <Link className="header__link " to="/parent">Родители</Link>
                    <Link className="header__link " to="/progresss">Успеваемость</Link>
                    <Link className="header__link " to="/schoolchilds">Ученики</Link>
                </div>
            </div>
        </div>
    )
}