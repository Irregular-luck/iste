import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HomeContent.css";
import { Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanity";

const HomeContent = () => {
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);

  // Shuffle helper
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [shuffledImages, setShuffledImages] = useState([]);

  // Fetch Home data from Sanity
  useEffect(() => {
    async function fetchHome() {
      try {
        const data = await client.fetch(`*[_type == "home"][0]`);
        setEvents(data?.events || []);

        const sliderUrls =
          data?.slider?.map((img) => urlFor(img).url()) || [];

        setSliderImages(sliderUrls);
        setShuffledImages(shuffleArray(sliderUrls));
      } catch (err) {
        console.error("Sanity Fetch Error:", err);
      }
    }

    fetchHome();
  }, []);

  // Slider animation interval
  useEffect(() => {
    if (shuffledImages.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 2;

        if (next >= shuffledImages.length) {
          setShuffledImages(shuffleArray(sliderImages));
          return 0;
        }

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [shuffledImages, sliderImages]);

  const pair =
    shuffledImages.length > 0
      ? [
          shuffledImages[index],
          shuffledImages[(index + 1) % shuffledImages.length],
        ]
      : [];

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
          <div className="slideshow-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="slide-row"
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -120, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {pair.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`slide-${i}`}
                    className="slide-img"
                  />
                ))}
              </motion.div>
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