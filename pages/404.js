import Link from 'next/link'

export default function Page404() {
  return (
    <div>
      <h1>Alura Cases - 404 - não encontramos a página :O</h1>
      <Link href="/">
        Ir para a Home
      </Link>
    </div>
  )
}