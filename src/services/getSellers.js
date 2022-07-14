export default function getSellers() {

    const API_URL = 'https://localhost:7054/api/Seller'

  return fetch(API_URL)
    .then(response => response.json())
    .then(data =>  {
        return data
    })
}
