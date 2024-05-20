import React, { useEffect, useRef, useState } from "react";

export const InfiniteScrolling = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

 useEffect(() => {
    const handleScroll = () => {
      // Update scroll position state
      setScrollPosition(containerRef.current.scrollLeft);
    };

    containerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      // Update scroll position state based on new window width
      setScrollPosition(containerRef.current.scrollLeft);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
          height: "512px",
          width: "512px",
          marginRight: "20px",
        }}
      />
      <img
        src="https://khaihsn.xyz/wp-content/uploads/2024/05/CFD507AF-FC0D-45E2-9520-2E850305253B-scaled-e1715490491979.jpeg"
        alt="Infinite Scrolling"
        style={{
          height: "512px",
          width: "512px",
          marginRight: "20px",
        }}
      />
      <img
        src="https://khaihsn.xyz/wp-content/uploads/2024/05/CFD507AF-FC0D-45E2-9520-2E850305253B-scaled-e1715490491979.jpeg"
        alt="Infinite Scrolling"
        style={{
          height: "512px",
          width: "512px",
          marginRight: "20px",
        }}
      />
      {/* Add more images as needed */}
    </div>
  );
};
