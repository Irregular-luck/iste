import React from 'react'
import './TeamContent.css'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const TeamContent = () => {
    const [open, setopen] = React.useState(false)
    return (
        <div className='team'>
            <div className='title'>
                <h1 className='team-title'>MEET THE TEAM</h1>
                <div className='bar-con'>
                    <div className='title-bar'></div>
                </div>
            </div>
            <div className='image-frames'>
                <div className='frame'>
                    <button onClick={()=>setopen(true)}>
                        <img src="frame1.png" alt="team" className='image-ani' />
                    </button>
                </div>
                <div className='frame'>
                     <button onClick={()=>setopen(true)}>
                        <img src="frame2.png" alt="team" className='image-ani' />
                      </button>  
                
                </div>
                <div className='frame'>
                     <button onClick={()=>setopen(true)}>
                        <img src="frame3.png" alt="team" className='image-ani' />
                        </button>
                </div>
            </div>
            <Lightbox
            open={open}
            close={() => setopen(false)}
            slides={[
          { src: "frame1.png" },
          { src: "frame2.png" },
          { src: "frame3.png" },
        ]}
            />
        </div>
        
    )
}

export default TeamContent