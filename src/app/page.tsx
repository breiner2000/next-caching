
import Home from './components/home'
import { fetchTime } from './service'

export default async function HomePage() {

    const time = await fetchTime()

    const { datetime } = time

    console.log('home-time', datetime)
  return (
    <Home dateTime={datetime} />
  )
}
