import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css';
import ReactMarkdown from 'react-markdown'

export default function Post({ id, frontmatter, content }) {
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{frontmatter.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={frontmatter.date} />
        </div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: { ...postData },
  };
}