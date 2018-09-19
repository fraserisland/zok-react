import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card'
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
                {
                    props.cart.length > 0 ?
                    sortItems(props.cart).map(item => (
                        <div className="cart__card" key={item.id}>
                        <Card
                            product={item} 
                        />
                            <button
                            onClick={() => props.addToCart(item)}
                            > + 
                            </button>
                            <button
                            onClick={() => props.removeFromCart(item)}
                            > - 
                            </button>
                            <button
                            onClick={() => props.removeAllFromCart(item)}
                            > Remove all
                            </button>
                        </div>
                    ))
                    :
                    <p>NO ITEMS IN CART</p>
                }
                <p>total: ${ Math.round((cartTotal(props.cart) * 100)) / 100 }</p>
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