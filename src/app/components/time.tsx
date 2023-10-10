

"use client"
import { revalidateTag } from 'next/cache'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


type Props = {
    dateTime: string
}

export default function Time({ dateTime }: Props) {



    const router = useRouter()

    // useEffect(() => {
    //     router.refresh()
    // }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex flex-col gap-5'>
            <p>Esta es la pagina del tiempo</p>
            <p>{dateTime}</p>
            <Link href="/" className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded'
                // onClick={() => {
                //     handleRevalidation()
                // }}
            >
                Ir a la pagina principal
            </Link> 
{/* 
            <button className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded' onClick={() => {
                router.push('/')
                router.refresh()
            }}>
                Ir a la pagina principal
            </button> */}
        </div>
    </main>
  )
}