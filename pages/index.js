import Head from 'next/head'
import ContactPage from '../components/Contact/Contact'

function HomePage() {
  return (
    <>
      <div>
        <Head>
          <title>Starter Template</title>
        </Head>
        <div>Content</div>
        <ContactPage />
        <div>Footer below here</div>
      </div>
    </>
  )
}

export default HomePage
