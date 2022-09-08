import React from 'react'

const ProductPurchase = ({product}) => {
    console.log(product);
    return (
        <li className='card-purchase__item'>
            <h4 className='card-purchase__name'>{product.title}</h4>
            <span className='card-purchase__quantity'>Quantity: {product.productsInCart.quantity}</span>
            <span className='card-purchase__price'>Price: ${product.price}</span>
        </li>
    )
}

export default ProductPurchase