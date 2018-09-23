import React from 'react';
import logo from '../../static/zokusha-logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cart from './shopping-cart-empty-side-view-svgrepo-com.svg'

import './styles.css'

class Navigation extends React.Component{

    state = {
        navOpen: true,
        ham: false
    }

    cartTotal = (cart) => {
        let total = 0
        cart.map((item) => {
            total += item.quantity
        })
        return total
    }

    componentDidMount() {
        this.handleResize()
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        let windowWidth = window.innerWidth
        if(windowWidth < 700){
            this.setState({ 
                navOpen: false,
                ham: false
            })
        } else {
            this.setState({ navOpen: true })
        }
    }
    
    ham = () => {
        this.setState({ham: !this.state.ham})
            if(window.innerWidth < 700) {
                this.setState({ navOpen: !this.state.navOpen })
            }
    }

    cartQuantity = (cart) => {
        let quantity = 0
        cart.map((item) => {
            quantity += item.quantity
        })
        return quantity
    }
    render(){
        return (  
            <div className="navbar">
                <div className="navbar__container">
                    <Link to="/"> <img className="navbar__logo" src={logo} alt="logo"/> </Link>
                    <div className="navbar__button">

                        <div onClick={this.ham} className={`nav-icon ${this.state.ham ? 'active' : ''}`}>
                            <div className="burger">
                                <div className="line_1 line"></div>
                                <div className="line_2 line"></div>
                                <div className="line_3 line"></div>
                            </div>
                            <div className="circle">
                                <div className="inner_circle"></div>
                            </div>
                        </div>

                    </div>
                    <div onClick={this.ham} className={this.state.navOpen ? "navbar__links" : "empty"}>
                        <Link to="/" className="navbar__link">Home</Link>
                        <Link to="/shop" className="navbar__link navbar__shop">Shop</Link>
                    </div>
                        <Link to="/cart" className="navbar__link navbar__cart"><img className="icon" src={cart} /> <span className="navbar__total">{this.cartTotal(this.props.cart)}</span></Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
 
export default connect(mapStateToProps)(Navigation);