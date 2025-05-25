import React from "react";
import styles from "./StoryCard.module.css";

const StoryCard = ({ story }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          src={story.storyImage}
          alt=""
          loading="lazy"
          className={styles.stImage}
        />
      </div>
    </div>
  );
};

export default StoryCard;
