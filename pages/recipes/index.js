import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '/styles/utils.module.css'
import { getSortedPostsData } from '../../lib/recipes';
import Link from 'next/link';
import Date from '../../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/recipes/${id}`}>{title}</Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
