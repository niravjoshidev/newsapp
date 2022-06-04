import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishDate, sources } = props;
  return (
    <div className="card">
      <img src={!imageUrl ? "https://feeds.abplive.com/onecms/images/uploaded-images/2022/05/30/43857daab5fb0d1ddf7c2800f11017cf_original.jpg" : imageUrl} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}{sources && <span className="badge rounded-pill text-bg-info">{sources}</span>}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            By {!author ? 'Unknown' : author} on {new Date(publishDate).toGMTString()}
          </small>
        </p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-info">Read More</a>
      </div>
    </div>

  )

}

export default NewsItem
