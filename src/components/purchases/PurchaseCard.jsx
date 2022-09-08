import React from "react"
import ProductPurchase from "./ProductPurchase"
import './purchasesStyles.css'

const PurchaseCard = ({purchase}) => {
    const data = new Date(purchase.createdAt)
    const day = data.getDate()
    const month = data.getMonth()
    const year = data.getFullYear()
    const hours = data.getDay()
    const minutes = data.getMinutes()

    return (
        <article className="card-purchase">
            <h3 className="card-purchase__date">{`${day}/${month}/${year} `}</h3>
            <ul className="card-purchase-body">
                {
                    purchase.cart.products.map(product => (
                        <ProductPurchase
                            key={product.id}
                            product={product}
                            />
                    ))
                }
            </ul>
        </article>
    )
}

export default PurchaseCard