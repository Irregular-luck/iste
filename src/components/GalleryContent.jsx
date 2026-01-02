import React from 'react'
import './GalleryContent.css'


const GalleryContent = () => {
    return (
        <div className='gallery'>
            <div className='title'>
                <h1 className='gallery-title'>GALLERY</h1>
                <div className='bar-con'>
                    <div className='title-bar'></div>
                </div>
            </div>
            <div className='image-frames'>
                <div className='frame'>
                    <img src="gallery1.png" alt="gallery" className='image-ani' />
                    <img src="gallery1.png" alt="gallery" className='image-ani' />
                    <img src="gallery1.png" alt="gallery" className='image-ani' />
                </div>
                <div className='frame'>
                    <img src="gallery2.png" alt="gallery" className='image-ani' />
                    <img src="gallery2.png" alt="gallery" className='image-ani' />
                    <img src="gallery2.png" alt="gallery" className='image-ani' />
                </div>
                <div className='frame'>
                    <img src="gallery3.png" alt="gallery" className='image-ani' />
                    <img src="gallery3.png" alt="gallery" className='image-ani' />
                    <img src="gallery3.png" alt="gallery" className='image-ani' />
                </div>
            </div>
        </div>
    )
}

export default GalleryContent