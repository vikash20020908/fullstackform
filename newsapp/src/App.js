import React from 'react'
import Navbar from './Component/Navbar'
import Cards from './Component/Cards'
import './App.css' 

// eslint-disable-next-line no-undef
export default class App extends Component {
  
// function App() {

//   const [articles , setArticles] = useState([]);
//   const [loading ,setLoading] = useState(false);

//    useEffect ( () => {
//     main();
//    })
  
//   return (
//     <div>
//     <Navbar/>
//     <div className='App'>
//     <h2>TOP-HEADLINES</h2>
//     <div className='row'>
//     {main.articles.map((element) => {
//      return  <div className='col-md-3' key = {element.url}>
//     <Cards title= {element.title?element.title.slice(0,20):""} description = {element.description?element.description.slice(0,50):""} imageurl = {element.urlToImage} newsurl = {element.url}/>
//     </div>
//     })}
//     </div>
//     </div>
//   </div>

//   )
// }
// export default App;
async function main () {
  console.log("cdm")
  let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c9c3f56a74f546f2b78a171313cae138";
  let data = await fetch(url);
  let passedData = await data.json();
  setArticles({articles:passedData.articles}),
  setLoading();
}
  constructor() {
    super();
    console.log("cons")
    this.state = {
      articles : [],
      loading : false
    }
  };
  
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
  }//
}
