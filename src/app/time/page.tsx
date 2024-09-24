import Time from '../components/time'
import { fetchTime } from '../service'
import { revalidatePath, revalidateTag } from 'next/cache'


export default async function TimePage() {

  const time = await fetchTime()

  const { datetime } = time

  // !EXPERIMENTAL EN NEXT 13 Y DOBLE PETICION EN NEXT 14
  async function revalidate() {
    "use server"
    // revalidatePath('/')
    // revalidateTag('time')
  }

  return (
    <Time dateTime={datetime} handleRevalidate={revalidate} />
  )
}

