import React, { useState, useEffect, useRef } from "react";
import PageWrapper from "../components/PageWrapper";
import "../styles/styles.css";
import royalOakImg from "../images/royaloak.png";
import theHarpImg from "../images/theharp.png";
import audleyImg from "../images/audley.png";
import newmanArmsImg from "../images/newmansarms.png";
import guineaGrillImg from "../images/guineagrill.png";
import jamaicaWhImg from "../images/jamaciawh.png";

const pubs = [
  {
    name: "The Royal Oak, Marylebone",
    address: "The Royal Oak, 74 York Street, London W1H 1QN",
    description: "Historic pub rebuilt after the Great Fire of London.",
    image: royalOakImg,
  },
  {
    name: "The Harp, Covent Garden",
    address: "The Harp, 47 Chandos Place, London WC2N",
    description: "Famous for its floral exterior and Thai food.",
    image: theHarpImg,
  },
  {
    name: "Audley Public House, Mayfair",
    address: "The Audley Public House, 41-43 Mount Street, London W1K 2RX",
    description:
      "Artfarm is behind the revival, the hospitality company responsible for The Fife Arm",
    image: audleyImg,
  },
  {
    name: "The Newman Arms, Fitzrovia",
    address: "The Newman Arms, 23 Rathbone Street, London W1T 1NG",
    description:
      "It's just as a pub like this should be – cosy, clubby and unpretentious",
    image: newmanArmsImg,
  },
  {
    name: "The Guinea Grill, Mayfair",
    address: "The Guinea Grill, 30 Bruton Street, London W1J 6NL",
    description:
      "In the front is a classic old pub serving Young's beer; through the back is the reliable Guinea Grill",
    image: guineaGrillImg,
  },
  {
    name: "Jamaica Wine House, The City",
    address: "Jamaica Wine House, St Michael's Alley, off Cornhill, London EC3V 9DS",
    description:
      "Reached through a maze of ancient alleyways and with dark wood partitions",
    image: jamaicaWhImg,
  },
];

export default function PubCrawl() {
  const [ratings, setRatings] = useState({});
  const [zoomImage, setZoomImage] = useState(null);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
      container.classList.add("dragging");
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      container.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      container.classList.remove("dragging");
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      container.classList.remove("dragging");
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const setRating = (index, value) => {
    setRatings((prev) => ({ ...prev, [index]: value }));
  };

  const sortedPubs = Object.keys(ratings)
    .map((key) => ({
      ...pubs[key],
      rating: ratings[key],
    }))
    .sort((a, b) => b.rating - a.rating);

  const closeZoom = () => setZoomImage(null);

  return (
    <PageWrapper noBox={true}>
      <h1 className="page-title">🍻 Pub Crawl 🍻</h1>
      <p className="page-subtitle">
        Rate your favorite pubs and see your personal top 5 update in real-time.
      </p>

      <div className="pubcrawl-layout">
        <div className="pubcrawl-left">
          {pubs.map((pub, index) => (
            <div key={index} className="pub-card">
              <img
                src={pub.image}
                alt={pub.name}
                onClick={() => setZoomImage(pub.image)}
                style={{ cursor: "pointer" }}
                draggable="false"
              />
              <div style={{ flexGrow: 1 }}>
                <h3>{pub.name}</h3>
                <p>{pub.address}</p>
                <p>{pub.description}</p>
              </div>
              <div className="rating-circles">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className={`rating-circle ${
                      ratings[index] >= num ? "active" : ""
                    }`}
                    onClick={() => setRating(index, num)}
                    title={`Rate ${num}`}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pubcrawl-right">
          <h2>Your Personal Top 5 Pubs</h2>
          {sortedPubs.slice(0, 5).map((pub, idx) => (
            <div className="top5-pub" key={idx}>
              <img src={pub.image} alt={pub.name} />
              <div className="top5-pub-info">
                <strong>
                  {idx + 1}. {pub.name}
                </strong>
                <p style={{ margin: 0 }}>{pub.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {zoomImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomImage} alt="Zoomed Pub" className="zoomed-img" />
        </div>
      )}
    </PageWrapper>
  );
}