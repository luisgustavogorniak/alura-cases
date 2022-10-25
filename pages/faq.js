import Head from 'next/head'
import Link from 'next/link'


export async function getStaticProps() {
  console.log("whatever I type here")
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq = await fetch(FAQ_API_URL)
    .then((fetchResponse) => {
      return fetchResponse.json()
    })
    .then((response) => {
      return response;
    })

  return {
    props: {
      faq
    },
  }
}

export default function FAQPage({ faq }) {
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases</title>
      </Head>
      <h1>Alura Cases - Página de Perguntas FAQPage</h1>
      <Link href="/">
        Ir para a Home
      </Link>
      <ul>
        {faq.map(({ question, answer }) => (
          <article>
            <h2 key={question}>
              {question}
            </h2>
            <p>
              {answer}
            </p>
            <li></li>
          </article>
        ))}
      </ul>
    </div>
  )
}