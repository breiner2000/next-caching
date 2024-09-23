import Home from './components/home'
import { fetchTime } from './service'
import { revalidatePath, revalidateTag } from 'next/cache'


export default async function HomePage() {

  const time = await fetchTime()

  const { datetime } = time

  // !EXPERIMENTAL Y DOBLE PETICION
  async function revalidate() {
    "use server"
    // revalidatePath('/time')
    // revalidatePath('/')
  }

  return (
    <Home dateTime={datetime} handleRevalidate={revalidate} />
  )
}


