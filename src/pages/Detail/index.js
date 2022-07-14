import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getSingleSeller from '../../services/getSingleSeller'

export default function Detail() {
    const [singleSeller, setSingleSeller] = useState({})
    const [loading, setLoading] = useState(true)
    let params = useParams()

    useEffect(function () {
        setLoading(true)
        getSingleSeller({ sellerId: params.sellerId })
            .then(data => {
                setSingleSeller(data)
                console.log("data", data)
                console.log("singleSeller", singleSeller)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            }
            )
    }, [params.sellerId])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Detail of the vendor {singleSeller.firstName}</h1>
            <h2>Full name: </h2>
            {singleSeller.firstName} {singleSeller.lastName}
            <h2>Contact email: </h2>
            {singleSeller.email}
            <h2>Number of products offered: </h2>
            {singleSeller.products.length}
            <h2>Products: </h2>
            {
                singleSeller.products.map(product => (
                    <div key={product.productId}>
                        <h3>Name of the Product:</h3>
                        {product.name}
                        <h3>Description of the Product:</h3>
                        {product.description}
                    </div>
                ))
            }
                    </div>
                )
}
