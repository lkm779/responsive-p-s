export const fetchApi = async () => {
    const url = 'http://localhost:3000/api/v1/public_events'

    let response = await fetch(url)
    return await response.json()
}