import React from 'react'
import { connect } from 'react-redux'
import CartCard from '../CartCard'

import './styles.css'

const cartTotal = (cart) => {
    let total = 0
    cart.map((item) => {
        total += (item.price * item.quantity)
    })
    return total
}

const sortItems = (items) => {
    console.log(
        items.sort((a, b) => {
            a.id < b.id
        })
    )
    return items.sort((a, b) => {
        a.id < b.id
    })
} 

const Cart = (props) => {
    return (
        <div>
            <div className="cart__holder"> 
                <h2 className="cart__title">My Bag</h2>
                {
                    props.cart.length > 0 ?
                    sortItems(props.cart).map(item => (
                        <div className="cart__card" key={item.id}>
                            <CartCard
                                product={item} 
                                removeAll={() => props.removeAllFromCart(item)}
                            />
                        </div>
                    ))
                    :
                    <p>NO ITEMS IN CART</p>
                }
                <h4 className="cart__total">sub-total <span className="cart__dollars">${ Math.round((cartTotal(props.cart) * 100)) / 100 }</span></h4>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)