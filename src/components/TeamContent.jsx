import { useEffect, useState } from "react";
import "./TeamContent.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { client, urlFor } from "../lib/sanity";

export default function TeamContent() {
  // 1. Initialize state for your Sanity images
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const result = await client.fetch(`*[_type == "team"][0].gallery`);
        // 2. Save the result to state
        setTeamData(result || []); 
      } catch (err) {
        console.error("Sanity Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  // 3. Prepare slides for Lightbox using the Sanity URLs
  const slides = teamData.map((img) => ({
    src: urlFor(img).url(),
  }));

  return (
    <div className="team">
      <div className="title">
        <h1 className="team-title">MEET THE TEAM</h1>
        <div className="bar-con"><div className="title-bar"></div></div>
      </div>

      <div className="image-frames">
        <div className="frame">
          {/* 4. Use teamData instead of data */}
          {teamData.map((imgObj, i) => (
            <ImageCard
              key={imgObj._key || i}
              // Pass the object to the card
              src={urlFor(imgObj).width(400).url()}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
}

/* ------------ Image Card stays the same ------------ */
function ImageCard({ src, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="img-box" onClick={onClick}>
      {!loaded && <Skeleton height="100%" width="100%" borderRadius={15} />}
      <img
        src={src}
        alt="team"
        onLoad={() => setLoaded(true)}
        className={`team-img ${loaded ? "show" : "hide"}`}
      />
    </div>
  );
}