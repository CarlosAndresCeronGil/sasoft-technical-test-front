import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getSingleSeller from '../../services/getSingleSeller'
import './styles.css'
import sellerImg from '../../sellerImage.png'

export default function Detail() {
    const [singleSeller, setSingleSeller] = useState({})
    const [loading, setLoading] = useState(true)
    let params = useParams()

    useEffect(function () {
        setLoading(true)
        getSingleSeller({ sellerId: params.sellerId })
            .then(data => {
                setSingleSeller(data)
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
        <div className='detail-body'>
            <h1>Detail of the vendor {singleSeller.firstName}</h1>
            <div className='info-seller-header'>
                <img src={sellerImg} alt='sellerImage'></img>
                <div className='info-seller-header-text'>
                    <h4>Full name: </h4>
                    {singleSeller.firstName} {singleSeller.lastName}
                    <h4>Contact email: </h4>
                    {singleSeller.email}
                </div>
            </div>
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
