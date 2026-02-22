import React from 'react'
import eventsData from '../data/eventsData'
import './Events.css'

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

const EventsContent = ({ eventIndex = 0 }) => {
  return (
    <div className="events-content-container">
      {eventsData.map((event, index) => (
        <div key={index} className="events-content-item">
          <div className="events-content-left">
            <p className="events-description">{event.description}</p>
            <div className="events-content-line"></div>
          </div>
          <div className="events-content-right">
            <span className="events-rotated-text">{event.sideText}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

const Events = () => {
  return (
    <div>
      <EventsDecorativeLines />
      <EventsTitle />
      <EventsContent />
    </div>
  )
}

export default Events