import React from 'react'

import './styles.css'

const Header = (props) => {
    return ( 
        <div className="header__container">
            <div className="header__text">
                <h2 className="header__subtitle">{props.subTitle}</h2>
                <p className="header__description">{props.description}</p>
            </div>
        </div>
    );
}
 
export default Header;