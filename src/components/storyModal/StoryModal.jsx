import React from "react";
import styles from "./StoryModal.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";
import storiesData from "../../data";

const StoryModal = ({ currentIndex, setCurrentIndex, onClose }) => {
  const story = storiesData[currentIndex];

  const handleNext = () => {
    if (currentIndex < storiesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      onClose();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.closeIcon} onClick={onClose}>
        <IoIosCloseCircle />
      </div>

      <div className={styles.wrapper}>
        <AnimatePresence mode="wait">
          <motion.img
            key={story.id} // ✅ triggers re-animation
            src={story.storyImage}
            alt="story"
            className={styles.image}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>
      <div className={styles.leftcontrol} onClick={handlePrev}></div>
      <div className={styles.rightcontrol} onClick={handleNext}></div>
    </div>
  );
};

export default StoryModal;
