import React from 'react';
import Link from 'next/link';

const article = ({ article }) => {

    return (
        <>
            <h2>{article.title}</h2>
            <br />
            <p>{article.body}</p>
            <br />
            <Link href='/'><a style={{ color: 'blue', fontSize: '26px', fontWeight: 'bold' }} >Go Back</a></Link>
        </>
    )
}

export const getServerSideProps = (context) => {

    const id = context.params.id;
    const articles = require('../../../localData/data.json');

    let article = {}
    for (let i = 0; i < articles.length; i++) {
        if (id == articles[i].id) {
            article.id = articles[i].id;
            article.title = articles[i].title;
            article.body = articles[i].body;
            break;
        }
    }

    return {
        props: {
            article
        }
    }
}

export default article;
