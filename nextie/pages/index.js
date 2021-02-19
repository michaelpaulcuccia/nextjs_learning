import Head from 'next/head';

export default function Home({ articles }) {

  return (
    <div>
      <h3>
        <Head>
          <title>Head</title>
        </Head>
        Hello, from index.js
      </h3>
      {articles.map(article => <h4 key={article.id}>{article.title}</h4>)}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }

}