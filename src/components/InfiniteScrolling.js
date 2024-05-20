import React, { useEffect, useRef } from "react";

export const InfiniteScrolling = () => {
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
      style={{
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
      }}
    >
      <img
        src="https://khaihsn.xyz/wp-content/uploads/2024/05/CFD507AF-FC0D-45E2-9520-2E850305253B-scaled-e1715490491979.jpeg"
        alt="Infinite Scrolling"
        style={{
          height: '200px',
          marginRight: '20px',
        }}
      />
      <img
        src="https://khaihsn.xyz/wp-content/uploads/2024/05/CFD507AF-FC0D-45E2-9520-2E850305253B-scaled-e1715490491979.jpeg"
        alt="Infinite Scrolling"
      />
      <img
        src="https://khaihsn.xyz/wp-content/uploads/2024/05/CFD507AF-FC0D-45E2-9520-2E850305253B-scaled-e1715490491979.jpeg"
        alt="Infinite Scrolling"
      />
      {/* Add more images as needed */}
    </div>
  );
};
