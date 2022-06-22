import Head from 'next/head'
import ContactPage from '../components/Contact/Contact'
import FadeHome from '../components/Homepage/FadeHome'
function HomePage() {
  return (
    <>
      <div>
        <Head>
          <title>Starter Template</title>
        </Head>
        <div>Content</div>
        <div>
          <FadeHome />
        </div>
        <ContactPage />
        <div>Footer below here</div>
      </div>
    </>
  )
}

export default HomePage
