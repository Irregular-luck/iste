import React from 'react'
import './TeamContent.css'


const TeamContent = () => {
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
                    <img src="frame1.png" alt="team" className='image-ani' />
                </div>
                <div className='frame'>
                    <img src="frame2.png" alt="team" className='image-ani' />
                </div>
                <div className='frame'>
                    <img src="frame3.png" alt="team" className='image-ani' />
                </div>
            </div>
        </div>
    )
}

export default TeamContent