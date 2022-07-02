export const fetchApi = async () => {
    const url = 'https://pres-backend.herokuapp.com/api/v1/public_events'

    return await fetch(url)
        .then(response => {
            if (response.ok) {
                response.json()
            } else {
                throw new Error('No upcoming events')
            }
        })
        .catch(() => false)
}