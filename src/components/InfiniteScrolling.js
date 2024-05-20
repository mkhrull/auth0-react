import React, { useEffect, useRef } from 'react';
import './InfiniteScrolling.css'; // Import the CSS file for styling

default const InfiniteScrolling = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth / 2;
      } else if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="infinite-scrolling"
      ref={containerRef}
    >
      <img
        src="https://khaihsn.xyz/wp-content/uploads/2024/05/CFD507AF-FC0D-45E2-9520-2E850305253B-scaled-e1715490491979.jpeg"
        alt="Infinite Scrolling"
        className="scrolling-image"
      />
      <img
        src="https://khaihsn.xyz/wp-content/uploads/2024/05/CFD507AF-FC0D-45E2-9520-2E850305253B-scaled-e1715490491979.jpeg"
        alt="Infinite Scrolling"
        className="scrolling-image"
      />
      <img
        src="https://khaihsn.xyz/wp-content/uploads/2024/05/CFD507AF-FC0D-45E2-9520-2E850305253B-scaled-e1715490491979.jpeg"
        alt="Infinite Scrolling"
        className="scrolling-image"
      />
      {/* Add more images as needed */}
    </div>
  );
};
