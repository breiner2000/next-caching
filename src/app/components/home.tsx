"use client"
import Link from 'next/link'

type Props = {
    dateTime: string
}

export default function Home({ dateTime }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <p className='mb-8'>Esta es la pagina principal</p>
            <p className='mb-8'>{dateTime}</p>
            <Link href="/time"  className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded'> 
                Ir a la pagina de tiempo
            </Link> 
        </div>
    </main>
  )
}
