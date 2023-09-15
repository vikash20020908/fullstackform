import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import Cards from './Component/Cards'
import './App.css' 

export default class App extends Component {
  
  constructor() {
    super();
    console.log("cons")
    this.state = {
      articles : [],
      loading : false
    }
  };
   async componentDidMount() {
    console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c9c3f56a74f546f2b78a171313cae138";
    let data = await fetch(url);
    let passedData = await data.json();
    this.setState({articles:passedData.articles})
  }
  render() {
    console.log("render")
    return (
      <div>
        <Navbar/>
        <div className='App'>
        <h2>TOP-HEADLINES</h2>
        <div className='row'>
        {this.state.articles.map((element) => {
         return  <div className='col-md-3' key = {element.url}>
        <Cards title= {element.title?element.title.slice(0,20):""} description = {element.description?element.description.slice(0,50):""} imageurl = {element.urlToImage} newsurl = {element.url}/>
        </div>
        })}
        </div>
        </div>
      </div>
    )
  }
}
