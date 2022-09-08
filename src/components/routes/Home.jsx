import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/Products.slice'
import CardHome from '../Home/CardHome'
import './Styles/homeStyles.css'

const Home = () => {

    const products = useSelector(state => state.products)


    return (
        <div className='home'>
            <div className='home-container-card'>
                {
                    products?.map(product =>(
                        <CardHome
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home