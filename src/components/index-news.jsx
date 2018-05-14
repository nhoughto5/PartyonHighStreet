import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const NewsWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 8rem 1rem;
`;

const NewsItem = styled.div`
    padding: 2rem 0;
    margin: 2rem 0;
    padding-left: 2rem;
    border-left: 4px solid rgb(246, 9, 119);

    &:hover {
        background-color: rgba(246, 9, 119, 0.1);
        cursor: pointer;
    }

    a {
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 0.5rem;
        color: rgba(0,0,0,0.6);
    }
`;

const LatestNews = () => (
    <NewsWrapper>
        <h2>Latest News</h2>
        <NewsItem>
            <h3>Some News Headline</h3>
            <p>Some news description blah blah blah</p>
            <Link to='/'>Read More</Link>
        </NewsItem>
        <NewsItem>
            <h3>Some News Headline</h3>
            <p>Some news description blah blah blah</p>
            <Link to='/'>Read More</Link>
        </NewsItem>
        <NewsItem>
            <h3>Some News Headline</h3>
            <p>Some news description blah blah blah</p>
            <Link to='/'>Read More</Link>
        </NewsItem>
    </NewsWrapper>
)

export default LatestNews