import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);


  const UpdateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults);
    setLoading(false);

    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `News Monkey - ${props.category[0].toUpperCase() + props.category.substr(1)}`
    UpdateNews();
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(articles.concat(parseData.articles));
    setTotalResult(parseData.totalResults);
  };


  return (
    <div className="container my-3">
      <h1 className='text-center text-info' style={{ margin: '35px 0',marginTop:' 60px' }}>News Monkey - Top headlines of {props.category[0].toUpperCase() + props.category.substr(1)}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}>
        <div className="container">
          <div className="row">
            {
              articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishDate={element.publishedAt} sources={element.source.name} />
                </div>

              })
            }
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )

}

News.defaultProps = {
  country: 'in',
  pageSize: 20,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
