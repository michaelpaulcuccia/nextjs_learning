import React from 'react';
import Link from 'next/link';
import articleStyle from '../styles/Article.module.css';

const ArticleCard = ({ article }) => {

    let bod = article.body;
    let trim = bod.substr(0, 135);
    let trail = "...";
    let newBody = trim + trail;

    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyle.card}>
                <h3>{article.title}</h3>
                <p>{newBody}</p>
            </a>
        </Link>
    )
}

export default ArticleCard
