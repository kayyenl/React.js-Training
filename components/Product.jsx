import React from 'react';

const Product = (props) => {
    const styles = {
        fontWeight : 'bold'
    }
    return (
        <div className='product'>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p style={styles}>{props.price}</p>
            <hr />
        </div>
    );
}

export default Product;
