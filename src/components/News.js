import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
 
  static defaultProps ={
    country:'in',
    pageSize:20,
    category:'general'
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResult:0
    }
    document.title = `News Monkey - ${this.props.category[0].toUpperCase() + this.props.category.substr(1)}`
  }
 

  async UpdateNews (){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b83b88818374840a810be52f39212b5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles:parseData.articles, 
        totalResult:parseData.totalResults,
        loading: false
      })

  }

  async componentDidMount(){
      this.UpdateNews();
  }

  // handleNextClick = async () => {
  //   this.setState({page: this.state.page + 1});
  //   this.UpdateNews()
  // }

  // handlePrevClick = async ()=>{
  //   this.setState({page: this.state.page - 1});
  //   this.UpdateNews()
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b83b88818374840a810be52f39212b5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles:this.state.articles.concat(parseData.articles), 
        totalResult:parseData.totalResults,
        loading: false
      })
  };

  render() {
    return (       
        <div className="container my-3">
          <h1 className='text-center text-info' style={{margin:'35px 0'}}>News Monkey - Top headlines of {this.props.category[0].toUpperCase() + this.props.category.substr(1)}</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner />}>
          <div className="container">
            <div className="row">
              {
                // !this.state.loading && this.state.articles.map((element)=>{
                //   return <div className="col-md-4" key={element.url}>
                //     <NewsItem  title={element.title} description={element.description} 
                //     imageUrl={element.urlToImage} 
                //     newsUrl={element.url}
                //     author={element.author}
                //     publishDate={element.publishedAt} sources={element.source.name} />
                //   </div>
                // })

                this.state.articles.map((element) => {
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
          {/* <div className="container d-flex justify-content-between mt-5">
              <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePrevClick}>Previous</button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNextClick}>Next</button>
          </div> */}
        </div>   
    )
  }
}

export default News