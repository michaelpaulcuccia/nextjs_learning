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

  //local JSON
  const articles = require('../localData/data.json');

  //API
  /*
  const url = 'http://localhost:3000';
  const articles = await fetch(`${url}/api/articles`);
  console.log(articles)
  */

  return {
    props: {
      articles
    }
  }

}

/*
You should use getStaticProps if:
The data required to render the page is available at build time ahead of a user’s request.
The data comes from a headless CMS.
The data can be publicly cached (not user-specific).
The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
*/