

export const fetchTime = async () => {

    const requestOptions: RequestInit = {
        cache: 'no-store'
    }

    const url = 'http://worldtimeapi.org/api/timezone/America/Costa_Rica'

    const res = await fetch(url, requestOptions)
    const data = await res.json()
    return data
}