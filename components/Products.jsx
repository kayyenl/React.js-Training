import React from 'react';
import productslist from './productslist';
import Product from './Product';

const Products = () => {
    const products = productslist.map(elem => {
        return <Product  
        key = {elem.id}
        name={elem.name} 
        price={elem.price}
        description={elem.description} />
    })
    return (
        <div>
            {products}
        </div>
    );
}

export default Products;
