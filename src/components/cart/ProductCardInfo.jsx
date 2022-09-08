import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'
import './cartStyles.css'

const ProductCardInfo = ({product, getAllProductsCart}) => {

    const handleDeleteProduct = () =>{
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data)
                getAllProductsCart()
            })
            .catch(err => console.log(err))
    }
    return (
        <article className='cart__item'>
            <header className='cart__item-header'>
                <h4 className='cart__category'>{product.brand}</h4>
                <h3 className='cart__name'>{product.title}</h3>
            </header>
            <span className='cart_quantity'>{product.productsInCart.quantity}</span>
            <div>
                <span className='cart__total-label'>Price:</span>
                <p className='cart__total-number'>${product.price}</p>
            </div>

            <button className='cart__item-btn'><i onClick={handleDeleteProduct} className="fas fa-trash"></i></button>
        </article>
    )
}

export default ProductCardInfo