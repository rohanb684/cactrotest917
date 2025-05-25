import React, { useState } from "react";
import Stories from "../src/components/stories";
import StoryModal from "../src/components/storyModal/StoryModal";
const Home = () => {
  const [showStory, setShowStory] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const openStory = (index) => {
    setCurrentStoryIndex(index);
    setShowStory(true);
  };

  const closeStory = () => {
    setShowStory(false);
  };
  return (
    <div className="wrapper">
      <Stories onStoryClick={openStory} />

      {showStory && (
        <div className="storyModalContainer">
          <div className="storyModalWrapper">
            <StoryModal
              currentIndex={currentStoryIndex}
              setCurrentIndex={setCurrentStoryIndex}
              onClose={closeStory}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
