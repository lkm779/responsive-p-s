export const fetchApi = async () => {
    const url = 'https://pres-backend.herokuapp.com/api/v1/public_events'

    let response = await fetch(url)
    return await response.json()
}