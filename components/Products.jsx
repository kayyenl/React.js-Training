import React from 'react';
import productslist from './productslist';
import Product from './Product';

const Products = () => {
    const products = productslist.map(elem => {
        return <Product  
        key = {elem.id}
        item = {elem} />
    })
    return (
        <div>
            {products}
        </div>
    );
}

export default Products;
