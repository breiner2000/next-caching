import Home from './components/home'
import { fetchTime } from './service'
import { revalidatePath, revalidateTag } from 'next/cache'


export default async function HomePage() {

  const time = await fetchTime()

  const { datetime } = time

  // !EXPERIMENTAL EN NEXT 13 Y DOBLE PETICION EN NEXT 14
  async function revalidate() {
    "use server"
    // revalidatePath('/time')
    // revalidatePath('/')
  }

  return (
    <Home dateTime={datetime} handleRevalidate={revalidate} />
  )
}


