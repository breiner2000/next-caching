import Time from '../components/time'
import { fetchTime } from '../service'

export default async function TimePage() {

    const time = await fetchTime()

    const { datetime } = time

    console.log('server-time', datetime)

  return (
    <Time dateTime={datetime}/>
  )
}