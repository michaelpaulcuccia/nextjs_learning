import React from 'react';
import Link from 'next/link';
import articleStyle from '../styles/Article.module.css';

const ArticleCard = ({ article }) => {

    //trim text and add elipsis
    let bod = article.body;
    let trim = bod.substr(0, 135);
    let trail = "...";
    let newBody = trim + trail;

    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyle.card}>
                <h3>{article.title}</h3>
                <p>{newBody.substr(0, 2) == "&1" ? newBody.substr(3) : newBody}</p>
            </a>
        </Link>
    )
}

export default ArticleCard
