export const dynamic = 'force-dynamic'
export const revalidate = 0

export const fetchTime = async () => {

    const url = 'http://worldtimeapi.org/api/timezone/America/Costa_Rica'

    console.log('peticion se ejecuta')

    const requestOptions: RequestInit = {
        cache: 'no-store',
        next: { 
            // revalidate:0, 
            // tags: ['time']
        }
    
    }
    
    const res = await fetch(url, requestOptions)
    const data = await res.json()

    return data
}