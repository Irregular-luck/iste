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
  const event = eventsData[eventIndex]
  return (
    <div className="events-content-container">
      <div className="events-content-left">
        <p className="events-description">{event.description}</p>
        <div className="events-content-line"></div>
      </div>
      <div className="events-content-right">
        <span className="events-rotated-text">IGNIFEX</span>
      </div>
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