import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Add this import
import eventsData from '../data/eventsData';
import './EventsContent.css';

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
    const location = useLocation(); // Hook to read the current URL
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            // If there is no hash, just start at the top of the page
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]); // The dependency array ensures this runs when 'location' updates

    return (
        <div className="events-page-wrapper">
            <EventsDecorativeLines />
            <EventsTitle />
            <div className="events-content-container">
                {eventsData.map((event, index) => {
                    const isEven = index % 2 !== 0;
                    return (
                        <div key={event.id} className={`events-content-item ${isEven ? 'reverse' : ''}`}>
                            <div id={event.link} className="events-content-text-section">
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

export default EventsContent;