import { revalidatePath } from "next/cache"


export const fetchTime = async () => {

    const url = 'http://worldtimeapi.org/api/timezone/America/Costa_Rica'

    const requestOptions: RequestInit = {
        // cache: 'no-cache',
        cache: 'no-store',
        next: { 
            // ! REVALIDATE NO FUNCIONA
            // revalidate:0, 
            // ! REVALIDATE TAG DOBLE PETICION
            // tags: ['time']
        }
    }

    // ! REVALIDATE PATH NO FUNCIONA ACA
    // revalidatePath('/time')

    const res = await fetch(url, requestOptions)
    const data = await res.json()

    return data
  
}