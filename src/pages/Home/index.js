import React, { useState, useEffect } from 'react'
import getSellers from '../../services/getSellers'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Home() {
    const [sellers, setSellers] = useState([])

    useEffect(() => {
        getSellers()
        .then(data => setSellers(data))
    }, [])

    return (
        <div>
            <h1>Look what these vendors have to offer!</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact Email</th>
                        <th>Number of Products offered</th>
                        <th>See the products</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map(seller => (
                        <tr key={seller.sellerId}>
                            <td>{seller.firstName}</td>
                            <td>{seller.lastName}</td>
                            <td>{seller.email}</td>
                            <td>{seller.products.length}</td>
                            <td>
                                <Link to={`/seller/${seller.sellerId}`}>
                                    Go
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
