import React from 'react';
import ArticleCard from './ArticleCard';
import articleStyle from '../styles/Article.module.css';

const Article = ({ articles }) => {
    return (
        <div className={articleStyle.grid}>
            {articles.map(article =>
                <ArticleCard key={article.id} article={article} />)}
        </div>
    )
}

export default Article
