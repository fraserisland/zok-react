import React from 'react'

import ProductListing from '../../components/ProductListing'
import data from '../../data/products.json'
import './styles.css'

const HomePage = () => {
    return (  
        <div className="shop__container">
            <ProductListing products = {data.products} />
        </div>
    );
}
 
export default HomePage;