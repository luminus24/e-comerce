import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { setProducts } from '../../store/slices/Products.slice'
import ProductDescription from '../productDetail/ProductDescription'
import SimilarProducts from '../productDetail/SimilarProducts'

const ProductDetail = () => {

    const [productInfo , setProductInfo] = useState()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(res =>setProductInfo(res.data.data.product))
            .catch(err => console.log(err))
    }, [])

    const {id} = useParams()

    return (
        <main>
            <ProductDescription
                productInfo={productInfo}
            />
            <SimilarProducts
                productInfo={productInfo}
            />
        </main>
    )
}

export default ProductDetail