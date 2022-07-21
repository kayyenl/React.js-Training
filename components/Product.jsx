import React from 'react';

const Product = (props) => {
    const styles = {
        fontWeight : 'bold'
    }
    return (
        <div className='product'>
            <h1>{props.item.name}</h1>
            <p>{props.item.description}</p>
            <p style={styles}>{props.item.price}</p>
            <hr />
        </div>
    );
}

export default Product;
