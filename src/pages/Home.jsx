import React from 'react'
import "./Home.css"

const Home = () => {
  return (
     <div className="home">

<div className='wall'>
      <div className="content">
      <img src="iste-logo.png" alt="ISTE Logo" className="logo" />
      <h1><b>ISTE GECK</b></h1>
      <h3>INDIAN SOCIETY FOR TECHNICAL EDUCATION</h3>
      <p>GEC KOZHIKODE STUDENTS CHAPTER KE-70</p>
      </div>
</div>
     <div className="welcome-section">
        <div className="line line-top"></div>
        <h1 className="welcome-text">WELCOME</h1>
        <div className="bottom-container">
            <div className="line line-bottom"></div>
            <span className="subtitle">GATEWAY TO EXPLORE US</span>
        </div>
      </div>



    </div>
   
  )
}

export default Home