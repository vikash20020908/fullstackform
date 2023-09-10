import React from 'react'
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';


function NewsApi() {
  return (
    <div>
      <Navbar/>
  <div className='color'>
  <h1 className='App'>News Networks</h1>
  <div className='row'>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  </div>
  
 
  <div className='row my-4' >
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  </div>
  
 
  <div className='row my-4'>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  </div>
  
 
  <div className='row my-4'>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  <div className='col-md-3'>
  <Cards title = "news"  />
  </div>
  </div>
  </div>
    </div>
  );
}

export default NewsApi
