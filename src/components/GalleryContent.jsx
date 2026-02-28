import { useEffect, useState } from "react";
import "./GalleryContent.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { client, urlFor } from "../lib/sanity";

export default function GalleryContent() {
  const [galleryData, setGalleryData] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const result = await client.fetch(
          `*[_type == "gallery"][0].images`
        );
        setGalleryData(result || []);
      } catch (err) {
        console.error("Sanity Fetch Error:", err);
      }
    }
    fetchImages();
  }, []);

  const slides = galleryData.map((img) => ({
    src: urlFor(img).url(),
  }));

  return (
    <div className="gallery">
      <div className="title">
        <h1 className="gallery-title">GALLERY</h1>
        <div className="bar-con">
          <div className="title-bar"></div>
        </div>
      </div>

      <div className="image-frames">
        <div className="frame">
          {galleryData.map((imgObj, i) => (
            <div
              className="img-box"
              key={imgObj._key || i}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={urlFor(imgObj).width(500).url()}
                alt="gallery"
                className="gallery-img"
              />
            </div>
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