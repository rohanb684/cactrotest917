import React, { useRef } from "react";
import StoryCard from "./storyCard";
import storiesData from "../data";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Stories = ({ onStoryClick }) => {
  const wrapperRef = useRef(null);

  const scroll = (direction) => {
    if (wrapperRef.current) {
      const { clientWidth } = wrapperRef.current;
      wrapperRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="stroiesContainer">
      <div className="storyCardWrapper" ref={wrapperRef}>
        {storiesData.map((story, i) => (
          <div
            className="storyCard"
            key={story.id}
            onClick={() => onStoryClick(i)}
          >
            <StoryCard story={story} />
          </div>
        ))}
      </div>

      <div className="controls">
        <button className="ctBtn" onClick={() => scroll("left")}>
          <FaArrowCircleLeft />
        </button>
        <button className="ctBtn" onClick={() => scroll("right")}>
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Stories;
