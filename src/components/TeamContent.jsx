import { useState } from "react";
import "./TeamContent.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function TeamContent() {
  const images = [
    "/frame1.png",
    "/frame2.png",
    "/frame3.png",
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="team">
      <div className="title">
        <h1 className="team-title">MEET THE TEAM</h1>
        <div className="bar-con">
          <div className="title-bar"></div>
        </div>
      </div>

      <div className="image-frames">
        <div className="frame">
          {images.map((src, i) => (
            <ImageCard
              key={i}
              src={src}
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
        slides={images.map((img) => ({ src: img }))}
      />
    </div>
  );
}

/* ------------ Image Card ------------ */

function ImageCard({ src, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="img-box" onClick={onClick}>
      {!loaded && (
        <Skeleton
          height="100%"
          width="100%"
          borderRadius={15}
          baseColor="#e5e7eb"
          highlightColor="#f3f4f6"
        />
      )}

      <img
        src={src}
        alt="team"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`team-img ${loaded ? "show" : "hide"}`}
      />
    </div>
  );
}
