import React from 'react';
import Link from 'next/link';

const article = ({ article }) => {

    return (
        <>
            <h2>{article.title}</h2>
            <p>{article.type}</p>
            <p>{article.body}</p>
            <br />
            <Link href='/'><a style={{ color: 'blue', fontSize: '26px', fontWeight: 'bold' }} >Go Back</a></Link>
        </>
    )
}

export const getServerSideProps = (context) => {

    //get article using ID
    const id = context.params.id;
    const articles = require('../../../localData/data.json');

    //create article object
    let article = {};

    //build object
    for (let i = 0; i < articles.length; i++) {
        if (id == articles[i].id) {
            article.id = articles[i].id;
            article.title = articles[i].title;
            article.body = articles[i].body;
            article.type = [articles[i].type];
            break;
        }
    }

    //take care of new-line character
    if (article.body.includes('&1')) {
        //https://stackoverflow.com/questions/13340131/string-prototype-replaceall-not-working
        //global css - white-space: pre-wrap;
        const string = JSON.stringify(article.body);
        const updatedBody = string.replace(/&1/g, '\n     ');
        article.body = updatedBody;
    }

    //trim quotation marks
    let articleToBeTrimmed = article.body;
    let length = articleToBeTrimmed.length - 2;
    const newString = articleToBeTrimmed.substr(1, length);
    article.body = newString;

    return {
        props: {
            article
        }
    }
}

/*
You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.
*/

export default article;