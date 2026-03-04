import { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "./HomeContent.css";
import { Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanity";

const HomeContent = () => {
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [shuffledImages, setShuffledImages] = useState([]);

  // Fetch Home data from Sanity (Upcoming Events)
  useEffect(() => {
    async function fetchUpcomingEvents() {
      try {
        const data = await client.fetch(`
        *[_type == "upcomingEvent"] | order(_createdAt desc)
      `);
        setUpcomingEvents(data || []);
      } catch (err) {
        console.error("Sanity Fetch Error:", err);
      }
    }

    fetchUpcomingEvents();
  }, []);

  // Shuffle helper
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Fetch Home data from Sanity (Events & Slider)
  useEffect(() => {
    async function fetchHome() {
      try {
        const data = await client.fetch(`*[_type == "home"][0]`);
        setEvents(data?.events || []);

        // CRITICAL UPDATE: Map the Sanity images into objects with an 'id'
        // Framer Motion needs this ID to track the image sliding left!
        const sliderData =
          data?.slider?.map((img, i) => ({
            id: i,
            url: urlFor(img).url(),
          })) || [];

        setShuffledImages(shuffleArray(sliderData));
      } catch (err) {
        console.error("Sanity Fetch Error:", err);
      }
    }
    fetchHome();
  }, []);

  // Slider animation interval (Updates 1 step forward every 3 seconds)
  useEffect(() => {
    if (shuffledImages.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % shuffledImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [shuffledImages]);

  // Determine which two items are currently visible on screen
  const visibleItems =
    shuffledImages.length > 0
      ? [
        { ...shuffledImages[index], position: "left" },
        { ...shuffledImages[(index + 1) % shuffledImages.length], position: "right" },
      ]
      : [];

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = 320;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // The conveyor belt animation physics
  const slideVariants = {
    enter: (position) => ({
      x: position === "left" ? "-50%" : "100%",
      scale: position === "left" ? 0.85 : 1,
      opacity: 0,
    }),
    center: (position) => ({
      x: position === "left" ? "-55%" : "50%",
      scale: position === "left" ? 0.85 : 1,
      opacity: position === "left" ? 0.9 : 1,
      zIndex: position === "left" ? 1 : 2,
    }),
    exit: {
      x: "-55%",
      scale: 0.85,
      opacity: 0,
      zIndex: 0,
    },
  };

  function EventCard({ event }) {
    const [expanded, setExpanded] = useState(false);

    return (
      <div className="event-card">

        <img
          src={urlFor(event.mainImage).width(500).url()}
          alt={event.title}
          className="event-img"
        />

        <h3 className="event-title">{event.title}</h3>

        <div className={`event-description ${expanded ? "expanded" : ""}`}>
          {event.description}
        </div>

        <button
          className="read-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>

        {event.registrationUrl && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="event-register-btn"
          >
            Register
          </a>
        )}

      </div>
    );
  }

  return (
    <div className="home">
      <div className="wall">
        <div className="content">
          <img src="iste-logo.png" alt="ISTE Logo" className="logo" />
          <h1>
            <b>ISTE GECK</b>
          </h1>
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
        <div className="about-title">
          <span className="a-letter">A</span>BOUT US
        </div>
        <div className="about-content">
          <div className="line about-line"></div>
          <p>
            The ISTE Student Chapter at Government Engineering College,
            Kozhikode (GECK), is one of the most active and influential student
            chapters under the Kerala Section of ISTE. Dedicated to fostering
            the holistic development of students, this chapter organizes a
            variety of technical, managerial, and extracurricular activities,
            providing a platform for members to enhance their skills and
            knowledge.
          </p>
          <p>
            Our chapter has earned notable recognition over the years, including
            the Best Student Chapter Award, awarded for our consistent
            excellence in conducting events, workshops, and fostering a vibrant
            academic community. Additionally, the chapter has received the
            Special Appreciation Award for its outstanding contributions to
            technical education and student engagement.
          </p>
          <p>
            The Best Student Awards are also given to recognize exceptional
            individuals who demonstrate excellence in academics, leadership, and
            active participation in the chapter's activities. The ISTE GECK
            Student Chapter continues to uphold a tradition of excellence,
            making significant strides in creating future-ready professionals
            and leaders in engineering and technology.
          </p>
        </div>
      </div>

      <div className="events-registration">
        <h2>Upcoming Events</h2>
      </div>
      <div className="event-line"></div>

      <div className="event-registration-wrapper">
        <button className="nav-btn left" onClick={() => scroll("left")}>
          ❮
        </button>

        <div className="event-registration" ref={sliderRef}>

          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}

        </div>

        <button className="nav-btn right" onClick={() => scroll("right")}>
          ❯
        </button>
      </div>

      <div className="regButtons">
        <button className="pill-btn">Membership</button>
        <button className="pill-btn">Aakrithi Registration</button>
      </div>

      {/* EVENTS SECTION */}
      <div className="events-heading">
        <h2>EVENTS</h2>
      </div>
      <div className="linee"></div>
      <div className="linee"></div>

      <div className="event-images">
        {events.map((event, i) => (
          <Link key={i} to={`/Events#${event.slug}`}>
            <img
              src={urlFor(event.image).width(800).url()}
              alt="event"
            />
          </Link>
        ))}
      </div>

      {/* SLIDER SECTION */}
      <div className="home-end">
        <Link className="explore" to="/Events">
          <u>EXPLORE MORE&gt;&gt;</u>
        </Link>

        <div className="linee2"></div>

        <div className="pics">
          {/* UPDATED SLIDESHOW BOX WITH CONVEYOR ANIMATION */}
          <div
            className="slideshow-box"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <AnimatePresence initial={false}>
              {visibleItems.map((item) => (
                <motion.div
                  key={item.id}
                  custom={item.position}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    mass: 1,
                  }}
                  className="conveyor-card"
                >
                  <img
                    src={item.url}
                    alt={`Slide ${item.id}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="glimpse-side">
            <span className="glimpse-text">GLIMPSE</span>
          </div>
        </div>

        <Link className="explore" to="/Gallery">
          VIEW MORE&gt;&gt;
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;