import 'server-only'
import Home from './components/home'
import { fetchTime } from './service'
import { revalidateTag } from 'next/cache'


export default async function HomePage() {

    const time = await fetchTime()

    const { datetime } = time

    console.log('home-time', datetime)

    // async function revalidate() { 
    //     "use server"
    //     revalidateTag('time')
    // }
  return (
    <Home dateTime={datetime}/>
  )
}


