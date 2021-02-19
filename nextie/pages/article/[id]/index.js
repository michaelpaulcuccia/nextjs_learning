import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const article = ({ article }) => {

    // const router = useRouter();
    // const { id } = router.query

    return (
        <>
            ID: {article.id}
            <h2>{article.title}</h2>
            <br />
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

export const getServerSideProps = async (context) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}


// export const getServerSideProps = (context) => {

//     const id = context.params.id;
//     const articles = require('../../../localData/data.json');

//     let article = {}
//     for (let i = 0; i < articles.length; i++) {
//         if (id == articles[i].id) {
//             article.id = articles[i].id;
//             article.title = articles[i].title;
//             article.body = articles[i].body;
//             break;
//         }
//     }

//     return {
//         props: {
//             article
//         }
//     }
// }

export default article;
