"use client"
import Link from 'next/link'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

type Props = {
    dateTime: string 
}

export default function Home({ dateTime }: Props) {

    const router = useRouter()

    // useEffect(() => {
    //     router.refresh()
    // }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex flex-col gap-5'>
            <p>Esta es la pagina principal</p>
            <p>{dateTime}</p>

            <Link href="/time" className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded'
                // onClick={() => {
                //     handleRevalidation()
                // }}
            >
                Ir a la pagina de tiempo
            </Link> 
{/* 
            <button className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded' onClick={() => {
               router.push('/time')
               router.refresh()
            }}>
                Ir a la pagina de tiempo
            </button> */}
        </div>
    </main>
  )
}
