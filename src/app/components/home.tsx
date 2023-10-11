"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


type Props = {
    dateTime: string
    handleRevalidate: () => void 
}

export default function Home({ dateTime, handleRevalidate }: Props) {

    const router = useRouter()


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex flex-col gap-5'>
            <p>Esta es la pagina principal</p>
            <p>{dateTime}</p>

            <Link href="/time" onClick={() => {handleRevalidate && handleRevalidate()}} className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded'>
                Ir a la pagina de tiempo - link
            </Link> 


            {/* <button className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded' onClick={() => {
               router.push('/time')
               router.refresh()
            }}>
                Ir a la pagina de tiempo
            </button>  */}

            
            <button className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded' onClick={() => {
                handleRevalidate()
                router.push('/time')  
            }}>
                Ir a la pagina de tiempo - boton
            </button>

        </div>
    </main>
  )
}
