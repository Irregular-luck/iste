import React from 'react'
import './HomeContent.css'

const HomeContent = () => {
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

      <div className="about-section-container">
        <div className="about-title"><span className='a-letter'>A</span><span className='a-letter2'>A</span>BOUT US</div>

        <div className="about-content">
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
      <div className='regButtons'>
        <button className='pill-btn'>Membership</button>
        <button className='pill-btn'>Aakrithi Registration</button>

      </div>

      <div class="events-heading">
            <h2>EVENTS</h2>
       
       </div>
       <br />
       <br />
       <br />

       <div class="linee"></div>
       <br />
       <br />
       <br />
       <div class="linee"></div>
       <br />
       <div className='event-images'>
        <img src="./ignifex.png" alt="ignifex" />
        <img src="./logo.png" alt="iste-logo" />
        <img src="aakrithi.png" alt="aakrithi" />
        <img src="./insignis.png" alt="insignis" />

       </div>

       <div className='home-end'>
        <a className='explore' href='www.google.com'><u>EXPLORE MORE&gt;&gt;</u></a>
        <div className='linee2'></div>
        <br />
        <div className='pics'>
        <img src="./pic1.png" alt="" />
        <img src="./pic2.png" alt="" />
        <div className='glimpse-side'>
             <span className="glimpse-text">GLIMPSE</span>
        </div>
        </div>
        <a className='explore' href='www.google.com'>VIEW MORE&gt;&gt;</a>
       </div>
       

    </div>
  )
}

export default HomeContent
