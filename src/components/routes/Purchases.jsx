import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchaseCard from '../purchases/PurchaseCard'

const Purchases = () => {
    const [purchases, setPurchases] = useState()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
        axios.get(URL, getConfig())
            .then(res => setPurchases(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])
    console.log(purchases);
    return (
        <div className='purchase'>
            {
                purchases?.map(purchase =>(
                    <PurchaseCard
                        key={purchase.id}
                        purchase={purchase}
                    />
                ))
            }
        </div>
    )
}

export default Purchases