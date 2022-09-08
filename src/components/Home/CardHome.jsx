import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import './CardHomeStyles.css'

const CardHome = ({product}) => {

    const navigate = useNavigate()
    const handleClick = () =>{
        navigate(`/product/${product.id}`)
    }

    const handleAddCard = e =>{
        e.stopPropagation()
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
        const obj = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL,obj, getConfig())
            .then(res =>console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <article className='card-home' onClick={handleClick} >
            <header className='card-home__header'>
                <img className='card-home__img' src={product.productImgs[0]} alt="Product Image" />
            </header>
            <div className='card-home__body'>
                <h3 className='card-home__name'>{product.title}</h3>
                <section className='card-home__price'>
                    <h4 className='card-home__price-label'>Price:</h4>
                    <span className='card-home__price-value'>{product.price}</span>
                </section>
                <button className='card-home__btn' onClick={handleAddCard}><i className="fas fa-cart-plus fa-lg "></i></button>
            </div>
        </article>
    )
}

export default CardHome