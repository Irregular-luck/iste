import React from 'react'
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

const Events = () => {
  return (
    <div>
      <EventsDecorativeLines />
      <EventsTitle />
    </div>
  )
}

export default Events