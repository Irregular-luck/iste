import React from 'react'
import "./Home.css"
import "./Home-about.css"

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

<div class="about-section-container">
  <div class="about-title">ABOUT US</div>

  <div class="about-content">
    <p>The ISTE Student Chapter at Government Engineering College, Kozhikode (GECK), 
      is one of the most active and influential student chapters under the Kerala Section of ISTE. Dedicated to fostering the holistic development of students, 
      this chapter organizes a variety of technical, managerial, and extracurricular activities, providing a platform for members to enhance their skills and knowledge.</p>


    <p>
        Our chapter has earned notable recognition over the years, including the Best Student Chapter Award, 
        awarded for our consistent excellence in conducting events, workshops, and fostering a vibrant academic community. Additionally, 
        the chapter has received the Special Appreciation Award for its outstanding contributions to technical education and student engagement.
    </p>

    <p>
      The Best Student Awards are also given to recognize exceptional individuals who demonstrate excellence in academics, 
      leadership, and active participation in the chapter's activities. The ISTE GECK Student Chapter continues to uphold a tradition of excellence, 
      making significant strides in creating future-ready professionals and leaders in engineering and technology.
    </p>


  </div>
</div>


    </div>
   
  )
}

export default Home