import React from 'react';
import './styles.css'
import cross from './multiply.svg'

const Card = (props) => {
    return ( 
        <div className="cart-card__container"> 
            <img className="cart-card__img"
                title={props.product.name}
                src={`/images/${props.product.image}`} 
            />
            <div>
                <p className="cart-card__price">${props.product.price}</p>
                <div className="cart-card__desc">
                    <p className="card__title">{props.product.type}</p> 
                    <p className="card__name">{props.product.name}</p> 
                </div>
                <p className="card__name"> Qty {props.product.quantity} </p>
            </div>
            <div className="cross-holder">
                <img className="cross" src={cross} onClick={props.removeAll} />
            </div>
        </div>
     );
}
 
export default Card;