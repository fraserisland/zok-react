import React, {Component} from 'react';
import './styles.css'
import cross from './multiply.svg'
import Select from 'react-select';

const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 10, label: "6" },
    { value: 15, label: "7" },
    { value: 20, label: "8" }
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: '24px',
      'min-height': '24px',
      'font-size': '13px',
      'margin-left': '10px'
    }),
};

class Card extends Component {
    state = {
        donkey: 1
    }
    render(){
        const { selectedOption } = this.state;
    return ( 
        <div className="cart-card__container"> 
            <img className="cart-card__img"
                title={this.props.product.name}
                src={`/images/${this.props.product.image}`} 
            />
            <div>
                <p className="cart-card__price">${this.props.product.price}</p>
                <div className="cart-card__desc">
                    <p className="card__title">{this.props.product.type}</p> 
                    <p className="card__name">{this.props.product.name}</p> 
                </div>
                <div className="card__qty-holder">
                Qty
                <Select
                    className="dropdown__qty"
                    styles={customStyles}
                    placeholder={this.props.product.quantity}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
                </div>
            </div>
            <div className="cross-holder">
                <img className="cursor cross" src={cross} onClick={this.props.removeAll} />
            </div>
        </div>
     );
    }
}
 
export default Card;