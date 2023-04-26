import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData()
    // console.log(id);
    return (
        <div>
            <h2>This is Category: {categoryNews.length}</h2> 
            {
                categoryNews.map(news => <NewsCart news={news} key={news._id}></NewsCart>)
            }
        </div>
    );
};

export default Category;