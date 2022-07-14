export default function getSingleSeller({ sellerId }) {
    const API_URL = `https://localhost:7054/api/Seller/${sellerId}`

    return fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            return data
        })
}
