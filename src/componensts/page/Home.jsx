import React from 'react'
import Blogs from '../Blogs'
import Photogallery from '../Photogallery'


const Home = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat-x"> 
      {/* className="div bg-home-bg z-10  bg-repeat-y" */}
        
        <Blogs/>
        <Photogallery/>
    </div>

  )
}

export default Home
