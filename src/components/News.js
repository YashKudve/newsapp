import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize:8,
    category: "general"
  }

  // static PropTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string
  // }
  constructor() {
    // console.log("This is a constructor");
    super();
    this.state = {
      // articles: this.articles
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    // console.log("This is CDM");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        articles: parsedData.articles,
        loading: false
       });
  }

  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })

  }

  handleNextClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })

  }

  render() {
    // console.log("This is render");
    return (
      <div className='container my-5'>
        <h1 className='text-center'> <i>NewsMonkey - Today's Top Headlines!</i></h1>

        {/* if loading is true then show the spinner */}
        {this.state.loading && <Spinner />}  

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 80) : "Description Unavailable ! To read complete article click Read More"} imageUrl={element.urlToImage ? element.urlToImage : "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=600"} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>

          })}

        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" class="btn btn-bg btn-dark my-2" onClick={this.handlePreviousClick}>&lt; Previous</button>
          <button type="button" class="btn btm-bg btn-dark my-2" onClick={this.handleNextClick}>Next &#62;</button>
        </div>
      </div>
    )
  }
}

export default News
