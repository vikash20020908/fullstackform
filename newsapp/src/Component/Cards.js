import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    let {title, description ,imageurl,newsurl} = this.props

    return (
      
      <div className='container '>
        <div className="card" style={{width: "18rem"}}>
        <img src=  {!imageurl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageurl} className="card-img-top" alt="newsdetails"/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsurl} target='_blank' rel = "noreferrer" className="btn btn-primary">Read more...</a>
        </div>
        </div>
      </div>
    )
  }
}
