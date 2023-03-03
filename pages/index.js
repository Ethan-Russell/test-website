import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Ethan Russell! I love many different kinds of creating, from woodworking to cooking to designing algorithms, many of which I don't often get to share with people. This website is an outlet for me to document and share some of the fun projects I do outside of work, as well as other things that I feel like sharing.</p>
      </section>
    </Layout>
  )
}
