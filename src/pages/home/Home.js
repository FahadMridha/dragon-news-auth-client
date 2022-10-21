import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../shared/newsSummary/NewsSummary';

const Home = () => {
    const allNews=useLoaderData()
    return (
        <div>
            <h3>All news are : {allNews.length}</h3>
            <div>
                {
                    allNews.map(news=><NewsSummary
                    key={news._id}
                    news={news}
                    ></NewsSummary>)
                }
            </div>
        </div>
    );
};

export default Home;