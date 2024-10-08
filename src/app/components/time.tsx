"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'



type Props = {
    dateTime: string
    handleRevalidate: () => void
}

export default function Time({ dateTime, handleRevalidate }: Props) {

    const router = useRouter()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='flex flex-col gap-5'>
                <p>Esta es la pagina del tiempo</p>
                <p>{dateTime}</p>

                {/* // ! NO FUNCIONA */}
                <Link href="/" onClick={() => { }} className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded'>
                    Ir a la pagina principal - normal cached
                </Link>

                {/* // ! DOBLE PETICION, FUNCIONA IGUAL QUE EL BUTTON CON PUSH */}
                <Link href="/" onClick={() => { handleRevalidate() }} className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded'>
                    Ir a la pagina principal - revalidate
                </Link>

                {/* // ! SOLUCION NO OPTIMA, REFRESCA LA PAGINA, TRIPLE PETICION */}
                <button className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded' onClick={() => {
                    router.push('/')
                    router.refresh()
                }}>
                    Ir a la pagina principal - push refresh
                </button>

                {/* // ! DOBLE PETICION */}
                <button className='bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded'
                    onClick={() => {
                        handleRevalidate()
                        router.push('/')
                    }}>
                    Ir a la pagina principal - revalidate push
                </button>

            </div>
        </main>
    )
}