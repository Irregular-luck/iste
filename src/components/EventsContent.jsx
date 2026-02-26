import React from 'react'
import eventsData from '../data/eventsData'
import './EventsContent.css'

const EventsDecorativeLines = () => {
    return (
        <div className="decorative-lines-container">
            <div className="decorative-line"></div>
            <div className="decorative-line"></div>
        </div>
    )
}

const EventsTitle = () => {
    return (
        <div className="events-title-container">
            <h1 className="events-title">EVENTS</h1>
            <div className="events-title-line"></div>
        </div>
    )
}

const EventsContent = () => {
    return (
        <div className="events-page-wrapper">
            <EventsDecorativeLines />
            <EventsTitle />
            <div className="events-content-container">
                {eventsData.map((event, index) => {
                    // Determine if the item is even or odd for alternating layout
                    const isEven = index % 2 !== 0;
                    return (
                        <div key={index} className={`events-content-item ${isEven ? 'reverse' : ''}`}>
                            <div className="events-content-text-section">
                                <p className="events-description">{event.description}</p>
                                <div className="events-content-line"></div>
                            </div>
                            <div className="events-content-title-section">
                                <span className="events-rotated-text">{event.sideText}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default EventsContent