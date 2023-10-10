import 'server-only'
import Time from '../components/time'
import { fetchTime } from '../service'
import { revalidateTag } from 'next/cache'


export default async function TimePage() {

    const time = await fetchTime()

    const { datetime } = time

    console.log('server-time', datetime)

    // async function revalidate() { 
    //     "use server"
    //     revalidateTag('time')
    // }

  return (
    <Time dateTime={datetime} />
  )
}

