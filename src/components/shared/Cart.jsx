import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCardInfo from '../cart/ProductCardInfo'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()
    const [totalPrice, setTotalPrice] = useState()

    const getAllProductsCart = () =>{
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
        .then(res => {
            const products = res.data.data.cart.products
            setCartProducts(products)
            const total = products.reduce((acc, cv) => {
                return Number(cv.price) * cv.productsInCart.quantity + acc
            }, 0)
            setTotalPrice(total)
        })
        .catch(err =>setCartProducts())
    }
    useEffect(() => {
        getAllProductsCart()
    }, [])

    const handleCheckout = () =>{
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            street: 'Green St. 1456',
            colony: 'Southwest',
            zipCode: '12345',
            city: 'USA',
            references: 'Some references'
        }
        axios.post(URL, obj, getConfig())
        .then(res =>{
            console.log(res.data)
            getAllProductsCart()
            setTotalPrice(0)
        })
        .catch(err => console.log(err))
    }

    return (
        <article className='cart'>
            <h2 className='cart-title'>Carrito de compras</h2>
            <div className='cart__container-item'>
                {
                    cartProducts?.map(product =>(
                        <ProductCardInfo
                            key={product.id}
                            product={product}
                            getAllProductsCart={getAllProductsCart}
                        />
                    ))
                }
            </div>
            <hr className='cart__hr'/>
            <footer className='cart__footer'>
                <div className='cart-total'>
                    <span className='cart__total-global-label'>Precio Total: </span>
                    <p className='cart__total-global-value'> ${totalPrice}</p>
                </div>
                <button onClick={handleCheckout} className='cart-btn'>Checkout</button>
            </footer>
        </article>
    )
}

export default Cart