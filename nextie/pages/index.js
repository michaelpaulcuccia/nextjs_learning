import Head from 'next/head';
import ArticleList from '../components/Article';

export default function Home({ articles }) {

  return (
    <div>
      <h3>
        <Head>
          <title>Exceptional</title>
          <meta lang='en'></meta>
        </Head>
      </h3>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const articles = require('../localData/data.json');

  return {
    props: {
      articles
    }
  }

}