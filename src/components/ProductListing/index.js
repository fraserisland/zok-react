import React from 'react';
import ProductListItem from '../ProductListItem'
import { connect } from 'react-redux'

import './styles.css'

const ProductListing = (props) => {
    return ( 
        <div className="product-listing__container">
            {
                props.products.map( product =>
                    <div key={product.id}>
                        <ProductListItem
                            product={product} 
                            addToCart={props.addToCart}
                            removeFromCart={props.removeFromCart}
                            cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                        />
                    </div>
                )
            }
        </div>
    );
}
 
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);